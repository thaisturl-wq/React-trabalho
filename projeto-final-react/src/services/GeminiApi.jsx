import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
    console.error("ERRO: VITE_GEMINI_API_KEY não está definida no .env");
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

/**
 * @param {string} userMessage 
 * @returns {Promise<string>} 
 */
export async function getChatbotResponse(userMessage) {
  
    const systemInstruction = `
    Você é o QuizBot, um assistente amigável e especialista em conhecimento geral, integrado a um projeto de Quiz que utiliza a API Open Trivia Database (https://opentdb.com/api.php).

    Sua missão é ser o guia perfeito para o jogador. Você deve:
    1.  **Fornecer informações detalhadas** sobre as categorias (como 'Português', 'Ciências, 'História', 'Geografia', 'Arte', 'Filme'), o formato das perguntas (múltipla escolha ou verdadeiro/falso) e os níveis de dificuldade (fácil, médio, difícil.
    2.  **Oferecer sugestões** e "opiniões" de forma divertida e útil, baseadas no que o usuário parece gostar. Por exemplo, se o usuário perguntar qual a categoria 'mais legal', sugira uma (como 'Ciencia & Tecnologia') e explique por que ela é empolgante.
    3.  Sua resposta deve ser sempre **concisa, útil e estritamente em Português (Brasil)**.
    4.  Se a pergunta for **completamente fora do contexto** de quiz, jogos ou conhecimento geral, **gentilmente** e com humor, redirecione o usuário para os tópicos do Quiz, como 'perguntas de trivial' ou 'dicas de categorias'.
`;

    try {
        const response = await ai.models.generateContent({
         
            model: "gemini-2.5-flash", 
            contents: [
                { role: "user", parts: [{ text: userMessage }] }
            ],
            config: {
                systemInstruction: systemInstruction,
            },
        });

        return response.text;
    } catch (error) {
        console.error("Erro ao chamar a API do Gemini:", error);
        return "Desculpe, não consegui me conectar ao serviço de AI. Tente novamente mais tarde.";
    }
}