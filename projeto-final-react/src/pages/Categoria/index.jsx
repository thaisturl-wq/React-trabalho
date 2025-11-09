import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SideBarComponent } from '../../components/Sidebar';
import { 
  Container, Content, Header, SearchBar, CategoryGrid, CategoryCard, 
  DifficultyButtons, DifficultyButton, StartButton, FavoriteButton 
} from './style.jsx';
import { useFavorites } from '../../hooks/FavoritesContext.jsx'

export function Categoria() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState({});
  //const [favorites, setFavorites] = useState([]);
  const { favorites, toggleFavorite, isQuizFavorite } = useFavorites();

  const categorias = [
    { nome: "Conhecimento Geral", id: 9 },
    { nome: "Português", id: 27 },
    { nome: "Matemática", id: 19 },
    { nome: "Ciências", id: 17 },
    { nome: "História", id: 23 },
    { nome: "Filmes", id: 11 },
    { nome: "Música", id: 12 },
    { nome: "Tecnologia", id: 18 },
    { nome: "Livros", id: 10 }
  ];

  const filteredCategorias = categorias
    .filter(categoria => categoria.nome.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      // const aFav = favorites.includes(a.id);
      // const bFav = favorites.includes(b.id);
      const aFav = isQuizFavorite(a.id); 
      const bFav = isQuizFavorite(b.id);
      return bFav - aFav;
    });

  const handleStartQuiz = (categoria) => {
    const difficulty = selectedDifficulty[categoria.nome];
    if (!difficulty) {
      alert("Selecione uma dificuldade antes de iniciar o quiz!");
      return;
    }
    navigate(`/quiz?category=${categoria.id}&difficulty=${difficulty}`);
  };

  // const toggleFavorite = (categoria) => {
  //   if (favorites.includes(categoria.id)) {
  //     setFavorites(favorites.filter(id => id !== categoria.id));
  //   } else {
  //     setFavorites([...favorites, categoria.id]);
  //   }
  // };

  return (
    <Container>
      <SideBarComponent />
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>{categoria.nome}</h2>
                {/* ✅ Aqui usamos $favorited para evitar passar prop desconhecida para DOM */}
                {/* <FavoriteButton
                  $favorited={favorites.includes(categoria.id)}
                  onClick={() => toggleFavorite(categoria)}
                >
                  {favorites.includes(categoria.id) ? '★' : '☆'}
                </FavoriteButton> */}
                <FavoriteButton
                // 💡 Usa a função global para definir a cor/estado (Preenchida ou Vazia)
                 $favorited={isQuizFavorite(categoria.id)} 
                    onClick={() => {
                   // 💡 Chama a função global, passando o objeto completo da categoria
                  toggleFavorite(categoria);
                 }}
>
    {isQuizFavorite(categoria.id) ? '★' : '☆'}
                </FavoriteButton>
              </div>

              <p>Escolha a dificuldade:</p>
              <DifficultyButtons>
                {[
                  { key: "easy", label: "Fácil" },
                  { key: "medium", label: "Médio" },
                  { key: "hard", label: "Difícil" }
                ].map((level) => (
                  <DifficultyButton
                    key={level.key} 
                    selected={selectedDifficulty[categoria.nome] === level.key}
                    $level={level.key}  // ✅ Transient prop
                    onClick={() =>
                      setSelectedDifficulty({ ...selectedDifficulty, [categoria.nome]: level.key })
                    }
                  >
                    {level.label}
                  </DifficultyButton>
                ))}
              </DifficultyButtons>

              <StartButton onClick={() => handleStartQuiz(categoria)}>
                Iniciar Quiz
              </StartButton>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </Content>
    </Container>
  );
}
