import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #1a1a2e;
  min-height: 100vh;
  color: #fff;
`;

export const Content = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    color: #ccc;
  }
`;

export const SearchBar = styled.input`
  margin-top: 20px;
  width: 400px;
  padding: 10px 15px;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 1rem;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1000px;
`;

export const CategoryCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 10px;
  color: #333;
  padding: 25px;
  text-align: center;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }

  h2 {
    font-size: 1.3rem;
    color: #111;
    margin-bottom: 10px;
  }

  p {
    color: #555;
    margin-bottom: 10px;
  }
`;

export const DifficultyButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
`;

export const DifficultyButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ level }) =>
    level === "facil" ? "#28a745" : level === "medio" ? "#ffc107" : "#dc3545"};
  opacity: ${({ selected }) => (selected ? 1 : 0.7)};
  transform: ${({ selected }) => (selected ? "scale(1.1)" : "scale(1)")};
  transition: 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

export const StartButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
