import styled from "styled-components";

// 🚨 PALETA DE CORES TEMA MARIO BROS
const MARIO_COLORS = {
    SKY_BLUE: '#6C83FF',        // Azul do Céu (Fundo)
    BLOCK_BROWN: '#955816',     // Marrom de Bloco
    COIN_YELLOW: '#FFCC00',     // Amarelo da Moeda (Destaque Principal)
    PIPE_GREEN: '#00871B',      // Verde do Cano
    DANGER_RED: '#E72020',      // Vermelho do Casco
    BLACK_OUTLINE: '#000000',   // Borda de Pixel Art
    WHITE_TEXT: '#f8f9fa',
    DARK_BLUE: '#2142C1',       // Sombra Azul Escura
};

// Cores de medalha ajustadas para o tema pixelizado
const MEDAL_COLORS = {
    GOLD: MARIO_COLORS.COIN_YELLOW, // Ouro (Moeda)
    SILVER: '#C0C0C0',             // Prata (Original)
    BRONZE: '#CD7F32',             // Bronze (Original)
};

export const PageContainer = styled.div`
    display: flex;
    /* Fundo Azul Vibrante do Céu */
    background-color: ${MARIO_COLORS.SKY_BLUE};
    color: ${MARIO_COLORS.WHITE_TEXT};
    min-height: 100vh;
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;
`;

export const RankingContainer = styled.div`
    flex: 1;
    padding: 50px 40px;
    max-width: 1000px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 30px;
    /* Amarelo de Moeda */
    color: ${MARIO_COLORS.COIN_YELLOW};
    text-align: center;
    /* Sombra de Bloco Vermelho */
    text-shadow: 4px 4px 0px ${MARIO_COLORS.DANGER_RED}; 
`;

export const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

// ----------------------------------------------------
// CARD DE USUÁRIO (BLOCO DE PLACA)
// ----------------------------------------------------

export const UserCard = styled.div`
    display: flex;
    align-items: center;
    /* Cor Marrom de Bloco */
    background: ${MARIO_COLORS.BLOCK_BROWN};
    padding: 20px 25px;
    border-radius: 8px; /* Mais quadrado */
    /* Borda e Sombra de Bloco 3D */
    border: 4px solid ${MARIO_COLORS.BLACK_OUTLINE};
    box-shadow: 6px 6px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    gap: 20px;
    transition: all 0.2s;

    &:hover {
        /* Efeito de pulo do Mario no hover */
        transform: translate(-3px, -3px);
        box-shadow: 9px 9px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;

export const Posicao = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
    width: 50px;
    text-align: center;
    /* Aplica a sombra de texto e a fonte pixel art */
    font-family: 'Press Start 2P', cursive;
    text-shadow: 1px 1px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    color: ${({ $index }) => {
        if ($index === 0) return MEDAL_COLORS.GOLD;
        if ($index === 1) return MEDAL_COLORS.SILVER;
        if ($index === 2) return MEDAL_COLORS.BRONZE;
        return MARIO_COLORS.WHITE_TEXT;
    }};
`;

export const Foto = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    /* Borda Amarela de Moeda */
    border: 3px solid ${MARIO_COLORS.COIN_YELLOW};
    box-shadow: 0 0 0 2px ${MARIO_COLORS.BLACK_OUTLINE};
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Nome = styled.span`
    font-weight: 600;
    font-size: 1.2rem;
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;
    text-shadow: 1px 1px 0px ${MARIO_COLORS.DARK_BLUE};
`;

export const Pontos = styled.span`
    font-size: 1rem;
    color: ${MARIO_COLORS.COIN_YELLOW};
    margin-top: 4px;
    font-weight: bold;
`;


// import styled from "styled-components";

// export const PageContainer = styled.div`
//   display: flex;
//   background-color: #1a1a2e;
//   color: #fff;
//   min-height: 100vh;
//   font-family: 'Inter', sans-serif;
// `;

// export const RankingContainer = styled.div`
//   flex: 1;
//   padding: 50px 40px;
// `;

// export const Title = styled.h1`
//   font-size: 2.5rem;
//   margin-bottom: 30px;
//   color: #ff7b00;
//   text-align: center;
// `;

// export const UserList = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// export const UserCard = styled.div`
//   display: flex;
//   align-items: center;
//   background: linear-gradient(145deg, #2f3247, #35385c);
//   padding: 20px 25px;
//   border-radius: 20px;
//   box-shadow: 0 10px 20px rgba(0,0,0,0.3);
//   gap: 20px;
//   transition: all 0.3s;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 15px 25px rgba(0,0,0,0.4);
//   }
// `;

// export const Posicao = styled.span`
//   font-size: 1.5rem;
//   font-weight: 700;
//   width: 50px;
//   text-align: center;
//   color: ${({ $index }) => {
//     if ($index === 0) return "#FFD700"; // ouro
//     if ($index === 1) return "#C0C0C0"; // prata
//     if ($index === 2) return "#CD7F32"; // bronze
//     return "#fff";
//   }};
// `;

// export const Foto = styled.img`
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   object-fit: cover;
//   border: 3px solid #ff7b00;
// `;

// export const Info = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const Nome = styled.span`
//   font-weight: 600;
//   font-size: 1.2rem;
// `;

// export const Pontos = styled.span`
//   font-size: 1rem;
//   color: #c5c6ca;
//   margin-top: 4px;
// `;
