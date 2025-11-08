
import { IoPerson } from "react-icons/io5";
import fotoDefault from "../../assets/images.png";
import { SideBarComponent } from "../../components/Sidebar";
import { Container, AreaPerfil, CardPerfil, PerfilCabecalho, PerfilFoto, PerfilInformacoes, PerfilEmail, PerfilPontuacao, BotaoSair, BotaoEditar, TituloPerfil } from "./style";
import { useAuth } from "../../hooks/useAuth"
import { InputFoto } from "../../components/InputdeFoto/index"

export const Perfil = () => {
  const { usuario, setUsuario, logout, editar } = useAuth();

  // Função para atualizar a foto
  const FotoNova = (evento) => {
    const file = evento.target.files[0];
    if (!file) return;

    const lerFoto = new FileReader(); //padrao do java, não podem ser renomeados
    lerFoto.onloadend = () => {
      const atualizarUsuario = { ...usuario, fotoPerfil: lerFoto.result };
      setUsuario(atualizarUsuario);
      localStorage.setItem("usuario", JSON.stringify(atualizarUsuario));
    };
    lerFoto.readAsDataURL(file); // readAsDataURL tb padrao
  };

  const EditarNome = () => {
    const novoNome = prompt("Digite seu novo nome:", usuario.name || "");
    if (novoNome && novoNome !== usuario.name) {
      editar({ name: novoNome });
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
              src={usuario?.fotoPerfil || fotoDefault}
              alt="Foto de perfil"
            />
            <PerfilInformacoes>
              <h2>{usuario?.name || "Nome teste"}</h2>
              <PerfilEmail tabIndex={0}>
                {usuario?.email || "email@teste.com"}
              </PerfilEmail>
              <InputFoto onChange={FotoNova} />
            </PerfilInformacoes>
          </PerfilCabecalho>

          <PerfilPontuacao>
            <p>
              <strong>Pontuação:</strong> {/*implementar função pra calcular*/}
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