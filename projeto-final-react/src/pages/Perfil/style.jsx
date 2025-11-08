
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  background-color:#1a1a2e;;
  min-height: 100vh;
`;

export const AreaPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TituloPerfil = styled.h1`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
`;

export const CardPerfil = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  width: 450px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const PerfilCabecalho = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PerfilFoto = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PerfilInformacoes = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PerfilEmail = styled.p`
  color: #777;
  font-size: 0.9rem;
`;

export const PerfilPontuacao = styled.div`
  margin-top: 15px;

  p {
    font-size: 1rem;
    color: #333;
  }
`;

export const BotaoEditar = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
