import styled from 'styled-components';

export const Container = styled.div`
  background-color: red;
`;

export const Span = styled.span`
  font-size: 20px;
`;

export const Button = styled.button`
  background-color: ${(props) => props.primary ? 'green' : 'red'};
`;