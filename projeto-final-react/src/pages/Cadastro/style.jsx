import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

const primaryColor = '#8A2BE2'; 
const secondaryColor = '#4B0082'; 
const backgroundColor = '#1e1e2e'; 
const cardColor = '#27293d'; 
const textColor = '#f8f9fa'; 

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: ${backgroundColor};
    padding: 20px;
    animation: ${slideIn} 0.5s ease-out;
`;

export const AuthCard = styled.div`
    background-color: ${cardColor};
    padding: 40px;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    width: 100%;
    max-width: 400px;
    text-align: center;
`;

export const Title = styled.h1`
    color: ${textColor};
    font-size: 2.2rem;
    margin-bottom: 5px;
    font-weight: 700;
`;

export const SubTitle = styled.p`
    color: #bbb;
    font-size: 1rem;
    margin-bottom: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InputGroup = styled.div`
    display: flex;
    align-items: center;
    background-color: ${backgroundColor};
    border-radius: 8px;
    padding: 10px 15px;
    border: 1px solid transparent;
    transition: border-color 0.3s;

    &:focus-within {
        border-color: ${primaryColor};
    }

    svg {
        color: #aaa;
        margin-right: 10px;
        transition: color 0.3s;
    }

    input {
        flex-grow: 1;
        background: none;
        border: none;
        color: ${textColor};
        padding: 5px 0;
        font-size: 1rem;
        outline: none;

        &::placeholder {
            color: #777;
        }
    }
`;

export const PrimaryButton = styled.button`
    background-color: ${primaryColor};
    color: ${textColor};
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s, opacity 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &:hover:not(:disabled) {
        background-color: ${secondaryColor};
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &.loading svg {
        animation: ${spin} 1s linear infinite;
    }

    ${props => props.disabled && css`
        opacity: 0.6;
        cursor: not-allowed;
    `}
`;

export const FooterText = styled.p`
    color: #ccc;
    margin-top: 25px;
    font-size: 0.95rem;
`;

export const AuthLink = styled(Link)`
    color: ${primaryColor};
    text-decoration: none;
    margin-left: 5px;
    font-weight: 600;

    &:hover {
        text-decoration: underline;
    }
`;