// /src/pages/Favorito/Favorito.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Zap } from 'lucide-react'; 
import { useFavorites } from '../../hooks/FavoritesContext.jsx'; 
import { SideBarComponent } from '../../components/Sidebar';
// Reutiliza os estilos da Home:
import {
    PageContainer,
    Content,
    SectionTitle,
    CategoryGrid,
    CategoryCard,
    CardHeader,
    CardTitle,
    CardSubText,
    DifficultyButtons,
    DifficultyButton,
    EmptyState,
    Header
} from '../Home/style.jsx'; 

// 🚨 COMPONENTE RENOMEADO PARA 'Favorito'
export function Favorito() { 
    const { favorites, toggleFavorite } = useFavorites();
    const navigate = useNavigate();

    const handleStartQuiz = (category) => {
        navigate(`/quiz?category=${category}&difficulty=easy`); 
    };

    return (
        <PageContainer>
            <SideBarComponent />
            <Content>
                
                <Header>
                    <SectionTitle>
                        <Star size={24} fill="#ffc720" color="#ffc720" /> Meu Quiz Favorito
                    </SectionTitle>
                </Header>
                

                {favorites.length === 0 ? (
                    <EmptyState style={{ marginTop: '50px' }}>
                        Você ainda não favoritou nenhum quiz.
                    </EmptyState>
                ) : (
                    <CategoryGrid>
                        {favorites.map((area) => {
                            const IconComponent = area.icone || Zap; 

                            return (
                                <CategoryCard key={area.id}>
                                    <CardHeader>
                                        <IconComponent size={20} /> 
                                        
                                        {/* Botão para desfavoritar */}
                                        <Star 
                                            size={24} 
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                                toggleFavorite(area); 
                                            }}
                                            fill="#ffc720"
                                            color="#ffc720"
                                            style={{ cursor: 'pointer', marginLeft: 'auto' }}
                                        />
                                    </CardHeader>

                                    <CardTitle>{area.nome}</CardTitle>
                                    <CardSubText>Ação Rápida:</CardSubText>

                                    <DifficultyButtons>
                                        <DifficultyButton 
                                            color="green" 
                                            onClick={() => handleStartQuiz(area.nome)}>
                                            Jogar Rápido
                                        </DifficultyButton>
                                    </DifficultyButtons>
                                </CategoryCard>
                            );
                        })}
                    </CategoryGrid>
                )}
            </Content>
        </PageContainer>
    );
}