import styled, { keyframes } from 'styled-components';

// 🎨 PALETA DE CORES TEMA MARIO BROS
const COLORS = {
  SKY_BLUE: '#6C83FF',
  BLOCK_BROWN: '#955816',
  COIN_YELLOW: '#FFCC00',
  PIPE_GREEN: '#00871B',
  DANGER_RED: '#E72020',
  BLACK_OUTLINE: '#000000',
  WHITE_TEXT: '#FFFFFF',
  DARK_BLUE: '#2142C1',
};

// ----------------------------------------------------
// ANIMAÇÕES
// ----------------------------------------------------
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ----------------------------------------------------
// CONTAINERS
// ----------------------------------------------------
export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${COLORS.SKY_BLUE};
  color: ${COLORS.WHITE_TEXT};
`;

export const QuestionCard = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 40px;
  background-color: ${COLORS.BLOCK_BROWN};
  margin: 40px auto;
  max-width: 800px;
  width: 100%;
  border: 4px solid ${COLORS.BLACK_OUTLINE};
  border-radius: 10px;
  box-shadow: 8px 8px 0px ${COLORS.BLACK_OUTLINE};
  animation: ${slideIn} 0.5s ease-out;
`;

export const QuestionTitle = styled.h3`
  font-size: 1.5rem;
  color: ${COLORS.WHITE_TEXT};
  text-align: center;
  margin-bottom: 40px;
  font-family: sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px 0px ${COLORS.BLACK_OUTLINE};
`;

export const OptionButton = styled.button`
  background-color: #7A4211;
  color: ${COLORS.WHITE_TEXT};
  border: 3px solid ${COLORS.BLACK_OUTLINE};
  border-radius: 6px;
  padding: 12px 20px;
  margin: 8px 0;
  width: 100%;
  max-width: 500px;
  text-align: center;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.1s;
  font-family: sans-serif;
  font-weight: bold;
  box-shadow: 4px 4px 0px ${COLORS.BLACK_OUTLINE};

  ${props => props.$isCorrect && `
    background-color: ${COLORS.PIPE_GREEN};
    color: ${COLORS.BLACK_OUTLINE};
    border-color: ${COLORS.BLACK_OUTLINE};
  `}

  ${props => props.$isWrong && `
    background-color: ${COLORS.DANGER_RED};
    color: ${COLORS.WHITE_TEXT};
    border-color: ${COLORS.BLACK_OUTLINE};
  `}

  &:hover:not(:disabled) {
    background-color: ${COLORS.PIPE_GREEN};
    transform: translate(-3px, -3px);
    box-shadow: 7px 7px 0px ${COLORS.BLACK_OUTLINE};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
    transform: none;
    box-shadow: 4px 4px 0px ${COLORS.BLACK_OUTLINE};
  }
`;

export const Feedback = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px 30px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: sans-serif;
  background-color: ${props => props.type === 'correct' ? COLORS.COIN_YELLOW : COLORS.DANGER_RED};
  color: ${props => props.type === 'correct' ? COLORS.BLACK_OUTLINE : COLORS.WHITE_TEXT};
  box-shadow: 0 0 15px ${props => props.type === 'correct' ? COLORS.COIN_YELLOW : COLORS.DANGER_RED}, 
              3px 3px 0px ${COLORS.BLACK_OUTLINE};
  z-index: 10;
  opacity: 0.95;
`;

export const LoadingContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${COLORS.COIN_YELLOW};
  font-family: sans-serif;
  font-weight: bold;

  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid ${COLORS.COIN_YELLOW};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 1s linear infinite;
    margin-bottom: 15px;
  }
`;

export const BackButton = styled.button`
  background-color: ${COLORS.DANGER_RED};
  color: ${COLORS.WHITE_TEXT};
  border: 3px solid ${COLORS.BLACK_OUTLINE};
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 0.85rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  font-family: sans-serif;
  text-decoration: none;
  display: inline-block;
  box-shadow: 4px 4px 0px ${COLORS.BLACK_OUTLINE};

  &:hover {
    background-color: ${COLORS.PIPE_GREEN};
    transform: translate(-3px, -3px);
    box-shadow: 7px 7px 0px ${COLORS.BLACK_OUTLINE};
  }
`;

export const ResultCard = styled(QuestionCard)`
  h2 {
    font-family: sans-serif;
    font-weight: bold;
    color: ${COLORS.COIN_YELLOW};
    font-size: 2rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 0px ${COLORS.DARK_BLUE};
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    font-family: sans-serif;
    color: ${COLORS.WHITE_TEXT};
    margin-bottom: 30px;
  }
`;
