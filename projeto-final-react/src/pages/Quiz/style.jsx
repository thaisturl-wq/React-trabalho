import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f7f8fc;
  height: 100vh;
`;

export const QuestionCard = styled.div`
  margin: 50px auto;
  padding: 30px;
  background: #fff;
  border-radius: 20px;
  width: 60%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const QuestionTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
`;

export const OptionButton = styled.button`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #0056b3;
  }
`;
