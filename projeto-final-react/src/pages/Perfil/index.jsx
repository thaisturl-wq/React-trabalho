// Perfil.jsx
import React from "react";
import { IoPerson } from "react-icons/io5";
import fotoDefault from "../../assets/images.png";
import { SideBarComponent } from "../../components/Sidebar";
import {Container, AreaPerfil, CardPerfil, PerfilCabecalho, PerfilFoto, PerfilInformacoes, PerfilEmail, PerfilPontuacao, BotaoEditar, TituloPerfil } from "./style";
import { useAuth } from "../../hooks/useAuth"

export const Perfil = () => {
  const { usuario, setUsuario, logout } = useAuth();

  // Função para atualizar a foto
  const FotoNova = (evento) => {
    const file = evento.target.files[0];
    if (!file) return;

    const lerFoto = new FileReader(); //padrao do java, não podem ser renomeados
    reader.onloadend = () => {
      const atualizarUsuario = { ...usuario, fotoPerfil: reader.result };
      setUsuario(atualizarUsuario);
      localStorage.setItem("usuario", JSON.stringify(atualizarUsuario));
    };
    lerFoto.readAsDataURL(file); // readAsDataURL tb padrao
  };

  return (
    <Container>
      <SideBarComponent />
      <AreaPerfil>
        <TituloPerfil>
          <IoPerson /> Meu Perfil
        </TituloPerfil>

        <CardPerfil>
          <PerfilCabecalho>
            <PerfilFoto
              src={usuario?.fotoPerfil || fotoDefault}
              alt="Foto de perfil"
            />
            {/* Input para o usuário enviar foto */}
            <input
              type="file"
              accept="image/*"
              onChange={FotoNova}
              style={{ marginTop: "10px" }}
            />
            <PerfilInformacoes>
              <h2>{usuario?.name || "Nome teste"}</h2>
              <PerfilEmail tabIndex={0}>
                {usuario?.email || "email@teste.com"}
              </PerfilEmail>
            </PerfilInformacoes>
          </PerfilCabecalho>

          <PerfilPontuacao>
            <p>
              <strong>Pontuação:</strong> implementar função pra calcular
            </p>
          </PerfilPontuacao>

          <BotaoEditar onClick={logout} aria-label="Botão para sair">
            Sair
          </BotaoEditar>
        </CardPerfil>
      </AreaPerfil>
    </Container>
  );
};