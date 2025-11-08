import React from 'react'
import { Button, Container, Span } from './style'

export function Login() {

  return (
    <Container>

      <Span>Resultado:</Span>

      <Button primary={true}>Salvar</Button>

      <Button primary={false}>Cancelar</Button>
      
    </Container>
  )
}
