import { useState, useCallback } from 'react';
import { getChatbotResponse } from '../../services/GeminiApi';
import { Button, Chat, Input, Message, PageContainer, Title } from './style';

export const ChatbotWidget = () => {

    const [messages, setMessages] = useState([
        { text: "Se o seu cérebro está coçando por respostas, eu sou a solução! Quais categorias te intrigam? Ou, quer saber o segredo do Quiz? É só perguntar!", sender: 'gemini', isNew: false }
    ]);

    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSendMessage = useCallback(async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage = input.trim();

   
        setMessages(prev => [
            ...prev.map(m => ({ ...m, isNew: false })),  
        ]);

        setInput('');
        setIsLoading(true);

        try {
            const geminiResponse = await getChatbotResponse(userMessage);

            setMessages(prev => [
                ...prev.map(m => ({ ...m, isNew: false })),
                { text: geminiResponse, sender: 'gemini', isNew: true }
            ]);

        } catch (error) {
            setMessages(prev => [
                ...prev.map(m => ({ ...m, isNew: false })),
                { text: "Ocorreu um erro ao buscar a resposta.", sender: 'gemini', isNew: true }
            ]);
        } finally {
            setIsLoading(false);
        }
    }, [input, isLoading]);

    return (
        <PageContainer>
            <Title>Chatbot de Apoio ao Quiz</Title>

            <Chat>
                {messages.map((msg, index) => (
                    <Message
                        key={index}
                        className={`message ${msg.sender}`}
                        isNew={msg.isNew} 
                    >
                        {msg.text}
                    </Message>
                ))}
            </Chat>

            <Input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={isLoading ? "Aguarde..." : "Digite sua pergunta..."}
                disabled={isLoading}
            />

            <Button onClick={handleSendMessage} disabled={isLoading}>
                {isLoading ? 'Enviando...' : 'Enviar'}
            </Button>
        </PageContainer>
    );
};
