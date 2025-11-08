// import React from 'react'
import { useNavegando } from 'react-router-dom'
import { Home, Grid, Star, BarChart3, User } from 'lucide-react'
import { Container, MenuItem, IconWrapper, Label } from './style.jsx'

export function SideBarComponent() {

  const navegacao = useNavegando()

  const menuItems = [
    { name: 'Home', icon: Home, link: '/home' },
    { name: 'Categorias', icon: Grid, link: '/categorias' },
    { name: 'Favoritos', icon: Star, link: '/favoritos' },
    { name: 'Ranking', icon: BarChart3, link: '/ranking' },
    { name: 'Perfil', icon: User, link: '/perfil' },
  ];

  return (
    <Container>
      {menuItems.map((item, index) => (
        <MenuItem key={index} onClick={() => navigate(item.link)}>
          <IconWrapper>
            <item.icon size={22} />
          </IconWrapper>
          <Label>{item.name}</Label>
        </MenuItem>
      ))}
    </Container>
  )
}
