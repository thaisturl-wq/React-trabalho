import styled from "styled-components";

// 🎨 PALETA DE CORES - TEMA MARIO BROS
const MARIO_COLORS = {
  SKY_BLUE: "#6C83FF",        // Céu
  BLOCK_BROWN: "#955816",     // Tijolos
  COIN_YELLOW: "#FFCC00",     // Moeda
  PIPE_GREEN: "#00871B",      // Cano (fácil)
  DANGER_RED: "#E72020",      // Casco vermelho (difícil)
  DARK_BLUE: "#2142C1",       // Azul escuro
  WHITE_TEXT: "#f8f9fa",      // Texto branco
  BLACK_OUTLINE: "#000000",   // Contorno
  INPUT_DARK: "#333549",      // Input escuro
};

// ----------------------------------------------------
// CONTAINERS E LAYOUT
// ----------------------------------------------------

export const Container = styled.div`
  display: flex;
  background-color: ${MARIO_COLORS.SKY_BLUE};
  min-height: 100vh;
  color: ${MARIO_COLORS.WHITE_TEXT};
  font-family: "Press Start 2P", cursive;
  position: relative;
  overflow-x: hidden;
`;

export const Content = styled.main`
  flex: 1;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 260px; /* espaço da sidebar */
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
  }
`;

// ----------------------------------------------------
// CABEÇALHO
// ----------------------------------------------------

export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2rem;
    color: ${MARIO_COLORS.DANGER_RED};
    text-shadow: 3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    margin-bottom: 10px;
  }

  p {
    font-size: 0.8rem;
    color: ${MARIO_COLORS.WHITE_TEXT};
    margin-bottom: 20px;
    font-family: sans-serif;
  }
`;

// ----------------------------------------------------
// BARRA DE PESQUISA
// ----------------------------------------------------

export const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
  background-color: ${MARIO_COLORS.INPUT_DARK};
  color: ${MARIO_COLORS.WHITE_TEXT};
  font-family: "Press Start 2P", cursive;
  font-size: 0.8rem;
  box-shadow: 3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};
  margin-top: 10px;

  &::placeholder {
    color: #94a3b8;
    font-family: sans-serif;
  }

  &:focus {
    border-color: ${MARIO_COLORS.COIN_YELLOW};
    box-shadow: 0 0 6px ${MARIO_COLORS.COIN_YELLOW},
      4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    transform: translate(-1px, -1px);
    outline: none;
  }
`;

// ----------------------------------------------------
// GRID DE CATEGORIAS (3x3 + RESPONSIVO)
// ----------------------------------------------------

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas fixas em telas grandes */
  gap: 30px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 colunas médias */
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 coluna no celular */
    gap: 20px;
  }
`;

// ----------------------------------------------------
// CARD DE CATEGORIA
// ----------------------------------------------------

export const CategoryCard = styled.div`
  position: relative;
  background-color: ${MARIO_COLORS.BLOCK_BROWN};
  border-radius: 8px;
  color: ${MARIO_COLORS.WHITE_TEXT};
  padding: 25px 20px;
  text-align: center;
  border: 4px solid ${MARIO_COLORS.BLACK_OUTLINE};
  box-shadow: 8px 8px 0px ${MARIO_COLORS.BLACK_OUTLINE};
  transition: all 0.2s ease;

  &:hover,
  &:focus-within {
    transform: translate(-5px, -5px);
    box-shadow: 12px 12px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    outline: none;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 10px;
    text-shadow: 1px 1px 0px ${MARIO_COLORS.DARK_BLUE};
  }

  p {
    font-size: 0.8rem;
    color: ${MARIO_COLORS.COIN_YELLOW};
    margin-bottom: 15px;
    font-weight: bold;
  }
`;

// ----------------------------------------------------
// BOTÕES DE DIFICULDADE
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
  cursor: pointer;
  font-family: "Press Start 2P", cursive;
  font-size: 0.6rem;
  border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
  box-shadow: 3px 3px 0px ${MARIO_COLORS.BLACK_OUTLINE};
  transition: all 0.2s;
  font-weight: 600;

  background-color: ${({ $level }) =>
    $level === "easy"
      ? MARIO_COLORS.PIPE_GREEN
      : $level === "medium"
      ? MARIO_COLORS.COIN_YELLOW
      : MARIO_COLORS.DANGER_RED};

  color: ${({ $level }) =>
    $level === "medium" ? MARIO_COLORS.BLACK_OUTLINE : MARIO_COLORS.WHITE_TEXT};

  opacity: ${({ selected }) => (selected ? 1 : 0.85)};
  transform: ${({ selected }) => (selected ? "scale(1.1)" : "scale(1)")};

  &:hover,
  &:focus {
    transform: scale(1.15);
    box-shadow: 5px 5px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    outline: none;
  }
`;

// ----------------------------------------------------
// BOTÃO DE INICIAR
// ----------------------------------------------------

export const StartButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: ${MARIO_COLORS.PIPE_GREEN};
  color: ${MARIO_COLORS.WHITE_TEXT};
  font-weight: 600;
  border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
  font-family: "Press Start 2P", cursive;

  &:hover,
  &:focus {
    background-color: ${MARIO_COLORS.DARK_BLUE};
    transform: translate(-3px, -3px);
    box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    outline: none;
  }
`;

// ----------------------------------------------------
// BOTÃO DE FAVORITO (ESTRELA)
// ----------------------------------------------------

export const FavoriteButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  color: ${({ $favorited }) =>
    $favorited ? MARIO_COLORS.COIN_YELLOW : "#ccc"};
  transition: all 0.2s;
  text-shadow: 1px 1px 0px ${MARIO_COLORS.BLACK_OUTLINE};

  &:hover,
  &:focus {
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

