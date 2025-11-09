import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom'; // Presumindo que você pode usar Link/BackButton

// 🚨 PALETA DE CORES TEMA MARIO BROS
const MARIO_COLORS = {
    SKY_BLUE: '#6C83FF',        // Azul do Céu (Fundo)
    BLOCK_BROWN: '#955816',     // Marrom de Bloco (Card)
    COIN_YELLOW: '#FFCC00',     // Amarelo da Moeda (Destaque/Feedback Correto)
    PIPE_GREEN: '#00871B',      // Verde do Cano (Cor de Destaque Secundário)
    DANGER_RED: '#E72020',      // Vermelho do Casco (Feedback Errado)
    BLACK_OUTLINE: '#000000',   // Borda de Pixel Art
    WHITE_TEXT: '#f8f9fa',
    DARK_BLUE: '#2142C1',       // Sombra Azul Escura
};

const primaryColor = MARIO_COLORS.COIN_YELLOW;
const secondaryColor = MARIO_COLORS.DANGER_RED;
const backgroundColor = MARIO_COLORS.SKY_BLUE;
const cardColor = MARIO_COLORS.BLOCK_BROWN;
const textColor = MARIO_COLORS.WHITE_TEXT;
const correctColor = MARIO_COLORS.PIPE_GREEN; // Verde Cano para Correto
const wrongColor = MARIO_COLORS.DANGER_RED;  // Vermelho Casco para Errado

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

// ----------------------------------------------------
// CONTAINERS E CARDS (ESTILO BLOCO)
// ----------------------------------------------------

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    /* Fundo Azul Vibrante do Céu */
    background-color: ${backgroundColor};
    color: ${textColor};
`;

export const QuestionCard = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 40px;
    /* Cor Marrom de Bloco */
    background-color: ${cardColor};
    
    margin: 40px auto;
    max-width: 800px;
    width: 100%;
    
    /* Borda e Sombra de Bloco 3D */
    border: 4px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 8px; 
    box-shadow: 10px 10px 0px ${MARIO_COLORS.BLACK_OUTLINE}; 
`;

export const ResultCard = styled(QuestionCard)`
    h2 {
        /* Fonte Pixel Art */
        font-family: 'Press Start 2P', cursive;
        color: ${primaryColor};
        font-size: 2rem;
        margin-bottom: 20px;
        text-shadow: 2px 2px 0px ${MARIO_COLORS.DARK_BLUE};
    }
    p {
        font-size: 1.2rem;
        margin-bottom: 30px;
        font-weight: bold;
    }
`;

export const QuestionTitle = styled.h3`
    font-size: 1.5rem;
    color: ${textColor};
    margin-bottom: 40px;
    text-align: center;
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;
    text-shadow: 1px 1px 0px ${MARIO_COLORS.BLACK_OUTLINE};
`;

// ----------------------------------------------------
// BOTÕES DE OPÇÃO (ESTILO BLOCÃO CLICÁVEL)
// ----------------------------------------------------

export const OptionButton = styled.button`
    /* Cor de fundo do Card para as opções */
    background-color: #7A4211; 
    color: ${textColor};
    /* Borda e Sombra de Bloco 3D */
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 6px; 
    padding: 12px 20px;
    margin: 8px 0;
    width: 100%;
    max-width: 500px;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.1s;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.8rem;
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    
    /* Lógica de cor condicional */
    ${props => props.$isCorrect && `
        background-color: ${correctColor};
        color: ${MARIO_COLORS.BLACK_OUTLINE}; 
        border-color: ${MARIO_COLORS.BLACK_OUTLINE};
    `}
    
    ${props => props.$isWrong && `
        background-color: ${wrongColor};
        color: ${textColor};
        border-color: ${MARIO_COLORS.BLACK_OUTLINE};
    `}
    
    &:hover:not(:disabled) {
        /* Efeito de pulo do Mario no hover */
        background-color: ${MARIO_COLORS.PIPE_GREEN};
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }

    &:disabled {
        opacity: 0.8;
        cursor: not-allowed;
        transform: none;
        box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

// ----------------------------------------------------
// FEEDBACK (MOEDA OU CASCO)
// ----------------------------------------------------

export const Feedback = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 20px 30px;
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;
    
    /* Feedback Correto (Moeda/Verde) */
    background-color: ${props => props.type === 'correct' ? MARIO_COLORS.COIN_YELLOW : wrongColor};
    color: ${props => props.type === 'correct' ? MARIO_COLORS.BLACK_OUTLINE : textColor};
    
    /* Sombra de destaque */
    box-shadow: 0 0 15px ${props => props.type === 'correct' ? MARIO_COLORS.COIN_YELLOW : wrongColor},
                3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    z-index: 10;
    opacity: 0.95;
`;

// ----------------------------------------------------
// LOADING E BOTÃO VOLTAR
// ----------------------------------------------------

export const LoadingContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${primaryColor};
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;

    .spinner {
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid ${primaryColor};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: ${spin} 1s linear infinite;
        margin-bottom: 15px;
    }
`;

export const BackButton = styled.button`
    background-color: ${MARIO_COLORS.DANGER_RED};
    color: ${textColor};
    /* Borda e Sombra de Bloco 3D */
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 6px; 
    padding: 10px 20px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 20px;
    font-family: 'Press Start 2P', cursive;
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};


    &:hover {
        /* Efeito de pulo do Mario */
        background-color: ${MARIO_COLORS.PIPE_GREEN};
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

// import styled, { keyframes } from 'styled-components';

// const primaryColor = '#8A2BE2';
// const secondaryColor = '#4B0082';
// const backgroundColor = '#1e1e2e';
// const cardColor = '#27293d';
// const textColor = '#f8f9fa';
// const correctColor = '#2ECC71';
// const wrongColor = '#E74C3C';

// const spin = keyframes`
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
// `;

// export const Container = styled.div`
//     display: flex;
//     min-height: 100vh;
//     background-color: ${backgroundColor};
//     color: ${textColor};
// `;

// export const QuestionCard = styled.div`
//     flex-grow: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 20px;
//     background-color: ${cardColor};
//     margin: 20px;
//     border-radius: 12px;
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
//     max-width: 800px;
//     width: 100%;
//     margin: 40px auto;
// `;

// export const ResultCard = styled(QuestionCard)`
//     h2 {
//         color: ${primaryColor};
//         font-size: 2rem;
//         margin-bottom: 20px;
//     }
//     p {
//         font-size: 1.2rem;
//         margin-bottom: 30px;
//     }
// `;

// export const QuestionTitle = styled.h3`
//     font-size: 1.5rem;
//     color: ${textColor};
//     margin-bottom: 30px;
//     text-align: center;
// `;

// export const OptionButton = styled.button`
//     background-color: ${backgroundColor};
//     color: ${textColor};
//     border: 1px solid ${primaryColor};
//     border-radius: 8px;
//     padding: 12px 20px;
//     margin: 8px 0;
//     width: 100%;
//     max-width: 500px;
//     text-align: center;
//     font-size: 1rem;
//     cursor: pointer;
//     transition: background-color 0.3s, transform 0.1s;

//     &:hover:not(:disabled) {
//         background-color: ${secondaryColor};
//     }

//     &:disabled {
//         opacity: 0.7;
//         cursor: not-allowed;
//     }
// `;

// export const Feedback = styled.div`
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     display: flex;
//     align-items: center;
//     gap: 15px;
//     padding: 20px 30px;
//     border-radius: 10px;
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: ${props => props.type === 'correct' ? textColor : textColor};
//     background-color: ${props => props.type === 'correct' ? correctColor : wrongColor};
//     box-shadow: 0 0 15px ${props => props.type === 'correct' ? correctColor : wrongColor};
//     z-index: 10;
//     opacity: 0.95;

//     /* Estiliza o conteúdo da QuestionCard quando há feedback */
//     ${QuestionCard} & {
        
//     }
// `;

// export const LoadingContainer = styled.div`
//     flex-grow: 1;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-size: 1.5rem;
//     color: ${primaryColor};

//     .spinner {
//         border: 4px solid rgba(255, 255, 255, 0.3);
//         border-top: 4px solid ${primaryColor};
//         border-radius: 50%;
//         width: 40px;
//         height: 40px;
//         animation: ${spin} 1s linear infinite;
//         margin-bottom: 15px;
//     }
// `;

// export const BackButton = styled.button`
//     background-color: ${primaryColor};
//     color: ${textColor};
//     border: none;
//     border-radius: 8px;
//     padding: 10px 20px;
//     font-size: 1rem;
//     font-weight: 600;
//     cursor: pointer;
//     transition: background-color 0.3s;
//     margin-top: 20px;

//     &:hover {
//         background-color: ${secondaryColor};
//     }
// `;
