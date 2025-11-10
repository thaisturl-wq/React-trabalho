import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Star, Zap, Book } from 'lucide-react';
import { getRanking } from '../../services/Api';
import { SideBarComponent } from '../../components/Sidebar';
import {
  PageContainer,
  Content,
  Header,
  Title,
  SubTitle,
  CreateQuizButton,
  SearchBar,
  MainSection,
  SectionTitle,
  CategoryGrid,
  CategoryCard,
  CardHeader,
  CardTitle,
  CardSubText,
  DifficultyButtons,
  DifficultyButton,
  RankingBox,
  RankingItem,
  QuestionsSection,
  EmptyState
} from './style.jsx';

export function Home() {
  
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [loadingRanking, setLoadingRanking] = useState(true);
  const [search, setSearch] = useState('');

  // 🔹 Carregar ranking
  const loadRanking = useCallback(async () => {
    setLoadingRanking(true);
    try {
      const data = await getRanking();
      setRanking(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Erro ao carregar ranking:", error.message);
      setRanking([]);
    } finally {
      setLoadingRanking(false);
    }
  }, []);

  // 🔹 Carregar usuário logado
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setLoggedUser(JSON.parse(userData));
      } catch {
        localStorage.removeItem('user');
      }
    }
    loadRanking();
  }, [loadRanking]);

  const userName = loggedUser?.nome ?? null;
  const rankingTop = ranking.slice(0, 3);

  // 🔹 Categorias principais
  const areasFocais = [
    { nome: "Matemática", icone: Zap, id: 19 },
    { nome: "Português", icone: Book, id: 10 },
  ];

  // 🔹 Clicar no card da categoria
  const handleCategoryClick = () => {
    navigate('/categoria');
  };

  // 🔹 Escolher dificuldade → Ir pro quiz
  const handleDifficultySelect = (category, difficulty) => {
    navigate('/quiz', {
      state: {
        category,
        difficulty,
        user: loggedUser
      }
    });
  };

  return (
    <PageContainer>
      <SideBarComponent />

      <Content>
        {/* Cabeçalho */}
        <Header>
          <div>
            <Title>
              {userName ? `Boas-vindas, ${userName}!` : 'Boas-vindas ao QuizMaster!'}
            </Title>
            <SubTitle>Explore categorias, desafie-se e suba no ranking!</SubTitle>
          </div>

          {userName ? (
            <CreateQuizButton onClick={() => navigate('/criar')}>
              <PlusCircle size={20} /> Criar Pergunta
            </CreateQuizButton>
          ) : (
            <CreateQuizButton onClick={() => navigate('/login')}>
              Entrar
            </CreateQuizButton>
          )}
        </Header>

        {/* Barra de pesquisa */}
        <SearchBar>
          <input
            type="text"
            placeholder="Pesquisar categoria..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchBar>

        {/* Área principal */}
        <MainSection>
          <div style={{ flex: 1 }}>
            <SectionTitle>
              <Star size={24} fill="#ffc720" color="#ffc720" /> Áreas Focais
            </SectionTitle>

            <CategoryGrid>
              {areasFocais
                .filter((area) => area.nome.toLowerCase().includes(search.toLowerCase()))
                .map((area) => {
                  const Icon = area.icone;
                  return (
                    <CategoryCard
                      key={area.id}
                      onClick={handleCategoryClick}
                      style={{ cursor: 'pointer' }}
                    >
                      <CardHeader>
                        <Icon size={20} />
                      </CardHeader>

                      <CardTitle>{area.nome}</CardTitle>
                      <CardSubText>Escolha a dificuldade:</CardSubText>

                      <DifficultyButtons>
                        {['Fácil', 'Médio', 'Difícil'].map((level, i) => (
                          <DifficultyButton
                            key={i}
                            color={level === 'Fácil' ? 'green' : level === 'Médio' ? 'yellow' : 'red'}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDifficultySelect(area.nome, level);
                            }}
                          >
                            {level}
                          </DifficultyButton>
                        ))}
                      </DifficultyButtons>
                    </CategoryCard>
                  );
                })}
            </CategoryGrid>
          </div>

          {/* Ranking */}
          <RankingBox>
            <h2>Top 3 Jogadores</h2>

            {loadingRanking ? (
              <p style={{ textAlign: 'center', color: '#7d8091' }}>Carregando ranking...</p>
            ) : rankingTop.length > 0 ? (
              rankingTop.map((user, i) => (
                <RankingItem
                  key={user.id}
                  style={user.id === loggedUser?.id ? { border: '1px solid #724CF9' } : {}}
                >
                  <span>{i + 1}º</span> {user.nome} - {user.pontos} pts
                </RankingItem>
              ))
            ) : (
              <p style={{ textAlign: 'center', color: '#7d8091' }}>
                Nenhum jogador encontrado no ranking.
              </p>
            )}
          </RankingBox>
        </MainSection>

        {/* Perguntas Populares */}
        <QuestionsSection>
          <SectionTitle>Perguntas Populares</SectionTitle>
          <EmptyState>Nenhuma pergunta disponível no momento.</EmptyState>
          {!userName && (
            <p style={{ color: '#9aa0b4' }}>
              Você está no modo visitante — faça login para criar perguntas e pontuar.
            </p>
          )}
        </QuestionsSection>
      </Content>
    </PageContainer>
  );
}
