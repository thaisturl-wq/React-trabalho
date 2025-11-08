// style.jsx
import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f0f2f8;
  height: 100vh;
`;

export const QuestionCard = styled.div`
  margin: 50px auto;
  padding: 35px;
  background: linear-gradient(145deg, #fff, #e6e9f0);
  border-radius: 25px;
  width: 60%;
  max-width: 800px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.25);
  }
`;

export const QuestionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 25px;
  color: #111;
  font-weight: 600;
`;

export const OptionButton = styled.button`
  display: block;
  width: 100%;
  margin: 12px 0;
  padding: 16px;
  border: none;
  border-radius: 15px;
  background: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;

  &:hover,
  &:focus {
    background: #0056b3;
    transform: scale(1.05);
    outline: none;
  }
`;

export const Feedback = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 12px 0;
  border-radius: 12px;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  background-color: ${({ type }) => (type === 'correct' ? '#d4edda' : '#f8d7da')};
  color: ${({ type }) => (type === 'correct' ? '#155724' : '#721c24')};
  border: 1px solid ${({ type }) => (type === 'correct' ? '#c3e6cb' : '#f5c6cb')};
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 18px;
  gap: 20px;

  .spinner {
    width: 60px;
    height: 60px;
    border: 8px solid #e0e0e0;
    border-top: 8px solid #007bff;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }
`;

export const BackButton = styled.button`
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  border: none;
  padding: 14px 25px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.3s, transform 0.2s;

  &:hover,
  &:focus {
    background-color: #218838;
    transform: scale(1.05);
    outline: none;
  }
`;
