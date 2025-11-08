import React from 'react'
import { Button, Container, Span } from './style'
import { AreaCard } from './AreaCard'

export function Home() {

  return (
    <Container>

      <AreaCard />

      <Span>Resultado:</Span>

      <Button primary={true}>Salvar</Button>

      <Button primary={false}>Cancelar</Button>
      
    </Container>
  )
}
