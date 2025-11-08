import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { api } from '../../services/Api.jsx';
import { SideBarComponent } from '../../components/Sidebar';
import { Container, QuestionCard, OptionButton, QuestionTitle } from './style.jsx';

export function Quiz() {
    const [questions, setQuestion ] = useState([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const difficulty = queryParams.get('difficulty');

    useEffect(() => {
        async function loadQuestions() {
            try {
                const response = await api.get(`?amount=10&difficulty=${difficulty}&type=multiple`);
                setQuestions(response.data.results);
            } catch (error) {
                console.error("Erro ao carregar quiz:", error);
            }
        }
        loadQuestions();
    }, [category, difficulty]);

    const handleAnswer = (option) => {
        const currentQuestion = question[current];
        if (option === currentQuestion.correct_answer) { 
            setScore(score + 1);
        }

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
        } else {
            setFinished(true);
        }
    };

    return (
        <Container>
            <SideBarComponent />
            {!finished ? (
                questions.length > 0 ? (
                    <QuestionCard>
                        <QuestionTitle>
                            {current + 1}. {questions[current].question}
                        </QuestionTitle>
                        {[
                            ...questions[current].incorrect_answer,
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