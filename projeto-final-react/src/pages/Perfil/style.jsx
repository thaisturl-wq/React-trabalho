import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #1a1a2e;
  color: #fff;
`;

export const AreaPerfil = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
`;

export const TituloPerfil = styled.h1`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ff7b00;
`;

export const CardPerfil = styled.div`
  background: linear-gradient(145deg, #2a2a40, #1f1f33);
  border-radius: 20px;
  padding: 30px 25px;
  width: 600px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
  margin-top: 25px;
`;

export const PerfilCabecalho = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const PerfilFoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff7b00;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

export const PerfilInformacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  h2 {
    font-size: 1.5rem;
  }
`;

export const PerfilEmail = styled.p`
  color: #ccc;
  font-size: 0.95rem;
`;

export const PerfilPontuacao = styled.div`
  margin-top: 20px;
  p {
    font-size: 1.05rem;
    color: #f1f1f1;
  }
`;

export const BotaoEditar = styled.button`
  padding: 10px 25px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover, &:focus {
    background-color: #0056b3;
    transform: scale(1.05);
    outline: none;
  }
`;

export const BotaoSair = styled(BotaoEditar)`
  background-color: #dc3545;

  &:hover, &:focus {
    background-color: #b02a37;
  }
`;