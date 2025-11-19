import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  o.
    console.error("ERRO: VITE_GEMINI_API_KEY não está definida no .env");
}

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

/**
 * @param {string} userMessage 
 * @returns {Promise<string>} 
 */
export async function getChatbotResponse(userMessage) {
  
    const systemInstruction = `
        Você é um assistente de chatbot amigável e informativo, integrado a um projeto de Quiz que utiliza a API Open Trivia Database (https://opentdb.com/api.php).
        Seu objetivo principal é responder perguntas gerais e fornecer informações sobre a API de Quiz, como:
        - As categorias disponíveis (ex: 'Sports', 'Science', 'History', 'Geography', 'Art').
        - Como as perguntas são formatadas (múltipla escolha ou verdadeiro/falso).
        - Sugestões de como jogar ou buscar categorias.
        
        Sua resposta deve ser concisa, útil e estritamente em Português (Brasil).
        Se o usuário fizer uma pergunta completamente fora do contexto de quiz ou conhecimento geral, gentilmente o redirecione para os tópicos do quiz.
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