import { useEffect, useState } from "react";
import {
  Foto,
  Info,
  Nome,
  PageContainer,
  Pontos,
  Posicao,
  RankingContainer,
  Title,
  UserCard,
  UserList,
} from "./style";
import { SideBarComponent } from "../../components/Sidebar/index";
import axios from "axios";

export const Ranking = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get(
          "https://68dda415d7b591b4b78cfdb5.mockapi.io/askme"
        );
        const data = response.data;

        const ordenados = [...data].sort(
          (a, b) => (b.ponto || 0) - (a.ponto || 0)
        );
        setUsuarios(ordenados);
      } catch (error) {
        console.log("Erro ao buscar usuários:", error);
      }
    };

    fetchUsuarios();
  }, []);

  return (
    <PageContainer>
      <SideBarComponent />
      <RankingContainer>
        <Title>Ranking Geral</Title>
        <UserList>
          {usuarios.map((user, index) => (
            <UserCard key={user.id} index={index}>
              <Posicao index={index}>{index + 1}º</Posicao>
              <Foto src={user.fotoPerfil} alt={user.name} />
              <Info>
                <Nome>{user.nome}</Nome>
                <Pontos>{user.ponto} pts</Pontos>
              </Info>
            </UserCard>
          ))}
        </UserList>
      </RankingContainer>
    </PageContainer>
  );
};
