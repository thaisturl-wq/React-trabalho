
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #1a1a2e;
  color: #fff;
`;

export const AreaPerfil = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 60px 0;
`;

export const TituloPerfil = styled.h1`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
`;

export const CardPerfil = styled.div`
  background: #333;
  border-radius: 10px;
  padding: 20px;
  width: 600x;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const PerfilCabecalho = styled.div`
  display: flex;
  align-items: center;
   justify-content: space-between;
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
export const BotaoSair = styled.button`
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


export const InputFoto = styled.input`
  margin-top: 10px;
  cursor: pointer;
  padding: 6px;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
  font-size: 0.9rem;
  border: none;

  &:hover {
    background-color: #555;
  }
`;



