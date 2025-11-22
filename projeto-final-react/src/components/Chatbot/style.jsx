import styled  from 'styled-components';

export const PageContainer = styled.div`
padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;

export const Title = styled.h3`
  border-bottom: 2px solid #fff;  
  font-size: 30px;
  margin-top: 30px; 
  font-family: 'Press Start 2P', cursive;
  color: #fff;
  margin-bottom: 20px;            
  padding-bottom: 8px;             



`;


export const Chat = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  color: #fff;
  margin: 20px;
  font-size: 30px;
  
  
 

  @media (max-width: 480px) {
    width: calc(100vw - 24px);
    height: 420px;
  }
`;

export const Message = styled.div`
    margin-bottom: 18px;  
    padding: 10px;
    border-radius: 8px;
    font-family: Arial, sans-serif;

    ${({ $isNew }) =>
        $isNew &&
        `border: 2px solid #4aa3ff;
         animation: pop 0.25s ease-out;
    `}

    @keyframes pop {
        from { transform: scale(0.95); opacity: 0.5; }
        to   { transform: scale(1); opacity: 1; }
    }
`;




export const Input = styled.input`
 width: 800px;
 height: 50px;
 font-size: 20px;
 border-style: solid;
 border-radius: 8px;
 border-width: 2px;
 border-color: #fff;
 padding: 12px;
`;

export const Button = styled.button`
  background: #955816;
  color: #fff;
  padding:  20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px; 
  cursor: pointer;

  &:hover {
    background: #00871B;
    transform: translateY(-1px);
  }

`;


