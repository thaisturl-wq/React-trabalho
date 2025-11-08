import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #0f172a;
  color: #f8fafc;
  height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #38bdf8, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  background-color: #1e293b;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #94a3b8;
  }
`;

export const Card = styled.div`
  background-color: #334155;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #f1f5f9;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #475569;
    transform: scale(1.02);
  }
`;
