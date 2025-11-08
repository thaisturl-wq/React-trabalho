import React, { useEffect, useState } from 'react'
// import { api } from '../../services/Api.jsx'
import { PageContainer, Content, Header, Title, SubTitle, CreateQuizButton, MainSection, SectionTitle, CategoryGrid, CategoryCard, CardTitle, DifficultyButtons, DifficultyButton, RankingBox, RankingItem } from './style.jsx'
import { SideBarComponent } from '../../components/Sidebar'
import { PlusCircle } from 'lucide-react';

export function Home() {

  const [rankingTop, setRankingTop] = useState([])

  const [categorias] = useState([
    { nome: "Conhecimento Geral" },
    { nome: "Livros" },
    { nome: "Filmes" },
  ]);

  useEffect(() => {
    async function loadTop3(){
      try {
        // const resposta = await api.get('/ranking?_limit=3')
        // setRankingTop(resposta.data)
         setRankingTop([
          { id: 1, nome: 'Hyago', pontos: 320 },
          { id: 2, nome: 'Lucas', pontos: 280 },
          { id: 3, nome: 'Gabriel', pontos: 250 },
         ])
      } catch (err) {
        console.error('Erro ao buscar ranking:', err)
      }
    }
    loadTop3()
  }, [])

  return (
    <PageContainer>
      <SideBarComponent />
      <Content>
        <Header>
          <div>
            <Title>Bem-vindo ao QuizMaster!</Title>
            <SubTitle>
              Confira as <strong>categorias mais populares</strong> ou crie seu próprio quiz personalizado!
            </SubTitle>
          </div>

          <CreateQuizButton>
            <PlusCircle size={20} /> Criar Novo Quiz
          </CreateQuizButton>
        </Header>

        <MainSection>
          <div>
            <SectionTitle>Categorias mais populares</SectionTitle>
            <CategoryGrid>
              {categorias.map((cat, index) => (
                <CategoryCard key={index}>
                  <CardTitle>{cat.nome}</CardTitle>
                  <p>Iniciar Rápido (5 perguntas)</p>
                  <DifficultyButtons>
                    <DifficultyButton color="green">Fácil</DifficultyButton>
                    <DifficultyButton color="yellow">Médio</DifficultyButton>
                    <DifficultyButton color="red">Difícil</DifficultyButton>
                  </DifficultyButtons>
                </CategoryCard>
              ))}
            </CategoryGrid>
          </div>

          <RankingBox>
            <h2>Top 3 Jogadores</h2>
            {rankingTop.map((user,i) => (
              <RankingItem key={user.id}>
                <span>{i + 1}º</span> {user.nome} - {user.pontos} pts
              </RankingItem>
            ))}
          </RankingBox>
        </MainSection>
      </Content>
    </PageContainer>
  )
}
