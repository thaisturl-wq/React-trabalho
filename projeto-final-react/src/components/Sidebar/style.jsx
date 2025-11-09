import styled from 'styled-components';

// 🎨 PALETA DE CORES - ESTILO MARIO BROS
const MARIO_COLORS = {
    COIN_YELLOW: '#FFCC00',
    PIPE_GREEN: '#00871B',
    DANGER_RED: '#E72020',
    BLACK_OUTLINE: '#000000',
    SIDEBAR_BG: '#333333',
};

// Container principal da sidebar
export const Container = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 260px;
    background-color: ${MARIO_COLORS.SIDEBAR_BG};
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    box-shadow: 6px 0 0px ${MARIO_COLORS.BLACK_OUTLINE};
    font-family: 'Press Start 2P', cursive;
    overflow-y: auto;
    z-index: 1000;
    transition: transform 0.3s ease;
    gap: 1.5rem; 

    @media (max-width: 1024px) {
        width: 220px;
        padding: 1.5rem 0.8rem;
    }

    @media (max-width: 768px) {
        /* Define a largura máxima para a sidebar no mobile */
        width: 200px; 
        max-width: 200px;
        /* Translação baseada na largura (200px) para deslizar como gaveta */
        transform: translateX(${props => (props.isOpen ? '0' : '-200px')});
        box-shadow: 4px 0 12px rgba(0,0,0,0.5);
        padding: 1rem 0.5rem; 
        align-items: center; 
    }
`;

// Botão de toggle para mobile
export const ToggleButton = styled.button`
    display: none;
    position: fixed;
    top: 20px;
    /* Movimenta o botão para o lado quando a sidebar está aberta */
    left: ${props => (props.isOpen ? '205px' : '20px')}; 
    z-index: 1100;
    background-color: ${MARIO_COLORS.COIN_YELLOW};
    border: 2px solid ${MARIO_COLORS.BLACK_OUTLINE};
    padding: 8px;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
    color: ${MARIO_COLORS.BLACK_OUTLINE};
    transition: left 0.3s ease; 

    @media (max-width: 768px) {
        display: block;
    }
`;

// Logo da sidebar
export const Logo = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: ${MARIO_COLORS.COIN_YELLOW};
    text-align: center;
    margin-bottom: 0.5rem; 
    text-shadow: 2px 2px 0px ${MARIO_COLORS.DANGER_RED};

    @media (max-width: 768px) {
        font-size: 0.7rem;
        margin-bottom: 0;
        width: 100%; 
    }
`;

// Container para os itens principais do menu (organiza a grade no mobile)
export const MenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 12px; 
    width: 100%; 

    @media (max-width: 768px) {
        flex-direction: row; 
        flex-wrap: wrap; 
        justify-content: center; 
        gap: 8px; 
        width: 100%; 
    }
`;

// Base de todos os itens do menu
export const MenuItem = styled.button`
    width: 100%; /* Largura total no desktop */
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 6px;
    cursor: pointer;
    background: ${props => (props.isActive ? MARIO_COLORS.PIPE_GREEN : 'transparent')};
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    color: #fff;
    font-size: 0.75rem;
    text-align: left;
    transition: all 0.15s ease-in-out;
    box-shadow: 4px 4px 0 ${MARIO_COLORS.BLACK_OUTLINE};
    margin: 0; /* Garante que não haja margem extra no desktop */

    &:hover, &:focus {
        background-color: ${MARIO_COLORS.PIPE_GREEN};
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0 ${MARIO_COLORS.BLACK_OUTLINE};
        outline: none;
    }

    &:active {
        transform: translate(0, 0);
        box-shadow: 3px 3px 0 ${MARIO_COLORS.BLACK_OUTLINE};
        background-color: ${MARIO_COLORS.PIPE_GREEN};
    }

    @media (max-width: 768px) {
        /* Define o tamanho fixo para a grade 2x2 no mobile */
        width: 80px; 
        max-width: 80px; 
        flex-direction: column;
        justify-content: center; 
        align-items: center; 
        padding: 10px 4px;
        font-size: 0.6rem;
        box-shadow: 2px 2px 0 ${MARIO_COLORS.BLACK_OUTLINE};
        text-align: center; 
    }
`;

// Perfil e Login usam o mesmo estilo que MenuItem (com cor de destaque)
export const ProfileButton = styled(MenuItem)`
    background: ${props => (props.isActive ? MARIO_COLORS.DANGER_RED : 'transparent')};
    
    &:hover, &:focus {
        background-color: ${MARIO_COLORS.DANGER_RED};
    }

    &:active {
        background-color: ${MARIO_COLORS.DANGER_RED};
    }
`;

// Ícones iguais para todos
export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${MARIO_COLORS.COIN_YELLOW};
    font-size: 1.2rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

// Labels iguais para todos
export const Label = styled.span`
    white-space: nowrap; 
    font-size: 0.7rem;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 0.55rem;
    }
`;

// Footer da sidebar
export const Footer = styled.div`
    margin-top: auto;
    padding-top: 1.5rem; 
    border-top: 3px dashed ${MARIO_COLORS.BLACK_OUTLINE};
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%; 

    @media (max-width: 768px) {
        margin-top: 1rem; 
        border-top: none; 
        padding-top: 0;
        flex-direction: row; 
        flex-wrap: wrap; 
        justify-content: center; 
        gap: 8px;
    }
`;