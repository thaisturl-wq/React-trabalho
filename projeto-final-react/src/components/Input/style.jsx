import styled from 'styled-components';

// 🚨 PALETA DE CORES TEMA MARIO BROS
const MARIO_COLORS = {
    COIN_YELLOW: '#FFCC00',     // Amarelo da Moeda (Focus)
    PIPE_GREEN: '#00871B',      // Verde do Cano (Contraste)
    BLOCK_BROWN: '#955816',     // Marrom de Bloco
    BLACK_OUTLINE: '#000000',   // Borda de Pixel Art
    WHITE_TEXT: '#f8f9fa',
    INPUT_DARK: '#333549',      // Fundo do Input
};

export const Input = styled.input`
    width: 100%;
    max-width: 350px;
    align-self: center;
    padding: 0.8rem 1rem;
    
    /* Cor de fundo escura para contraste */
    background-color: ${MARIO_COLORS.INPUT_DARK}; 
    color: ${MARIO_COLORS.WHITE_TEXT};
    
    /* Borda de Pixel */
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 4px; /* Mais quadrado */
    
    /* Fonte Pixel Art */
    font-family: 'Press Start 2P', cursive;
    font-size: 0.8rem;
    outline: none;
    transition: all 0.2s ease-in-out;
    box-shadow: 2px 2px 0px ${MARIO_COLORS.BLACK_OUTLINE};

    &::placeholder {
        color: #94a3b8;
        font-weight: normal;
    }

    &:focus {
        /* Foco Amarelo Moeda */
        border-color: ${MARIO_COLORS.COIN_YELLOW};
        background-color: ${MARIO_COLORS.BLOCK_BROWN}; /* Mudar levemente o fundo no foco */
        
        /* Sombra de destaque (como um brilho de moeda) */
        box-shadow: 0 0 0 2px ${MARIO_COLORS.COIN_YELLOW}, 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
        transform: translate(-1px, -1px);
    }
`;


// import styled from 'styled-components';

// export const Input = styled.input`
//   width: 100%;
//   max-width: 350px;
//   align-self: center;
//   padding: 0.8rem 1rem;
//   border: 1px solid #475569;
//   border-radius: 10px;
//   background-color: #1e293b;
//   color: #f1f5f9;
//   font-size: 1rem;
//   outline: none;
//   transition: all 0.2s ease-in-out;
//   box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

//   &::placeholder {
//     color: #94a3b8;
//   }

//   &:focus {
//     border-color: #38bdf8;
//     background-color: #334155;
//     box-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
//   }
// `;
