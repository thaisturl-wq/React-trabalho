import React, { useEffect, useState } from 'react'
// import { api } from '../../services/Api.jsx'
import { Container, Title, Section, Card } from './style.jsx'
import { SideBarComponent } from '../../components/Sidebar'

export function Home() {

  const [rankingTop, setRankingTop] = useState([])

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
    <Container>
      <SideBarComponent />
      <Title>Bem-vindo ao QuizMaster!</Title>

      <Section>
        <h2>Top 3 jogadores</h2>
        {rankingTop.map((user, i) => (
          <Card key={user.id}>
            {i + 1}º {user.nome} - {user.pontos} pts
          </Card>
        ))}
      </Section>
    </Container>
  )
}
