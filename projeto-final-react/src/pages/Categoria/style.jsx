import styled from "styled-components";

// 🎨 Paleta Mario Bros com contraste acessível
const COLORS = {
  SKY_BLUE: "#6C83FF",
  BLOCK_BROWN: "#955816",
  COIN_YELLOW: "#FFCC00",
  PIPE_GREEN: "#00871B",
  DANGER_RED: "#E72020",
  DARK_BLUE: "#2142C1",
  WHITE_TEXT: "#FFFFFF",
  BLACK_OUTLINE: "#000000",
  INPUT_DARK: "#333549",
};

export const Container = styled.div`
  display: flex;
  background-color: ${COLORS.SKY_BLUE};
  min-height: 100vh;
  color: ${COLORS.WHITE_TEXT};
  font-family: 'Inter', sans-serif;
  position: relative;
  overflow-x: hidden;
`;

export const Content = styled.main`
  flex: 1;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 260px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
  }
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2rem;
    color: ${COLORS.DANGER_RED};
    margin-bottom: 10px;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    color: ${COLORS.WHITE_TEXT};
    margin-bottom: 20px;
    font-family: 'Inter', sans-serif;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 12px 16px;
  border-radius: 6px;
  border: 2px solid ${COLORS.BLACK_OUTLINE};
  background-color: ${COLORS.INPUT_DARK};
  color: ${COLORS.WHITE_TEXT};
  font-size: 0.9rem;
  box-shadow: 3px 3px 0px ${COLORS.BLACK_OUTLINE};
  margin-top: 10px;

  &::placeholder {
    color: #cccccc;
  }

  &:focus {
    border-color: ${COLORS.COIN_YELLOW};
    box-shadow: 0 0 6px ${COLORS.COIN_YELLOW}, 4px 4px 0px ${COLORS.BLACK_OUTLINE};
    transform: translate(-1px, -1px);
    outline: none;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const CategoryCard = styled.div`
  position: relative;
  background-color: ${COLORS.BLOCK_BROWN};
  border-radius: 8px;
  padding: 25px 20px;
  text-align: center;
  border: 4px solid ${COLORS.BLACK_OUTLINE};
  box-shadow: 8px 8px 0px ${COLORS.BLACK_OUTLINE};
  transition: all 0.2s ease;

  &:hover,
  &:focus-within {
    transform: translate(-5px, -5px);
    box-shadow: 12px 12px 0px ${COLORS.BLACK_OUTLINE};
    outline: none;
  }

  h2 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: ${COLORS.WHITE_TEXT};
  }

  p {
    font-size: 0.9rem;
    color: ${COLORS.COIN_YELLOW};
    margin-bottom: 15px;
    font-weight: 600;
  }
`;

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
  font-size: 0.8rem;
  border: 3px solid ${COLORS.BLACK_OUTLINE};
  box-shadow: 3px 3px 0px ${COLORS.BLACK_OUTLINE};
  font-weight: 600;
  transition: all 0.2s;

  background-color: ${({ $level }) =>
    $level === "easy"
      ? COLORS.PIPE_GREEN
      : $level === "medium"
      ? COLORS.COIN_YELLOW
      : COLORS.DANGER_RED};

  color: ${({ $level }) =>
    $level === "medium" ? COLORS.BLACK_OUTLINE : COLORS.WHITE_TEXT};

  opacity: ${({ selected }) => (selected ? 1 : 0.85)};
  transform: ${({ selected }) => (selected ? "scale(1.1)" : "scale(1)")};

  &:hover,
  &:focus {
    transform: scale(1.15);
    box-shadow: 5px 5px 0px ${COLORS.BLACK_OUTLINE};
    outline: none;
  }
`;

export const StartButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: ${COLORS.PIPE_GREEN};
  color: ${COLORS.WHITE_TEXT};
  font-weight: 600;
  border: 3px solid ${COLORS.BLACK_OUTLINE};
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;
  box-shadow: 4px 4px 0px ${COLORS.BLACK_OUTLINE};

  &:hover,
  &:focus {
    background-color: ${COLORS.DARK_BLUE};
    transform: translate(-3px, -3px);
    box-shadow: 7px 7px 0px ${COLORS.BLACK_OUTLINE};
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
  color: ${({ $favorited }) => ($favorited ? COLORS.COIN_YELLOW : "#ccc")};
  transition: all 0.2s;

  &:hover,
  &:focus {
    transform: scale(1.3);
    color: ${COLORS.COIN_YELLOW};
    outline: none;
  }
`;
