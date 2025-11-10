import styled from 'styled-components';

// 🎨 PALETA DE CORES MARIO BROS
const MARIO_COLORS = {
    COIN_YELLOW: '#FFCC00',    
    PIPE_GREEN: '#00871B',     
    BLOCK_BROWN: '#955816',    
    BLACK_OUTLINE: '#000000',  
    WHITE_TEXT: '#f8f9fa',     
    INPUT_DARK: '#333549',     
};

export const Input = styled.input`
    width: 100%;
    max-width: 350px;
    padding: 0.8rem 1rem;

    background-color: ${MARIO_COLORS.INPUT_DARK};
    color: ${MARIO_COLORS.WHITE_TEXT};

    border: 3px solid ${MARIO_COLORS.BLACK_OUTLINE};
    border-radius: 6px;
    box-shadow: 2px 2px 0px ${MARIO_COLORS.BLACK_OUTLINE};
    outline: none;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    transition: all 0.2s ease-in-out;

    &::placeholder {
        color: #94a3b8;
        font-weight: normal;
    }

    &:focus {
        border-color: ${MARIO_COLORS.COIN_YELLOW};
        background-color: ${MARIO_COLORS.BLOCK_BROWN};
        box-shadow: 0 0 0 2px ${MARIO_COLORS.COIN_YELLOW}, 4px 4px 0px ${MARIO_COLORS.BLACK_OUTLINE};
        transform: translate(-1px, -1px);
    }
`;
