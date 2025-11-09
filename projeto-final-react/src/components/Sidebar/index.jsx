import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Grid, Star, BarChart3, User, LogIn } from 'lucide-react';
import { Container, MenuItem, IconWrapper, Label, Logo, Footer, ProfileButton } from './style.jsx';

export function SideBarComponent() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', icon: Home, link: '/home' },
    { name: 'Categorias', icon: Grid, link: '/categoria' },
    { name: 'Favorito', icon: Star, link: '/favorito' },
    { name: 'Ranking', icon: BarChart3, link: '/ranking' },
  ];

  const userItems = [
    { name: 'Perfil', icon: User, link: '/perfil' },
    { name: 'Login', icon: LogIn, link: '/login' },
  ];

  const renderMenuItem = (item, isProfile = false) => {
    const isActive = location.pathname === item.link;
    const commonStyles = {
      backgroundColor: isActive ? '#1e293b' : isProfile ? '#111827' : 'transparent',
    };

    const Component = isProfile ? ProfileButton : MenuItem;

    return (
      <Component
        key={item.name}
        onClick={() => navigate(item.link)}
        aria-label={`Ir para ${item.name}`}
        style={commonStyles}
      >
        <IconWrapper>
          <item.icon size={22} />
        </IconWrapper>
        <Label>{item.name}</Label>
      </Component>
    );
  };

  return (
    <Container>
      <Logo>QuizMaster</Logo>

      <nav>
        {menuItems.map(item => renderMenuItem(item))}
      </nav>

      <Footer>
        {userItems.map(item => renderMenuItem(item, true))}
      </Footer>
    </Container>
  );
}
