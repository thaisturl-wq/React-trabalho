import React, { use, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SideBarComponent } from '../../components/Sidebar';
import { Container, Content, Header, SearchBar, CategoryGrid, CategoryCard, DifficultyButtons, DifficultyButton, StartButton} from './style.jsx';

export function Categoria() {
    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState({});

    const categorias = [
        { nome: "Conhecimento Geral", id: 9 },
        { nome: "Português", id: 27 }, // Literatura (não tem Português exato)
        { nome: "Matemática", id: 19 },
        { nome: "Ciências", id: 17 },
        { nome: "História", id: 23 },
        { nome: "Filmes", id: 11 },
        { nome: "Música", id: 12 },
        { nome: "Tecnologia", id: 18 },
        { nome: "Livros", id: 10 }
  ];

    const filteredCategorias = categorias.filter(categoria =>
        categoria.nome.toLowerCase().includes(search.toLowerCase())
    );

    const handleStartQuiz = (categoria) => {
        const difficulty = selectedDifficulty[categoria.nome];
        if (!difficulty) {
            alert("Selecione uma dificuldade antes de inicar o quiz!");
            return;
        }
        navigate(`/quiz?category=${categoria.id}&difficulty=${difficulty}`);
    };

    return (
        <Container>
            <SideBarComponent/>
            <Content>
                <Header>
                    <h1>Categorias de Quiz</h1>
                    <p>Escolha um tema e selecione a dificuldade para começar seu quiz!</p>
                    <SearchBar
                        type="text"
                        placeholder="Pesquisar categoria..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Header>

                <CategoryGrid>
                    {filteredCategorias.map((categoria) => (
                        <CategoryCard key={categoria.id}>
                            <h2>{categoria.nome}</h2>
                            <p>Escolha a dificuldade:</p>

                            <DifficultyButtons>
                                {[
                                    {key: "easy", label: "Fácil"},
                                    {key: "medium", label: "Médio"},
                                    {key: "hard", label: "Difícil"}
                                ].map((level) => (
                                    <DifficultyButton
                                        key={level.key}
                                        selected={selectedDifficulty[categoria.nome] === level.key}
                                        level={level.key}
                                        onClick={() =>
                                            setSelectedDifficulty({...selectedDifficulty, [categoria.nome]: level.key })
                                        }
                                    >
                                        {level.label}                                    
                                    </DifficultyButton>
                                ))}
                            </DifficultyButtons>
                            
                            <StartButton onClick={() => handleStartQuiz(categoria)}>
                                Inciar Quiz
                            </StartButton>
                        </CategoryCard>
                    ))}
                </CategoryGrid>
            </Content>
        </Container>
    )
}
