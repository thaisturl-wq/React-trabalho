import React, { useEffect, useState, useCallback } from 'react';
import { PlusCircle, Star, Zap, Book } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
import { getRanking, addPoints } from '../../services/Api'; 
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
import { SideBarComponent } from '../../components/Sidebar'; 

export function Home() {
  const navigate = useNavigate();
  const [loggedUser, setLoggedUser] = useState(null);
  const [ranking, setRanking] = useState([]);
  const [loadingRanking, setLoadingRanking] = useState(true);

  const loadRanking = useCallback(async () => {
    setLoadingRanking(true);
    try {
        const data = await getRanking();
        setRanking(data);
    } catch (error) {
        console.error("Erro ao carregar ranking:", error.message);
    } finally {
        setLoadingRanking(false);
    }
  }, []);

  const handleUpdatePoints = async (points) => {
    if (!loggedUser || !loggedUser.id) return;

    try {
        await addPoints(loggedUser.id, points);
        
        const newPoints = (loggedUser.pontos || 0) + points;
        const updatedUser = { ...loggedUser, pontos: newPoints };
        setLoggedUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));

        await loadRanking(); 
    } catch (error) {
        console.error("Falha ao atualizar pontos:", error.message);
    }
  };

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setLoggedUser(JSON.parse(userData));
    } else {
      // REDIRECIONAMENTO CORRIGIDO: Agora aponta para a rota padrão "/" (Login)
      navigate('/'); 
      return;
    }
    
    loadRanking();
  }, [loadRanking, navigate]);
  
  if (!loggedUser) {
    // Retorna null ou um loader leve durante o redirecionamento
    return <div style={{ padding: '50px', color: '#f8f9fa', backgroundColor: '#1e1e2e', minHeight: '100vh' }}>Aguarde...</div>;
  }
  
  const rankingTop = ranking.slice(0, 3);
  
  const areasFocais = [
    { nome: "Matemática", icone: Zap, id: 101 },
    { nome: "Português", icone: Book, id: 102 },
  ];

  const handleStartQuiz = (category, difficulty) => {
      let points = 0;
      if (difficulty === 'Fácil') points = 10;
      else if (difficulty === 'Médio') points = 25;
      else if (difficulty === 'Difícil') points = 50;

      // Substituído o alert() por console.log para evitar travar o app
      console.log(`Simulando jogo: Questão de ${category} (${difficulty}). Ganhando ${points} pontos.`);
      
      
      handleUpdatePoints(points); 
      
      
  };

  return (
    <PageContainer>
      <SideBarComponent /> 
      
      <Content>
        <Header>
          <div>
            <Title>Boas-vindas, {loggedUser.nome}!</Title>
            <SubTitle>
              Encontre suas áreas de interesse e contribua com a comunidade.
            </SubTitle>
          </div>
          
          <CreateQuizButton>
            <PlusCircle size={20} /> Criar Nova Pergunta
          </CreateQuizButton>
        </Header>
        
        <SearchBar>
          <input 
            type="text" 
            placeholder="Pesquisar pergunta, categoria ou autor..." 
          />
        </SearchBar>

        <MainSection>
          <div style={{ flex: 1 }}>
            <SectionTitle>
               <Star size={24} fill="#ffc720" color="#ffc720"/> Áreas Focais (Principal)
            </SectionTitle>
            
            <CategoryGrid>
              {areasFocais.map((area) => {
                const IconComponent = area.icone;

                return (
                  <CategoryCard key={area.id}>
                    <CardHeader>
                        <IconComponent size={20} /> 
                    </CardHeader>
                    
                    <CardTitle>{area.nome}</CardTitle>
                    <CardSubText>Iniciar Rápido (5 Perguntas):</CardSubText>
                    
                    <DifficultyButtons>
                      <DifficultyButton color="green" onClick={() => handleStartQuiz(area.nome, 'Fácil')}>Fácil</DifficultyButton>
                      <DifficultyButton color="yellow" onClick={() => handleStartQuiz(area.nome, 'Médio')}>Médio</DifficultyButton>
                      <DifficultyButton color="red" onClick={() => handleStartQuiz(area.nome, 'Difícil')}>Difícil</DifficultyButton>
                    </DifficultyButtons>
                  </CategoryCard>
                )
              })}
            </CategoryGrid>
          </div>

          <RankingBox>
            <h2>Top 3 Jogadores</h2>
            {loadingRanking ? (
                <p style={{ textAlign: 'center', color: '#7d8091' }}>Carregando ranking...</p>
            ) : rankingTop.length > 0 ? (
                rankingTop.map((user, i) => (
                    <RankingItem key={user.id} style={user.id === loggedUser.id ? { border: `1px solid #724CF9` } : {}}>
                        <span>{i + 1}º</span> {user.nome} - {user.pontos} pts
                    </RankingItem>
                ))
            ) : (
                <p style={{ textAlign: 'center', color: '#7d8091' }}>Nenhum jogador encontrado no ranking.</p>
            )}
          </RankingBox>
        </MainSection>
        
        <QuestionsSection>
          <SectionTitle>Perguntas Populares</SectionTitle>
          <EmptyState>
            Nenhuma pergunta encontrada no momento.
          </EmptyState>
        </QuestionsSection>

      </Content>
    </PageContainer>
  )
}
