import styled, { css } from 'styled-components';

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

// ----------------------------------------------------
// CONTAINERS E LAYOUT
// ----------------------------------------------------

export const Container = styled.div`
    display: flex;
    /* Fundo Azul Vibrante do Céu */
    background-color: ${MARIO_COLORS.SKY_BLUE};
    min-height: 100vh;
    color: ${MARIO_COLORS.WHITE_TEXT};
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;
`;

export const Content = styled.main`
    flex: 1;
    padding: 40px 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Header = styled.header`
    text-align: center;
    margin-bottom: 40px;

    h1 {
        font-size: 2.2rem;
        color: ${MARIO_COLORS.DANGER_RED};
        margin-bottom: 8px;
        /* Sombra de texto Pixel Art */
        text-shadow: 3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }

    p {
        color: ${MARIO_COLORS.WHITE_TEXT};
        font-size: 0.8rem;
        margin-bottom: 20px;
        font-family: sans-serif; /* Fonte padrão para parágrafos longos */
    }
`;

// ----------------------------------------------------
// BARRA DE PESQUISA (ESTILO PLACA DE INFORMAÇÃO)
// ----------------------------------------------------

export const SearchBar = styled.input`
    margin-top: 10px;
    width: 100%;
    max-width: 400px;
    padding: 12px 16px;
    
    /* Estilo de Bloco */
    border-radius: 6px; 
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    
    /* Fundo escuro de input */
    background-color: ${MARIO_COLORS.INPUT_DARK};
    outline: none;
    
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;
    font-size: 0.8rem;
    color: ${MARIO_COLORS.WHITE_TEXT};
    box-shadow: 3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    &::placeholder {
        color: #94a3b8;
        font-family: sans-serif;
        font-size: 1rem;
    }

    &:focus {
        /* Destaque Amarelo Moeda */
        border-color: ${MARIO_COLORS.COIN_YELLOW};
        box-shadow: 0 0 6px ${MARIO_COLORS.COIN_YELLOW}, 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
        transform: translate(-1px, -1px);
    }
`;

export const CategoryGrid = styled.div`
    display: grid;
    /* Adaptação para telas menores, mantendo 3 colunas padrão se possível */
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    width: 100%;
    margin-top: 30px;
`;

// ----------------------------------------------------
// CARD DE CATEGORIA (ESTILO BLOCO DE TIJOLO)
// ----------------------------------------------------

export const CategoryCard = styled.div`
    position: relative;
    /* Cor Marrom de Bloco */
    background-color: ${MARIO_COLORS.BLOCK_BROWN};
    border-radius: 8px; 
    color: ${MARIO_COLORS.WHITE_TEXT};
    padding: 25px 20px;
    text-align: center;
    transition: all 0.2s ease;
    
    /* Borda e Sombra de Bloco 3D */
    border: 4px solid ${MARIO_COLORS.BLACK_OUTLINE};
    box-shadow: 8px 8px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    &:hover, &:focus-within {
        /* Efeito de pulo / ativação de bloco */
        transform: translate(-5px, -5px);
        box-shadow: 12px 12px 0px ${MARIO_COLORS.BLACK_OUTLINE};
        outline: none;
    }

    h2 {
        font-size: 1.1rem;
        margin-bottom: 10px;
        font-weight: 600;
        /* Fonte Pixel Art */
        font-family: 'Press Start 2P', cursive;
        text-shadow: 1px 1px 0px ${MARIO_COLORS.DARK_BLUE};
    }

    p {
        font-size: 0.9rem;
        color: ${MARIO_COLORS.COIN_YELLOW};
        margin-bottom: 15px;
        font-weight: bold;
    }
`;

// ----------------------------------------------------
// BOTÕES DE DIFICULDADE (VERDE, AMARELO, VERMELHO)
// ----------------------------------------------------

export const DifficultyButtons = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 18px;
`;

export const DifficultyButton = styled.button`
    padding: 8px 10px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    color: ${MARIO_COLORS.WHITE_TEXT};
    
    /* Estilo de Botão Bloco 3D */
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    box-shadow: 3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    font-family: 'Press Start 2P', cursive;
    font-size: 0.6rem;
    
    /* Cores de Nível: Fácil (Cano), Médio (Moeda), Difícil (Casco) */
    background-color: ${({ $level }) =>
        $level === "easy" ? MARIO_COLORS.PIPE_GREEN : $level === "medium" ? MARIO_COLORS.COIN_YELLOW : MARIO_COLORS.DANGER_RED}; 
    
    /* Efeito de seleção (Aumenta) */
    opacity: ${({ $selected }) => ($selected ? 1 : 0.8)};
    transform: ${({ $selected }) => ($selected ? "scale(1.1)" : "scale(1)")};
    
    /* Cor do texto para Amarelo (Médio) */
    color: ${({ $level }) => ($level === "medium" ? MARIO_COLORS.BLACK_OUTLINE : MARIO_COLORS.WHITE_TEXT)};
    
    transition: all 0.2s;

    &:hover, &:focus {
        opacity: 1;
        transform: scale(1.15);
        box-shadow: 5px 5px 0px ${MARIO_COLORS.BLACK_OUTLINE};
        outline: none;
    }
`;

// ----------------------------------------------------
// BOTÕES DE INICIAR E FAVORITO
// ----------------------------------------------------

export const StartButton = styled.button`
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    
    /* Cor Primária: Verde Cano */
    background-color: ${MARIO_COLORS.PIPE_GREEN};
    color: ${MARIO_COLORS.WHITE_TEXT};
    font-weight: 600;
    
    /* Estilo de Botão Bloco 3D */
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s;
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    font-family: 'Press Start 2P', cursive;

    &:hover, &:focus {
        /* Efeito de pulo */
        background-color: ${MARIO_COLORS.DARK_BLUE};
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
        outline: none;
    }
`;

export const FavoriteButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.6rem;
    cursor: pointer;
    
    /* Estrela Amarela (Moeda) ou Cinza */
    color: ${({ $favorited }) => ($favorited ? MARIO_COLORS.COIN_YELLOW : '#ccc')}; 
    transition: all 0.2s;
    line-height: 1; /* Alinhamento da estrela */
    text-shadow: 1px 1px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    &:hover, &:focus {
        transform: scale(1.3);
        color: ${MARIO_COLORS.COIN_YELLOW};
        outline: none;
    }
`;


// export const Container = styled.div`
//   display: flex;
//   background-color: #1a1a2e;
//   min-height: 100vh;
//   color: #fff;
//   font-family: 'Inter', sans-serif;
// `;

// export const Content = styled.main`
//   flex: 1;
//   padding: 40px 60px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const Header = styled.header`
//   text-align: center;
//   margin-bottom: 40px;

//   h1 {
//     font-size: 2.2rem;
//     color: #ff7b00;
//     margin-bottom: 8px;
//   }

//   p {
//     color: #c5c6ca;
//     font-size: 1rem;
//     margin-bottom: 20px;
//   }
// `;

// export const SearchBar = styled.input`
//   margin-top: 10px;
//   width: 100%;
//   max-width: 400px;
//   padding: 12px 16px;
//   border-radius: 10px;
//   border: 2px solid #444;
//   outline: none;
//   font-size: 1rem;
//   color: #000;

//   &:focus {
//     border-color: #818cf8;
//     box-shadow: 0 0 6px rgba(129,140,248,0.5);
//   }
// `;

// export const CategoryGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 30px;
//   width: 100%;
//   margin-top: 30px;
// `;

// export const CategoryCard = styled.div`
//   position: relative;
//   background-color: #2f3247;
//   border-radius: 16px;
//   color: #fff;
//   padding: 25px 20px;
//   text-align: center;
//   box-shadow: 0 6px 20px rgba(0,0,0,0.25);
//   transition: all 0.3s ease;

//   &:hover, &:focus-within {
//     transform: translateY(-3px);
//     background-color: #35385c;
//     outline: none;
//   }

//   h2 {
//     font-size: 1.3rem;
//     margin-bottom: 10px;
//     font-weight: 600;
//   }

//   p {
//     font-size: 0.95rem;
//     color: #ccc;
//     margin-bottom: 15px;
//   }
// `;

// export const DifficultyButtons = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 12px;
//   margin-bottom: 18px;
// `;

// export const DifficultyButton = styled.button`
//   padding: 8px 14px;
//   border-radius: 8px;
//   font-weight: 600;
//   cursor: pointer;
//   color: #fff;
//   border: none;
//   background-color: ${({ $level }) =>
//     $level === "easy" ? "#28a745" : $level === "medium" ? "#ffc107" : "#dc3545"}; // ✅ $level
//   opacity: ${({ selected }) => (selected ? 1 : 0.75)};
//   transform: ${({ selected }) => (selected ? "scale(1.1)" : "scale(1)")};
//   transition: all 0.2s;

//   &:hover, &:focus {
//     opacity: 1;
//     transform: scale(1.1);
//     outline: none;
//   }
// `;

// export const StartButton = styled.button`
//   width: 100%;
//   padding: 12px;
//   border-radius: 10px;
//   background-color: #007bff;
//   color: #fff;
//   font-weight: 600;
//   border: none;
//   cursor: pointer;
//   font-size: 1rem;
//   transition: all 0.2s;

//   &:hover, &:focus {
//     background-color: #0056b3;
//     outline: none;
//   }
// `;

// export const FavoriteButton = styled.button`
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   background: none;
//   border: none;
//   font-size: 1.6rem;
//   cursor: pointer;
//   color: ${({ $favorited }) => ($favorited ? "#ffc107" : "#ccc")}; // ✅ $favorited
//   transition: all 0.2s;

//   &:hover, &:focus {
//     transform: scale(1.25);
//     color: #ffb400;
//     outline: none;
//   }
// `;

// Exemplo: /pages/Home/style.jsx (ou Categoria/style.jsx)

