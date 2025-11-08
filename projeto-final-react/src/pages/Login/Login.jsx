import React, { useState } from 'react';
import { Mail, Lock, LogIn, Loader } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/Api.jsx'; 
import { 
    AuthContainer, AuthCard, Title, SubTitle, Form, InputGroup, 
    PrimaryButton, FooterText, AuthLink 
} from './AuthStyles.jsx'; 

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const user = await loginUser(email, password);
            
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                console.log('Login bem-sucedido');
                // CORREÇÃO: Navega para a rota correta da Home, que agora é /home
                navigate('/home'); 
            } else {
                setError('Email ou senha inválidos.');
            }
        } catch (err) {
            console.error("Erro no login:", err);
            // Melhorando a mensagem de erro para o usuário final
            setError('Falha na comunicação com o servidor. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContainer>
            <AuthCard>
                <Title>Bem-vindo de Volta</Title>
                <SubTitle>Faça login para continuar sua jornada.</SubTitle>

                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Mail size={20} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputGroup>

                    <InputGroup>
                        <Lock size={20} />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </InputGroup>

                    {error && <p style={{ color: '#E74C3C', textAlign: 'center', fontSize: '0.9rem' }}>{error}</p>}

                    <PrimaryButton type="submit" disabled={loading} className={loading ? 'loading' : ''}>
                        {loading ? <Loader size={20} className="animate-spin" /> : <LogIn size={20} />}
                        {loading ? 'Entrando...' : 'Entrar'}
                    </PrimaryButton>
                </Form>

                <FooterText>
                    Não tem uma conta?
                    <AuthLink to="/register">Cadastre-se</AuthLink>
                </FooterText>
            </AuthCard>
        </AuthContainer>
    );
}
