import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { Container, Button, Form } from "./style";
import { InputComponent } from "../../components/Input";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Fazendo login: ", email, password);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <InputComponent
        type="text"
        value={email}
        placeholder="Digite seu email..."
        onChange={handleEmailChange}
      />

      <InputComponent
        type="password"
        value={password}
        placeholder="Digite sua senha..."
        onChange={handlePasswordChange}
      />
      <Button onClick={handleSubmit}>Entrar</Button>
      </Form>
    </Container>
  );
}
