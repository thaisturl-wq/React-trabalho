import styled, { keyframes } from 'styled-components';

const primaryColor = '#8A2BE2';
const secondaryColor = '#4B0082';
const backgroundColor = '#1e1e2e';
const cardColor = '#27293d';
const textColor = '#f8f9fa';
const correctColor = '#2ECC71';
const wrongColor = '#E74C3C';

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${backgroundColor};
    color: ${textColor};
`;

export const QuestionCard = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: ${cardColor};
    margin: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    max-width: 800px;
    width: 100%;
    margin: 40px auto;
`;

export const ResultCard = styled(QuestionCard)`
    h2 {
        color: ${primaryColor};
        font-size: 2rem;
        margin-bottom: 20px;
    }
    p {
        font-size: 1.2rem;
        margin-bottom: 30px;
    }
`;

export const QuestionTitle = styled.h3`
    font-size: 1.5rem;
    color: ${textColor};
    margin-bottom: 30px;
    text-align: center;
`;

export const OptionButton = styled.button`
    background-color: ${backgroundColor};
    color: ${textColor};
    border: 1px solid ${primaryColor};
    border-radius: 8px;
    padding: 12px 20px;
    margin: 8px 0;
    width: 100%;
    max-width: 500px;
    text-align: center;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.1s;

    &:hover:not(:disabled) {
        background-color: ${secondaryColor};
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
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
    font-size: 1.5rem;
    font-weight: bold;
    color: ${props => props.type === 'correct' ? textColor : textColor};
    background-color: ${props => props.type === 'correct' ? correctColor : wrongColor};
    box-shadow: 0 0 15px ${props => props.type === 'correct' ? correctColor : wrongColor};
    z-index: 10;
    opacity: 0.95;

    /* Estiliza o conteúdo da QuestionCard quando há feedback */
    ${QuestionCard} & {
        
    }
`;

export const LoadingContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${primaryColor};

    .spinner {
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid ${primaryColor};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: ${spin} 1s linear infinite;
        margin-bottom: 15px;
    }
`;

export const BackButton = styled.button`
    background-color: ${primaryColor};
    color: ${textColor};
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;

    &:hover {
        background-color: ${secondaryColor};
    }
`;
