import { IoPerson } from "react-icons/io5";
import fotoDefault from "../../assets/images.png";
import { SideBarComponent } from "../../components/Sidebar";
import {Container,AreaPerfil,CardPerfil,PerfilCabecalho,PerfilFoto, PerfilInformacoes,PerfilEmail,
PerfilPontuacao,BotaoSair, BotaoEditar,TituloPerfil,} from "./style";
import { useAuth } from "../../hooks/useAuth";
import { InputFoto } from "../../components/InputdeFoto/index";


export const Perfil = () => {
  const { usuario, logout, editar } = useAuth();


  const FotoNova = (evento) => {
    evento.preventDefault();
    const file = evento.target.files[0];
    if (!file) return;

    const lerFoto = new FileReader();
    lerFoto.onloadend = () => {
      editar({ avatar: lerFoto.result });
    };
    lerFoto.readAsDataURL(file);
  };

  const EditarNome = () => {
    const novoNome = prompt("Digite seu novo nome:", usuario.nome || "");
    if (novoNome && novoNome !== usuario.nome) {
      editar({ nome: novoNome });
    }
  };
  

  return (
    <Container>
      <SideBarComponent />
      <AreaPerfil>
        <TituloPerfil>
          <IoPerson size={28} /> Meu Perfil
        </TituloPerfil>

        <CardPerfil>
          <PerfilCabecalho>
            <PerfilFoto
              src={usuario?.avatar || fotoDefault}
              alt="Foto de perfil"
            />
            <PerfilInformacoes>
              <h2>{usuario?.nome || "Nome"}</h2>
              <PerfilEmail tabIndex={0}>
                {usuario?.email || "email@.com"}
              </PerfilEmail>
              <InputFoto onChange={FotoNova} />
            </PerfilInformacoes>
          </PerfilCabecalho>

          <PerfilPontuacao>
            <p>
              <strong>Pontuação:</strong> {usuario?.pontos || 0} Pontos
            </p>
          </PerfilPontuacao>

          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <BotaoEditar onClick={EditarNome} aria-label="Botão para editar">
              Editar Perfil
            </BotaoEditar>

            <BotaoSair onClick={logout} aria-label="Botão para sair">
              Sair
            </BotaoSair>
          </div>
        </CardPerfil>
      </AreaPerfil>
    </Container>
  );
};
