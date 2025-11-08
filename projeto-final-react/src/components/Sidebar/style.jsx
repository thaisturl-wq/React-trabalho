import styled from 'styled-components';

export const Container = styled.nav`
  width: 240px;
  height: 100vh;
  background-color: #0f172a;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  gap: 16px;
  font-family: 'Inter', sans-serif;
  box-shadow: 2px 0 8px rgba(0,0,0,0.3);
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ff7b00;
  text-align: center;
  margin-bottom: 2rem;
`;

export const MenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  background: none;
  border: none;
  color: inherit;
  text-align: left;
  font-size: 1rem;
  transition: all 0.25s ease-in-out;

  &:hover, &:focus {
    background-color: #1e293b;
    transform: translateX(4px);
    outline: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }

  &:active {
    transform: translateX(2px);
    background-color: #273348;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff7b00;
`;

export const Label = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export const Footer = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProfileButton = styled(MenuItem)`
  background-color: #111827;
  border-radius: 10px;

  &:hover, &:focus {
    background-color: #1f293b;
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  }
`;
