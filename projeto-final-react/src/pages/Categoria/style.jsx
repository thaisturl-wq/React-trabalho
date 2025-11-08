import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #1a1a2e;
  min-height: 100vh;
  color: #fff;
  font-family: 'Inter', sans-serif;
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
    color: #ff7b00;
    margin-bottom: 8px;
  }

  p {
    color: #c5c6ca;
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const SearchBar = styled.input`
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid #444;
  outline: none;
  font-size: 1rem;
  color: #000;

  &:focus {
    border-color: #818cf8;
    box-shadow: 0 0 6px rgba(129,140,248,0.5);
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
  margin-top: 30px;
`;

export const CategoryCard = styled.div`
  position: relative;
  background-color: #2f3247;
  border-radius: 16px;
  color: #fff;
  padding: 25px 20px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  transition: all 0.3s ease;

  &:hover, &:focus-within {
    transform: translateY(-3px);
    background-color: #35385c;
    outline: none;
  }

  h2 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  p {
    font-size: 0.95rem;
    color: #ccc;
    margin-bottom: 15px;
  }
`;

export const DifficultyButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 18px;
`;

export const DifficultyButton = styled.button`
  padding: 8px 14px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  border: none;
  background-color: ${({ $level }) =>
    $level === "easy" ? "#28a745" : $level === "medium" ? "#ffc107" : "#dc3545"}; // ✅ $level
  opacity: ${({ selected }) => (selected ? 1 : 0.75)};
  transform: ${({ selected }) => (selected ? "scale(1.1)" : "scale(1)")};
  transition: all 0.2s;

  &:hover, &:focus {
    opacity: 1;
    transform: scale(1.1);
    outline: none;
  }
`;

export const StartButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background-color: #007bff;
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover, &:focus {
    background-color: #0056b3;
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
  color: ${({ $favorited }) => ($favorited ? "#ffc107" : "#ccc")}; // ✅ $favorited
  transition: all 0.2s;

  &:hover, &:focus {
    transform: scale(1.25);
    color: #ffb400;
    outline: none;
  }
`;
