import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../services/Api.jsx';
import { SideBarComponent } from '../../components/Sidebar';
import { Container, QuestionCard, OptionButton, QuestionTitle, Feedback, LoadingContainer, BackButton } from './style.jsx';
import { CheckCircle, XCircle } from 'lucide-react';

export function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const difficulty = queryParams.get('difficulty');

    async function traduzirTexto(texto) {
        try {
            const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|pt`);
            const data = await res.json();
            return data.responseData?.translatedText
                ?.replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")
                .replace(/&amp;/g, "&")
                .replace(/&lt;/g, "<")
                .replace(/&gt;/g, ">") || texto;
        } catch (e) {
            return texto;
        }
    }

    async function traduzirPerguntas(perguntas) {
        if (!perguntas) return [];
        return await Promise.all(
            perguntas.map(async (questao) => ({
                ...questao,
                question: await traduzirTexto(questao.question),
                correct_answer: await traduzirTexto(questao.correct_answer),
                incorrect_answers: await Promise.all(questao.incorrect_answers.map(traduzirTexto)),
            }))
        );
    }

    useEffect(() => {
        async function loadQuestions() {
            try {
                setLoading(true);
                setError(null);
                const response = await api.get(`?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
                if (!response.data?.results?.length) {
                    setError("Não foi possível carregar as perguntas. Tente novamente mais tarde.");
                    return;
                }
                const perguntasTraduzidas = await traduzirPerguntas(response.data.results);
                setQuestions(perguntasTraduzidas);
            } catch (err) {
                console.error(err);
                setError("Erro ao carregar quiz. Tente novamente mais tarde.");
            } finally {
                setLoading(false);
            }
        }
        loadQuestions();
    }, [category, difficulty]);

    const handleAnswer = (option) => {
        if (!questions[current]) return;

        const isCorrect = option === questions[current].correct_answer;
        setFeedback({
            type: isCorrect ? 'correct' : 'wrong',
            message: isCorrect ? 'Resposta correta! 🎉' : 'Resposta errada! ❌',
        });

        if (isCorrect) setScore(prev => prev + 1);

        setTimeout(() => {
            setFeedback(null);
            if (current + 1 < questions.length) setCurrent(prev => prev + 1);
            else setFinished(true);
        }, 1200);
    };

    if (loading)
        return (
            <Container>
                <SideBarComponent />
                <LoadingContainer>
                    <div className="spinner"></div>
                    <p>Carregando perguntas...</p>
                </LoadingContainer>
            </Container>
        );

    if (error)
        return (
            <Container>
                <SideBarComponent />
                <QuestionCard>
                    <h2>{error}</h2>
                    <BackButton onClick={() => navigate('/categoria')}>Voltar às Categorias</BackButton>
                </QuestionCard>
            </Container>
        );

    if (!questions.length)
        return (
            <Container>
                <SideBarComponent />
                <QuestionCard>
                    <h2>Nenhuma pergunta disponível.</h2>
                    <BackButton onClick={() => navigate('/categoria')}>Voltar às Categorias</BackButton>
                </QuestionCard>
            </Container>
        );

    return (
        <Container>
            <SideBarComponent />
            {!finished ? (
                <QuestionCard>
                    {feedback && (
                        <Feedback type={feedback.type}>
                            {feedback.type === 'correct' ? <CheckCircle size={32} /> : <XCircle size={32} />}
                            <span>{feedback.message}</span>
                        </Feedback>
                    )}

                    <QuestionTitle>
                        {current + 1}. {questions[current]?.question || "Pergunta indisponível"}
                    </QuestionTitle>

                    {[...(questions[current]?.incorrect_answers || []), questions[current]?.correct_answer]
                        .filter(Boolean)
                        .sort(() => Math.random() - 0.5)
                        .map((option, i) => (
                            <OptionButton key={i} onClick={() => handleAnswer(option)}>
                                {option}
                            </OptionButton>
                        ))}
                </QuestionCard>
            ) : (
                <QuestionCard>
                    <h2>Quiz Finalizado!</h2>
                    <p>
                        Você acertou {score} de {questions.length} perguntas!
                    </p>
                    <BackButton onClick={() => navigate('/categoria')}>
                        Voltar às Categorias
                    </BackButton>
                </QuestionCard>
            )}
        </Container>
    );
}
