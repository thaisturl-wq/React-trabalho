import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

// 🚨 PALETA DE CORES TEMA MARIO BROS
const MARIO_COLORS = {
    SKY_BLUE: '#6C83FF',        // Azul do Céu (Fundo)
    BLOCK_BROWN: '#955816',     // Marrom de Bloco (Card)
    COIN_YELLOW: '#FFCC00',     // Amarelo da Moeda (Destaque Principal)
    PIPE_GREEN: '#00871B',      // Verde do Cano
    DANGER_RED: '#E72020',      // Vermelho do Casco (Destaque/Hover)
    BLACK_OUTLINE: '#000000',   // Borda de Pixel Art
    WHITE_TEXT: '#f8f9fa',
    DARK_BLUE: '#2142C1',       // Sombra de Texto
};

const primaryColor = MARIO_COLORS.COIN_YELLOW;
const secondaryColor = MARIO_COLORS.DANGER_RED;
const backgroundColor = MARIO_COLORS.SKY_BLUE;
const cardColor = MARIO_COLORS.BLOCK_BROWN;
const textColor = MARIO_COLORS.WHITE_TEXT;
const inputBackground = '#333549'; // Mantido escuro para contraste

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const slideIn = keyframes`
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
`;

// ----------------------------------------------------
// CONTAINERS E CARD (ESTILO BLOCO)
// ----------------------------------------------------

export const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* Fundo Azul Vibrante do Céu */
    background-color: ${backgroundColor}; 
    padding: 20px;
    animation: ${slideIn} 0.5s ease-out;
`;

export const AuthCard = styled.div`
    /* Cor Marrom de Bloco */
    background-color: ${cardColor};
    padding: 40px;
    border-radius: 4px; /* Mais quadrado */
    /* Borda e Sombra de Bloco 3D */
    border: 4px solid ${MARIO_COLORS.BLACK_OUTLINE}; 
    box-shadow: 8px 8px 0px ${MARIO_COLORS.BLACK_OUTLINE}; 
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

export const Title = styled.h1`
    color: ${primaryColor};
    font-size: 2.2rem;
    margin-bottom: 5px;
    font-weight: 700;
    /* Fonte Pixelada */
    font-family: 'Press Start 2P', cursive; 
    /* Sombra Vermelha de Destaque */
    text-shadow: 3px 3px 0px ${MARIO_COLORS.DANGER_RED}; 
`;

export const SubTitle = styled.p`
    color: ${textColor};
    font-size: 1rem;
    margin-bottom: 30px;
    font-weight: bold;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

// ----------------------------------------------------
// INPUTS (ESTILO CANO/BLOCO ESCURO)
// ----------------------------------------------------

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color: ${inputBackground};
    border-radius: 4px;
    padding: 10px 15px;
    /* Borda de pixel */
    border: 2px solid ${MARIO_COLORS.BLACK_OUTLINE};
    transition: border-color 0.3s, box-shadow 0.3s;

    &:focus-within {
        /* Borda Amarela ao focar (Moeda) */
        border-color: ${primaryColor}; 
        box-shadow: 0 0 0 2px ${primaryColor};
    }

    svg {
        /* Ícone Amarelo */
        color: ${primaryColor}; 
        margin-right: 10px;
        transition: color 0.3s;
    }

    input {
        flex-grow: 1;
        background: none;
        border: none;
        color: ${textColor};
        padding: 5px 0;
        outline: none;
        /* Fonte Pixelada no Input */
        font-family: 'Press Start 2P', cursive; 
        font-size: 0.8rem;

        &::placeholder {
            color: #777;
        }
    }
`;

// ----------------------------------------------------
// BOTÕES (ESTILO BLOCÃO 3D)
// ----------------------------------------------------

export const PrimaryButton = styled.button`
    background-color: ${primaryColor};
    /* Texto preto no amarelo para contraste */
    color: ${MARIO_COLORS.BLACK_OUTLINE}; 
    padding: 12px;
    /* Borda e Sombra de Bloco 3D */
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 4px; 
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.1s; 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    &:hover:not(:disabled) {
        /* Efeito de pulo do Mario no hover */
        background-color: ${secondaryColor};
        color: ${textColor};
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: translate(0, 0);
        box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }

    &.loading svg {
        animation: ${spin} 1s linear infinite;
    }

    ${props => props.disabled && css`
        opacity: 0.6;
        cursor: not-allowed;
    `}
`;

export const FooterText = styled.p`
    color: ${textColor};
    margin-top: 25px;
    font-size: 0.95rem;
    font-weight: bold;
`;

export const AuthLink = styled(Link)`
    color: ${primaryColor};
    text-decoration: none;
    margin-left: 5px;
    font-weight: 700;
    /* Fonte Pixelada */
    font-family: 'Press Start 2P', cursive; 
    /* Sombra para o link */
    text-shadow: 1px 1px 0px ${MARIO_COLORS.DARK_BLUE};

    &:hover {
        color: ${MARIO_COLORS.DANGER_RED};
        text-decoration: underline;
    }
`;




// import styled, { keyframes, css } from 'styled-components';
// import { Link } from 'react-router-dom';

// const primaryColor = '#8A2BE2'; 
// const secondaryColor = '#4B0082'; 
// const backgroundColor = '#1e1e2e'; 
// const cardColor = '#27293d'; 
// const textColor = '#f8f9fa'; 

// const spin = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// const slideIn = keyframes`
//   from { opacity: 0; transform: translateY(-20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// export const AuthContainer = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     min-height: 100vh;
//     background-color: ${backgroundColor};
//     padding: 20px;
//     animation: ${slideIn} 0.5s ease-out;
// `;

// export const AuthCard = styled.div`
//     background-color: ${cardColor};
//     padding: 40px;
//     border-radius: 12px;
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
//     width: 100%;
//     max-width: 400px;
//     text-align: center;
// `;

// export const Title = styled.h1`
//     color: ${textColor};
//     font-size: 2.2rem;
//     margin-bottom: 5px;
//     font-weight: 700;
// `;

// export const SubTitle = styled.p`
//     color: #bbb;
//     font-size: 1rem;
//     margin-bottom: 30px;
// `;

// export const Form = styled.form`
//     display: flex;
//     flex-direction: column;
//     gap: 20px;
// `;

// export const InputGroup = styled.div`
//     display: flex;
//     align-items: center;
//     background-color: ${backgroundColor};
//     border-radius: 8px;
//     padding: 10px 15px;
//     border: 1px solid transparent;
//     transition: border-color 0.3s;

//     &:focus-within {
//         border-color: ${primaryColor};
//     }

//     svg {
//         color: #aaa;
//         margin-right: 10px;
//         transition: color 0.3s;
//     }

//     input {
//         flex-grow: 1;
//         background: none;
//         border: none;
//         color: ${textColor};
//         padding: 5px 0;
//         font-size: 1rem;
//         outline: none;

//         &::placeholder {
//             color: #777;
//         }
//     }
// `;

// export const PrimaryButton = styled.button`
//     background-color: ${primaryColor};
//     color: ${textColor};
//     padding: 12px;
//     border: none;
//     border-radius: 8px;
//     font-size: 1.1rem;
//     font-weight: 600;
//     cursor: pointer;
//     transition: background-color 0.3s, opacity 0.3s;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;

//     &:hover:not(:disabled) {
//         background-color: ${secondaryColor};
//     }

//     &:disabled {
//         opacity: 0.6;
//         cursor: not-allowed;
//     }

//     &.loading svg {
//         animation: ${spin} 1s linear infinite;
//     }

//     ${props => props.disabled && css`
//         opacity: 0.6;
//         cursor: not-allowed;
//     `}
// `;

// export const FooterText = styled.p`
//     color: #ccc;
//     margin-top: 25px;
//     font-size: 0.95rem;
// `;

// export const AuthLink = styled(Link)`
//     color: ${primaryColor};
//     text-decoration: none;
//     margin-left: 5px;
//     font-weight: 600;

//     &:hover {
//         text-decoration: underline;
//     }
// `;