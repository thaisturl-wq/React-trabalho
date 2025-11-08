import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  background-color: #1a1a2e;
  color: #fff;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

export const RankingContainer = styled.div`
  flex: 1;
  padding: 50px 40px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #ff7b00;
  text-align: center;
`;

export const UserList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserCard = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(145deg, #2f3247, #35385c);
  padding: 20px 25px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.3);
  gap: 20px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 25px rgba(0,0,0,0.4);
  }
`;

export const Posicao = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  width: 50px;
  text-align: center;
  color: ${({ $index }) => {
    if ($index === 0) return "#FFD700"; // ouro
    if ($index === 1) return "#C0C0C0"; // prata
    if ($index === 2) return "#CD7F32"; // bronze
    return "#fff";
  }};
`;

export const Foto = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff7b00;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nome = styled.span`
  font-weight: 600;
  font-size: 1.2rem;
`;

export const Pontos = styled.span`
  font-size: 1rem;
  color: #c5c6ca;
  margin-top: 4px;
`;
