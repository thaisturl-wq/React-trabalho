import styled from "styled-components";

// 🚨 PALETA DE CORES TEMA MARIO BROS
const MARIO_COLORS = {
    SKY_BLUE: '#6C83FF',        // Azul do Céu (Fundo do Container)
    BLOCK_BROWN: '#955816',     // Marrom de Bloco
    COIN_YELLOW: '#FFCC00',     // Amarelo da Moeda (Destaque Principal)
    PIPE_GREEN: '#00871B',      // Verde do Cano (Botão Primário/Sucesso)
    DANGER_RED: '#E72020',      // Vermelho do Casco (Botão Sair/Aviso)
    DARK_BLUE: '#2142C1',       // Sombra Azul Escura
    BLACK_OUTLINE: '#000000',   // Borda de Pixel Art
    WHITE_TEXT: '#f8f9fa',
};

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    /* Fundo Azul Vibrante do Céu, ou um contraste escuro para Sidebar */
    background-color: ${MARIO_COLORS.SKY_BLUE};
    color: ${MARIO_COLORS.WHITE_TEXT};
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
    /* Amarelo de Moeda */
    color: ${MARIO_COLORS.COIN_YELLOW};
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;
    /* Sombra de Bloco Vermelho */
    text-shadow: 3px 3px 0px ${MARIO_COLORS.DANGER_RED};
`;

// ----------------------------------------------------
// CARD DE PERFIL (ESTILO BLOCO)
// ----------------------------------------------------

export const CardPerfil = styled.div`
    /* Cor Marrom de Bloco */
    background: ${MARIO_COLORS.BLOCK_BROWN};
    border-radius: 8px; /* Mais quadrado */
    padding: 30px 25px;
    width: 600px;
    /* Borda e Sombra de Bloco 3D */
    border: 4px solid ${MARIO_COLORS.BLACK_OUTLINE}; 
    box-shadow: 8px 8px 0px ${MARIO_COLORS.BLACK_OUTLINE}; 
    margin-top: 25px;
    transition: transform 0.2s;

    &:hover {
        /* Leve efeito de "plataforma" flutuante */
        transform: translateY(-5px);
    }
`;

export const PerfilCabecalho = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    padding-bottom: 20px;
    border-bottom: 2px solid ${MARIO_COLORS.DARK_BLUE}; /* Separador escuro */
    margin-bottom: 20px;
`;

export const PerfilFoto = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    /* Borda Amarela de Moeda */
    border: 5px solid ${MARIO_COLORS.COIN_YELLOW};
    /* Sombra forte */
    box-shadow: 0 0 0 3px ${MARIO_COLORS.BLACK_OUTLINE}, 0 4px 15px rgba(0, 0, 0, 0.5);
`;

export const PerfilInformacoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

    h2 {
        font-size: 1.5rem;
        /* Fonte Pixel Art para o Nome */
        font-family: 'Press Start 2P', cursive;
        color: ${MARIO_COLORS.WHITE_TEXT};
        text-shadow: 1px 1px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

export const PerfilEmail = styled.p`
    color: ${MARIO_COLORS.COIN_YELLOW};
    font-size: 0.95rem;
    font-weight: bold;
`;

export const PerfilPontuacao = styled.div`
    margin-top: 20px;
    padding: 15px;
    /* Fundo ligeiramente diferente para a área de pontuação */
    background-color: #7A4211; 
    border-radius: 4px;
    border: 2px dashed ${MARIO_COLORS.COIN_YELLOW}; /* Linha tracejada de destaque */

    p {
        font-size: 1.05rem;
        color: ${MARIO_COLORS.WHITE_TEXT};
        font-weight: bold;
        /* Fonte Pixel Art */
        font-family: 'Press Start 2P', cursive;
        text-shadow: 1px 1px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

// ----------------------------------------------------
// BOTÕES (ESTILO CANO E CASCO)
// ----------------------------------------------------

// Botão Primário (Editar/Salvar) - Verde Cano
export const BotaoEditar = styled.button`
    padding: 12px 25px;
    background-color: ${MARIO_COLORS.PIPE_GREEN};
    /* Borda e Sombra de Bloco 3D */
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    color: ${MARIO_COLORS.WHITE_TEXT};
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    margin-right: 15px;
    font-family: 'Press Start 2P', cursive;
    font-size: 0.8rem;


    &:hover, &:focus {
        /* Efeito de pulo */
        background-color: ${MARIO_COLORS.DARK_BLUE};
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
        outline: none;
    }
`;

// Botão Secundário (Sair/Cancelar) - Vermelho Casco
export const BotaoSair = styled(BotaoEditar)`
    background-color: ${MARIO_COLORS.DANGER_RED};
    
    &:hover, &:focus {
        /* Mantém o efeito de pulo, mas com a cor Dark Blue no hover para contraste */
        background-color: ${MARIO_COLORS.DARK_BLUE};
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   min-height: 100vh;
//   background-color: #1a1a2e;
//   color: #fff;
// `;

// export const AreaPerfil = styled.main`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 60px 0;
// `;

// export const TituloPerfil = styled.h1`
//   font-size: 2rem;
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   color: #ff7b00;
// `;

// export const CardPerfil = styled.div`
//   background: linear-gradient(145deg, #2a2a40, #1f1f33);
//   border-radius: 20px;
//   padding: 30px 25px;
//   width: 600px;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
//   margin-top: 25px;
// `;

// export const PerfilCabecalho = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 25px;
// `;

// export const PerfilFoto = styled.img`
//   width: 120px;
//   height: 120px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 3px solid #ff7b00;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
// `;

// export const PerfilInformacoes = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;

//   h2 {
//     font-size: 1.5rem;
//   }
// `;

// export const PerfilEmail = styled.p`
//   color: #ccc;
//   font-size: 0.95rem;
// `;

// export const PerfilPontuacao = styled.div`
//   margin-top: 20px;
//   p {
//     font-size: 1.05rem;
//     color: #f1f1f1;
//   }
// `;

// export const BotaoEditar = styled.button`
//   padding: 10px 25px;
//   background-color: #007bff;
//   border: none;
//   color: white;
//   border-radius: 10px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;

//   &:hover, &:focus {
//     background-color: #0056b3;
//     transform: scale(1.05);
//     outline: none;
//   }
// `;

// export const BotaoSair = styled(BotaoEditar)`
//   background-color: #dc3545;

//   &:hover, &:focus {
//     background-color: #b02a37;
//   }
// `;