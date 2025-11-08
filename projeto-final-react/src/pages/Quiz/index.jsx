import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../services/Api.jsx';
import { SideBarComponent } from '../../components/Sidebar';
import { Container, QuestionCard, OptionButton, QuestionTitle } from './style.jsx';
import { CheckCircle, XCircle } from 'lucide-react';

export function Quiz() {
    const [questions, setQuestions ] = useState([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const difficulty = queryParams.get('difficulty');

    async function traduzirTexto(texto) {
        try {
            const tradutor = await fetch (
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|pt`
            );
            const data = await tradutor.json();
            const traducao = data.responseData.translatedText;
            return traducao
                .replace(/&quot;/g,'"')
                .replace(/&#039;/g,"'")
                .replace(/&amp;/g,"&")
                .replace(/&lt;/g,"<")
                .replace(/&gt;/g,">")
        } catch (error) {
            console.error("Erro ao traduzir:", error);
            return texto;
        }
    }

    async function traduzirPerguntas(perguntas) {
        const traduzidas = await Promise.all(
            perguntas.map(async (questao) => {
                return {
                    ...questao,
                    question: await traduzirTexto(questao.question),
                    correct_answer: await traduzirTexto(questao.correct_answer),
                    incorrect_answers: await Promise.all(questao.incorrect_answers.map(traduzirTexto))
                };
            })
        );
        return traduzidas;
    }

    useEffect(() => {
        async function loadQuestions() {
            try {
                const response = await api.get(`?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
                const perguntasTraduzidas = await traduzirPerguntas(response.data.results);
                setQuestions(perguntasTraduzidas);
            } catch (error) {
                console.error("Erro ao carregar quiz:", error);
            }
        }
        loadQuestions();
    }, [category, difficulty]);

    const handleAnswer = (option) => {
        const currentQuestion = questions[current];
        const isCorrect = option === currentQuestion.correct_answer;

        if (isCorrect) {
            setScore(score + 1);
            setFeedback({ type: 'correct', message: 'Resposta correta!' });
        } else {
            setFeedback({ type: 'wrong', message: 'Resposta errada!' });
        }

        setTimeout(() => {
            setFeedback(null);
            if (current + 1 < questions.length) {
                setCurrent(current + 1);
            } else {
                setFinished(true);
            }
        }, 1000);
    };

    return (
        <Container>
            <SideBarComponent />
            {!finished ? (
                questions.length > 0 ? (
                    <QuestionCard>
                        {feedback && (
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    color: feedback.type === 'correct' ? 'green' : 'red',
                                    fontWeight: 'bold',
                                    marginBottom: '10px',
                                }}
                            >
                                {feedback.type === 'correct' ? (
                                    <CheckCircle size={24} />
                                ) : (
                                    <XCircle size={24} />
                                )}
                                {feedback.message}
                            </div>
                        )}
                        <QuestionTitle>
                            {current + 1}. {questions[current].question}
                        </QuestionTitle>
                        {[
                            ...questions[current].incorrect_answers,
                            questions[current].correct_answer,
                        ]
                            .sort(() => Math.random() - 0.5)
                            .map((option, i) => (
                                <OptionButton key={i} onClick={() => handleAnswer(option)}>
                                    {option}
                                </OptionButton>
                            ))}
                    </QuestionCard>
                ) : (
                    <p>Carregando perguntas...</p>
                )
            ) : (
                <QuestionCard>
                    <h2>Quiz Finalizado!</h2>
                    <p>Você acertou {score} de {questions.length} perguntas!</p>
                </QuestionCard>
            )}
        </Container>
    )
}