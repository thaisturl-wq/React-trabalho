import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #0f172a;
  color: #f8fafc;
  font-family: 'Inter', sans-serif;
`;

export const Form = styled.form`
  background-color: #1e293b;
  padding: 3rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  -webkit-text-fill-color: transparent;
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  color: #f8fafc;
  border: none;
  border-radius: 12px;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
    transform: scale(1.03);
  }
`;

export const Footer = styled.p`
  margin-top: 1.2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #94a3b8;

  a {
    color: #38bdf8;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
