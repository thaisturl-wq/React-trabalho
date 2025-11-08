import { useState } from "react";
import { Container } from "./style";
import { InputComponent } from "../../components/Input";

export function Login() {
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
    console.log("Logging in with: ", email, password);
  };

  return (
    <Container>
      <h1>Tela de login</h1>
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
      <button onClick={handleSubmit}>Entrar</button>
    </Container>
  );
}
