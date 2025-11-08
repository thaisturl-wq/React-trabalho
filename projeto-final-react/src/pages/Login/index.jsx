// import { useState } from "react";
// import { useNavigate} from "react-router-dom";
// import { Container, Button, Form } from "./style";
// import { InputComponent } from "../../components/Input";

// export function Login() {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     console.log("Fazendo login: ", email, password);
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//       <h1>Login</h1>
//       <InputComponent
//         type="text"
//         value={email}
//         placeholder="Digite seu email..."
//         onChange={handleEmailChange}
//       />

//       <InputComponent
//         type="password"
//         value={password}
//         placeholder="Digite sua senha..."
//         onChange={handlePasswordChange}
//       />
//       <Button onClick={handleSubmit}>Entrar</Button>
//       </Form>
//     </Container>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Title, Button, InputsContainer, FooterText } from "./style";
import { InputComponent } from "../../components/Input";
import { Mail, Lock } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const enviarDados = async (event) => {
    event.preventDefault();
    try {
      await login(email, senha);//chama a função login jogando email e senha
      navigate("/perfil"); //redireciona para a page de perfil
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Form onSubmit={enviarDados}>
        <Title>Bem-vindo de volta!</Title>

        <InputsContainer>
          {/* <h1>Login</h1> */}
          <InputComponent
            type="text"
            value={email}
            placeholder="Digite seu email..."
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail size={18} />}
          />
          <InputComponent
            type="password"
            value={senha}
            placeholder="Digite sua senha..."
            onChange={(e) => setSenha(e.target.value)}
          />
        </InputsContainer>

        <Button type="submit">Entrar</Button>
        <FooterText>
          Ainda não tem conta? <span onClick={() => navigate("/cadastro")}>Cadastre-se</span>
        </FooterText>
      </Form>
    </Container>
  );
}
