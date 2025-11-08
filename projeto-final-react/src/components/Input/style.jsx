import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 350px;
  align-self: center;
  padding: 0.8rem 1rem;
  border: 1px solid #475569;
  border-radius: 10px;
  background-color: #1e293b;
  color: #f1f5f9;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    border-color: #38bdf8;
    background-color: #334155;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.3);
  }
`;
