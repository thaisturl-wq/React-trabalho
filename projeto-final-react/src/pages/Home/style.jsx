import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  background-color: #1e1e2e;
  color: #f8f9fa;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding: 2rem 3rem;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 60px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #ffffff;
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
  cursor: pointer;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background-color: #ff9100;
  }
`;

export const MainSection = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin: 10px 60px;
  color: #f1f1f1;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 20px 60px;
`;

export const CategoryCard = styled.div`
  background-color: #2f2347;
  padding: 20px;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

export const DifficultyButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const DifficultyButton = styled.button`
  background-color: ${({ color }) =>
    color === "green" ? "#2ECC71" : color === "yellow" ? "#F1C40F" : "#E74C3C"};
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.85;
  }
`;

export const RankingBox = styled.div`
  background-color: #2f3247;
  border-radius: 12px;
  padding: 1rem;
  min-width: 220px;
  height: fit-content;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }
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
  color: #fff;

  span {
    font-weight: 700;
    color: #ff7a00;
  }
`;
