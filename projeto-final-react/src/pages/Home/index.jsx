import React, { useEffect, useState } from 'react'
import { PageContainer, Content, Header, Title, SubTitle, CreateQuizButton, Banner, MainSection, CategorySection, SectionTitle, CategoryGrid, CategoryCard, CardTitle, FavoriteButton, DifficultyButtons, DifficultyButton, RankingBox, RankingItem } from './style.jsx'
import { SideBarComponent } from '../../components/Sidebar'
import { PlusCircle, Star } from 'lucide-react'

export function Home() {
  const [rankingTop, setRankingTop] = useState([])
  const [categorias] = useState([
    { nome: "Conhecimento Geral", favorited: false },
    { nome: "Livros", favorited: true },
    { nome: "Filmes", favorited: false },
  ])

  useEffect(() => {
    setRankingTop([
      { id: 1, nome: 'Hyago', pontos: 320 },
      { id: 2, nome: 'Lucas', pontos: 280 },
      { id: 3, nome: 'Gabriel', pontos: 250 },
    ])
  }, [])

  return (
    <PageContainer>
      <SideBarComponent />
      <Content>
        <Header>
          <div>
            <Title>Bem-vindo ao QuizMaster!</Title>
            <SubTitle>
              Confira as <strong>categorias mais populares</strong> ou crie seu próprio quiz!
            </SubTitle>
          </div>

          <CreateQuizButton>
            <PlusCircle size={20} /> Criar Novo Quiz
          </CreateQuizButton>
        </Header>

        <Banner>
          Desafie-se hoje e veja se consegue chegar ao topo do ranking!
        </Banner>

        <MainSection>
          <CategorySection>
            <SectionTitle>Categorias Populares</SectionTitle>
            <CategoryGrid>
              {categorias.map((cat, index) => (
                <CategoryCard key={index}>
                  <CardTitle>{cat.nome}</CardTitle>
                  <p>Inicie rápido com 5 perguntas</p>
                  <DifficultyButtons>
                    <DifficultyButton color="green">Fácil</DifficultyButton>
                    <DifficultyButton color="yellow">Médio</DifficultyButton>
                    <DifficultyButton color="red">Difícil</DifficultyButton>
                  </DifficultyButtons>
                  <FavoriteButton favorited={cat.favorited}>
                    <Star />
                  </FavoriteButton>
                </CategoryCard>
              ))}
            </CategoryGrid>
          </CategorySection>

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
