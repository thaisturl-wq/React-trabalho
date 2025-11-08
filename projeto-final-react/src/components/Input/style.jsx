import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1rem;
  border: 2px solid #334155;
  border-radius: 12px;
  background-color: #0f172a;
  color: #f8fafc;
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #64748b;
  }

  &:focus {
    border-color: #38bdf8;
    background-color: #1e293b;
    box-shadow: 0 0 8px rgba(56, 189, 248, 0.4);
  }
`;
