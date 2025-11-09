import styled from 'styled-components';
// 🚨 PALETA DE CORES TEMA MARIO BROS
const MARIO_COLORS = {
    COIN_YELLOW: '#FFCC00',     // Amarelo da Moeda
    PIPE_GREEN: '#00871B',      // Verde do Cano (Hover)
    DANGER_RED: '#E72020',      // Vermelho do Casco (Cor de Fundo do Botão)
    BLACK_OUTLINE: '#000000',   // Borda de Pixel Art
    WHITE_TEXT: '#f8f9fa',
};

// 1. Contêiner para esconder o input nativo e posicionar o label (o botão visível)
export const FileInputContainer = styled.div`
    position: relative;
    display: inline-block;
    margin-top: 15px;

    /* Estilo para o input nativo - CRUCIAL: Esconde o botão feio do navegador */
    input[type="file"] {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
`;

// 2. O Label visível que atuará como o botão Mario
export const FileLabel = styled.label`
    /* Estilo de Botão Bloco 3D */
    background-color: ${MARIO_COLORS.DANGER_RED};
    color: ${MARIO_COLORS.WHITE_TEXT};
    font-family: 'Press Start 2P', cursive;
    font-size: 0.7rem;
    font-weight: 600;
    
    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 4px;
    padding: 10px 15px;
    cursor: pointer;
    transition: all 0.1s;
    box-shadow: 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    &:hover {
        /* Efeito de pulo do Mario no hover */
        background-color: ${MARIO_COLORS.PIPE_GREEN};
        transform: translate(-3px, -3px);
        box-shadow: 7px 7px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
    
    &:active {
        /* Pressiona o botão para baixo */
        transform: translate(0, 0);
        box-shadow: 2px 2px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    }
`;