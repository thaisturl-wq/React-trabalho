import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #1e1e2e, #2f2347);
  font-family: 'Inter', sans-serif;
`;

export const Form = styled.form`
  background-color: #1e293b;
  padding: 3rem 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.4);
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  color: #f8fafc;
  font-weight: 600;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover, &:focus {
    opacity: 0.9;
    transform: scale(1.03);
    outline: none;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: #c5c6ca;
  margin-top: 0.5rem;
  text-align: center;

  span {
    color: #38bdf8;
    font-weight: 600;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: #818cf8;
    }
  }
`;
