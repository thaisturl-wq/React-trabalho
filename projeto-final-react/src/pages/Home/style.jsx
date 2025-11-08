import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  background-color: #1e1e2e;
  color: #f8f9fa;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #ff7b00;
`;

export const SubTitle = styled.p`
  color: #c5c6ca;
  font-size: 1rem;
`;

export const CreateQuizButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ff7b00;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover, &:focus {
    background-color: #ff9100;
    outline: none;
  }
`;

export const Banner = styled.div`
  background: linear-gradient(90deg, #ff7b00, #ff9100);
  border-radius: 14px;
  padding: 25px;
  margin-bottom: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
`;

export const MainSection = styled.section`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const CategorySection = styled.div`
  flex: 2;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #f1f1f1;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
`;

export const CategoryCard = styled.div`
  background-color: #2f2347;
  padding: 20px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  transition: transform 0.2s, background 0.2s;
  position: relative;

  &:hover, &:focus-within {
    transform: translateY(-3px);
    outline: none;
  }

  p {
    color: #ccc;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

export const FavoriteButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ favorited }) => (favorited ? "#ffc107" : "#ccc")};
  transition: transform 0.2s, color 0.2s;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover, &:focus {
    transform: scale(1.2);
    color: #ffb400;
    outline: none;
  }
`;

export const DifficultyButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const DifficultyButton = styled.button`
  background-color: ${({ color }) =>
    color === "green" ? "#28a745" : color === "yellow" ? "#ffc107" : "#dc3545"};
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s;

  &:hover, &:focus {
    opacity: 0.85;
    outline: none;
  }
`;

export const RankingBox = styled.div`
  flex: 1;
  background-color: #2f3247;
  border-radius: 12px;
  padding: 1rem;
  min-width: 220px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  height: fit-content;
`;

export const RankingItem = styled.div`
  background: #363954;
  padding: 0.6rem 0.8rem;
  border-radius: 8px;
  margin-bottom: 0.6rem;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;

  span {
    font-weight: 700;
    color: #ff7b00;
  }
`;
