// Perfil.jsx
import React from "react";
import { IoPerson } from "react-icons/io5";
import fotoDefault from "../../assets/images.png";
import { SideBarComponent } from '../../components/Sidebar'
import { Container, AreaPerfil, CardPerfil, PerfilCabecalho, PerfilFoto, PerfilInformacoes, PerfilEmail, PerfilPontuacao, BotaoEditar, TituloPerfil } from "./style";

export const Perfil = () => {
  return (
    <Container>
      <SideBarComponent/>
      <AreaPerfil>
        <TituloPerfil>
          <IoPerson /> Meu Perfil
        </TituloPerfil>

        <CardPerfil>
          <PerfilCabecalho>
            <PerfilFoto
              src={fotoDefault}
              alt="Foto de perfil"
            />
            <PerfilInformacoes>
              <h2>Nome teste</h2>
              <PerfilEmail tabIndex={0}>puxar email de login</PerfilEmail>
            </PerfilInformacoes>
          </PerfilCabecalho>

          <PerfilPontuacao>
            <p>
              <strong>Pontuação:</strong> implementar função pra calcular
            </p>
          </PerfilPontuacao>

          <BotaoEditar aria-label="Botão para editar perfil">
            Editar Perfil
          </BotaoEditar>
        </CardPerfil>
      </AreaPerfil>
    </Container>
  );
};
