import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  height: 100vh;
  background-color: #0f172a;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 10px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1e293b;
    transform: translateX(4px);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

