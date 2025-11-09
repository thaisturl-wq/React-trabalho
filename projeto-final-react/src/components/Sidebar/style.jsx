import styled from 'styled-components';
import { Link } from 'react-router-dom'; 

// 🚨 PALETA DE CORES TEMA MARIO BROS (ADICIONADA AQUI PARA GARANTIR QUE FUNCIONE)
const MARIO_COLORS = {
    COIN_YELLOW: '#FFCC00',    // Amarelo da Moeda (Destaque)
    PIPE_GREEN: '#00871B',     // Verde do Cano (Hover)
    DANGER_RED: '#E72020',     // Vermelho do Casco (Destaque Secundário)
    BLACK_OUTLINE: '#000000',  // Borda de Pixel Art
    SIDEBAR_BG: '#333333',     // Fundo Escuro para Contraste
};

export const Container = styled.nav`
    width: 240px;
    height: 100vh;
    /* Fundo Escuro */
    background-color: ${MARIO_COLORS.SIDEBAR_BG};
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem;
    gap: 16px;
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;
    /* Sombra forte para efeito 3D */
    box-shadow: 6px 0 0px ${MARIO_COLORS.BLACK_OUTLINE}; 
`;

export const Logo = styled.div`
    font-size: 1.2rem; /* Reduzido para caber na fonte pixel art */
    font-weight: 700;
    /* Amarelo da Moeda */
    color: ${MARIO_COLORS.COIN_YELLOW};
    text-align: center;
    margin-bottom: 2rem;
    /* Sombra para destaque */
    text-shadow: 2px 2px 0px ${MARIO_COLORS.DANGER_RED}; 
`;

export const MenuItem = styled.button`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    
    /* Mais quadrado e com borda de bloco */
    border-radius: 4px; 
    cursor: pointer;
    background: none;
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    color: inherit;
    text-align: left;
    font-size: 1rem;
    transition: all 0.1s ease-in-out;
    /* Sombra de bloco */
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    &:hover, &:focus {
        /* Verde do Cano ao passar o mouse */
        background-color: ${MARIO_COLORS.PIPE_GREEN};
        /* Efeito de pulo do Mario */
        transform: translate(-3px, -3px); 
        outline: none;
        box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }

    &:active {
        /* Pressiona o botão para baixo */
        transform: translate(0, 0); 
        box-shadow: 3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};
        background-color: ${MARIO_COLORS.PIPE_GREEN};
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* Cor da Moeda */
    color: ${MARIO_COLORS.COIN_YELLOW};
`;

export const Label = styled.span`
    /* Font size reduzido para a fonte pixel art */
    font-size: 0.7rem; 
    font-weight: 500;
`;

export const Footer = styled.div`
    margin-top: auto;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ProfileButton = styled(MenuItem)`
    /* Fundo ligeiramente diferente para o Perfil */
    background-color: #111827; 
    border-color: ${MARIO_COLORS.COIN_YELLOW}; /* Destaque na borda */

    &:hover, &:focus {
        background-color: #1f293b;
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

// import styled from 'styled-components';

// export const Container = styled.nav`
//   width: 240px;
//   height: 100vh;
//   background-color: #0f172a;
//   color: #fff;
//   display: flex;
//   flex-direction: column;
//   padding: 1.5rem 1rem;
//   gap: 16px;
//   font-family: 'Inter', sans-serif;
//   box-shadow: 2px 0 8px rgba(0,0,0,0.3);
// `;

// export const Logo = styled.div`
//   font-size: 1.5rem;
//   font-weight: 700;
//   color: #ff7b00;
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// export const MenuItem = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   padding: 12px 16px;
//   border-radius: 10px;
//   cursor: pointer;
//   background: none;
//   border: none;
//   color: inherit;
//   text-align: left;
//   font-size: 1rem;
//   transition: all 0.25s ease-in-out;

//   &:hover, &:focus {
//     background-color: #1e293b;
//     transform: translateX(4px);
//     outline: none;
//     box-shadow: 0 4px 12px rgba(0,0,0,0.3);
//   }

//   &:active {
//     transform: translateX(2px);
//     background-color: #273348;
//   }
// `;

// export const IconWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #ff7b00;
// `;

// export const Label = styled.span`
//   font-size: 1rem;
//   font-weight: 500;
// `;

// export const Footer = styled.div`
//   margin-top: auto;
//   padding-top: 2rem;
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// export const ProfileButton = styled(MenuItem)`
//   background-color: #111827;
//   border-radius: 10px;

//   &:hover, &:focus {
//     background-color: #1f293b;
//     transform: translateX(4px);
//     box-shadow: 0 4px 12px rgba(0,0,0,0.3);
//   }
// `;
// /components/Sidebar/style.jsx

// ... Imports ...

