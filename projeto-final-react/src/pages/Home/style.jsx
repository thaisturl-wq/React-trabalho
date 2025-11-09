import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Mantido para uso potencial

// 🚨 PALETA DE CORES TEMA MARIO BROS
const MARIO_COLORS = {
    SKY_BLUE: '#6C83FF',        // Azul do Céu (Fundo)
    BLOCK_BROWN: '#955816',     // Marrom de Bloco (Card Principal)
    COIN_YELLOW: '#FFCC00',     // Amarelo da Moeda (Destaque Principal / Médio)
    PIPE_GREEN: '#00871B',      // Verde do Cano (Fácil / Correto)
    DANGER_RED: '#E72020',      // Vermelho do Casco (Difícil / Errado)
    BLACK_OUTLINE: '#000000',   // Borda de Pixel Art
    WHITE_TEXT: '#f8f9fa',
    DARK_BLUE: '#2142C1',       // Sombra Azul Escura
    INPUT_DARK: '#333549',      // Fundo do Input
};

const primaryColor = MARIO_COLORS.COIN_YELLOW;
const secondaryColor = MARIO_COLORS.PIPE_GREEN;
const backgroundColor = MARIO_COLORS.SKY_BLUE;
const cardColor = MARIO_COLORS.BLOCK_BROWN;
const textColor = MARIO_COLORS.WHITE_TEXT;
const inputBackground = MARIO_COLORS.INPUT_DARK;
const easyColor = MARIO_COLORS.PIPE_GREEN;
const mediumColor = MARIO_COLORS.COIN_YELLOW;
const hardColor = MARIO_COLORS.DANGER_RED;

// ----------------------------------------------------
// CONTAINERS E LAYOUT
// ----------------------------------------------------

export const PageContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${MARIO_COLORS.SKY_BLUE};
    color: ${MARIO_COLORS.WHITE_TEXT};
    font-family: 'Press Start 2P', cursive;
    
    /* Afasta o conteúdo da sidebar fixa no desktop (260px) */
    @media (min-width: 769px) {
        padding-left: 260px; 
    }
    
    @media (max-width: 768px) {
        /* Remove o padding fixo no mobile */
        padding-left: 0; 
    }
`;

export const Content = styled.div`
    flex-grow: 1;
    padding: 30px;
    
    @media (max-width: 768px) {
        /* Garante que o conteúdo comece abaixo do ToggleButton fixo no mobile */
        padding-top: 60px; 
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end; /* Alinhado à base */
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 3px dashed ${MARIO_COLORS.DARK_BLUE};
    
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${MARIO_COLORS.DANGER_RED};
    margin: 0;
    text-shadow: 3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    line-height: 1.1;
    
    @media (max-width: 600px) {
        font-size: 1.5rem;
        margin-bottom: 5px;
    }
`;

export const SubTitle = styled.p`
    font-size: 0.8rem;
    color: ${textColor};
    margin-top: 5px;
    font-family: sans-serif;
    
    @media (max-width: 600px) {
        margin-bottom: 15px;
    }
`;

// ----------------------------------------------------
// BOTÃO CRIAR QUIZ (ESTILO CANO/3D)
// ----------------------------------------------------

export const CreateQuizButton = styled.button`
    background-color: ${secondaryColor}; /* Verde Cano */
    color: ${textColor};
    font-family: 'Press Start 2P', cursive;
    font-size: 0.8rem;
    font-weight: 600;
    
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    &:hover {
        /* Efeito de pulo/hover */
        background-color: ${MARIO_COLORS.DARK_BLUE};
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

// ----------------------------------------------------
// BARRA DE PESQUISA
// ----------------------------------------------------

export const SearchBar = styled.div`
    background-color: ${inputBackground};
    border-radius: 8px;
    padding: 10px 15px;
    margin-bottom: 40px;
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    
    input {
        width: 100%;
        background: none;
        border: none;
        color: ${textColor};
        font-family: 'Press Start 2P', cursive;
        font-size: 0.8rem;
        outline: none;
        padding: 5px 0;

        &::placeholder {
            color: #999;
            font-family: sans-serif;
            font-size: 1rem;
        }
    }
`;

export const MainSection = styled.section`
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
    
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 1.2rem;
    color: ${primaryColor};
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    text-shadow: 2px 2px 0px ${MARIO_COLORS.DARK_BLUE};
`;

export const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`;

// ----------------------------------------------------
// CARD DE CATEGORIA E RANKING (BLOCO DE TIJOLO)
// ----------------------------------------------------

export const CategoryCard = styled.div`
    background-color: ${cardColor};
    border-radius: 12px;
    padding: 20px;
    
    /* Estilo Bloco 3D */
    border: 4px solid ${MARIO_COLORS.BLACK_OUTLINE};
    box-shadow: 8px 8px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.2s, box-shadow 0.2s;
    
    &:hover {
        transform: translate(-3px, -3px);
        box-shadow: 10px 10px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

export const CardHeader = styled.div`
    color: ${primaryColor};
    margin-bottom: 15px;
    
    svg {
        width: 28px;
        height: 28px;
        filter: drop-shadow(1px 1px 0px ${MARIO_COLORS.BLACK_OUTLINE});
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.1rem;
    margin-bottom: 5px;
    font-family: 'Press Start 2P', cursive;
    text-shadow: 1px 1px 0px ${MARIO_COLORS.DARK_BLUE};
`;

export const CardSubText = styled.p`
    font-size: 0.8rem;
    color: #ccc;
    margin-bottom: 15px;
    font-family: sans-serif;
`;

// ----------------------------------------------------
// BOTÕES DE DIFICULDADE (EASY/MEDIUM/HARD)
// ----------------------------------------------------

export const DifficultyButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const DifficultyButton = styled.button`
    flex: 1;
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 6px;
    padding: 8px 5px;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.6rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: 2px 2px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    
    /* Lógica de Cores Mario */
    background-color: ${props => 
        props.color === 'green' ? easyColor : 
        props.color === 'yellow' ? mediumColor : 
        props.color === 'red' ? hardColor : 
        primaryColor
    };
    color: ${props => props.color === 'yellow' ? MARIO_COLORS.BLACK_OUTLINE : textColor};

    &:hover {
        opacity: 1;
        transform: translateY(-1px);
        box-shadow: 3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

export const RankingBox = styled.aside`
    background-color: ${cardColor};
    border-radius: 12px;
    padding: 20px;
    
    /* Estilo Bloco 3D */
    border: 4px solid ${MARIO_COLORS.BLACK_OUTLINE};
    box-shadow: 8px 8px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    
    width: 300px;
    min-height: 200px;
    
    h2 {
        font-size: 1.2rem;
        color: ${primaryColor};
        margin-bottom: 15px;
        text-shadow: 1px 1px 0px ${MARIO_COLORS.DARK_BLUE};
    }

    @media (max-width: 1200px) {
        width: 100%;
        max-width: none;
    }
`;

export const RankingItem = styled.div`
    background-color: ${inputBackground};
    padding: 10px 15px;
    margin-bottom: 8px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: ${textColor};
    font-family: 'Press Start 2P', cursive;

    span {
        font-weight: bold;
        color: ${primaryColor};
        margin-right: 10px;
        text-shadow: 1px 1px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

export const QuestionsSection = styled.section`
    margin-top: 40px;
`;

export const EmptyState = styled.div`
    background-color: ${inputBackground};
    /* Borda tracejada (como uma área de mapa não visitada) */
    border: 3px dashed ${MARIO_COLORS.DANGER_RED};
    border-radius: 12px;
    padding: 40px;
    text-align: center;
    color: ${MARIO_COLORS.COIN_YELLOW};
    font-style: italic;
    font-

// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const primaryColor = '#8A2BE2';
// const secondaryColor = '#4B0082';
// const backgroundColor = '#1e1e2e';
// const cardColor = '#27293d';
// const textColor = '#f8f9fa';
// const inputBackground = '#333549';
// const easyColor = '#2ECC71';
// const mediumColor = '#FFC720';
// const hardColor = '#E74C3C';

// export const PageContainer = styled.div`
//     display: flex;
//     min-height: 100vh;
//     background-color: ${backgroundColor};
//     color: ${textColor};


//     @media (max-width: 992px) {
//         padding-left: 0;
//     }
// `;

// export const Content = styled.div`
//     flex-grow: 1;
//     padding: 30px;
    
//     @media (max-width: 992px) {
//         margin-left: 0;
//     }
// `;

// export const Header = styled.header`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 30px;
// `;

// export const Title = styled.h1`
//     font-size: 2rem;
//     color: ${primaryColor};
//     margin: 0;
// `;

// export const SubTitle = styled.p`
//     font-size: 1rem;
//     color: #ccc;
//     margin-top: 5px;
// `;

// export const CreateQuizButton = styled.button`
//     background-color: ${secondaryColor};
//     color: ${textColor};
//     border: none;
//     border-radius: 8px;
//     padding: 10px 20px;
//     font-size: 1rem;
//     font-weight: 600;
//     cursor: pointer;
//     transition: background-color 0.3s;
//     display: flex;
//     align-items: center;
//     gap: 8px;

//     &:hover {
//         background-color: ${primaryColor};
//     }
// `;

// export const SearchBar = styled.div`
//     background-color: ${inputBackground};
//     border-radius: 8px;
//     padding: 10px 15px;
//     margin-bottom: 40px;

//     input {
//         width: 100%;
//         background: none;
//         border: none;
//         color: ${textColor};
//         font-size: 1rem;
//         outline: none;
//         padding: 5px 0;

//         &::placeholder {
//             color: #999;
//         }
//     }
// `;

// export const MainSection = styled.section`
//     display: flex;
//     gap: 30px;
//     margin-bottom: 40px;
    
//     @media (max-width: 1200px) {
//         flex-direction: column;
//     }
// `;

// export const SectionTitle = styled.h2`
//     font-size: 1.5rem;
//     color: ${textColor};
//     margin-bottom: 20px;
//     display: flex;
//     align-items: center;
//     gap: 10px;
// `;

// export const CategoryGrid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//     gap: 20px;
// `;

// export const CategoryCard = styled.div`
//     background-color: ${cardColor};
//     border-radius: 12px;
//     padding: 20px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `;

// export const CardHeader = styled.div`
//     color: ${primaryColor};
//     margin-bottom: 15px;
//     svg {
//         width: 28px;
//         height: 28px;
//     }
// `;

// export const CardTitle = styled.h3`
//     font-size: 1.3rem;
//     margin-bottom: 5px;
// `;

// export const CardSubText = styled.p`
//     font-size: 0.9rem;
//     color: #aaa;
//     margin-bottom: 15px;
// `;

// export const DifficultyButtons = styled.div`
//     display: flex;
//     gap: 10px;
//     margin-top: 10px;
// `;

// export const DifficultyButton = styled.button`
//     flex: 1;
//     border: none;
//     border-radius: 6px;
//     padding: 8px 5px;
//     font-size: 0.9rem;
//     font-weight: 600;
//     cursor: pointer;
//     transition: opacity 0.2s, transform 0.1s;
    
//     background-color: ${props => 
//         props.color === 'green' ? easyColor : 
//         props.color === 'yellow' ? mediumColor : 
//         props.color === 'red' ? hardColor : 
//         primaryColor
//     };
//     color: ${props => props.color === 'yellow' ? '#1e1e2e' : textColor};

//     &:hover {
//         opacity: 0.9;
//         transform: translateY(-1px);
//     }
// `;

// export const RankingBox = styled.aside`
//     background-color: ${cardColor};
//     border-radius: 12px;
//     padding: 20px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     width: 300px;
//     min-height: 200px;
    
//     h2 {
//         font-size: 1.2rem;
//         color: ${primaryColor};
//         margin-bottom: 15px;
//     }

//     @media (max-width: 1200px) {
//         width: 100%;
//         max-width: none;
//     }
// `;

// export const RankingItem = styled.div`
//     background-color: ${inputBackground};
//     padding: 10px 15px;
//     margin-bottom: 8px;
//     border-radius: 6px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     font-size: 1rem;
//     color: ${textColor};

//     span {
//         font-weight: bold;
//         color: ${primaryColor};
//         margin-right: 10px;
//     }
// `;

// export const QuestionsSection = styled.section`
//     margin-top: 40px;
// `;

// export const EmptyState = styled.div`
//     background-color: ${cardColor};
//     border: 1px dashed #444;
//     border-radius: 12px;
//     padding: 40px;
//     text-align: center;
//     color: #999;
//     font-style: italic;
// `;


