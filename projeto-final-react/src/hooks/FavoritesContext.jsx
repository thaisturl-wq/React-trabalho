import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

// Função para buscar favoritos do LocalStorage
const getInitialFavorites = () => {
    try {
        const favorites = localStorage.getItem('quizFavorites');
        return favorites ? JSON.parse(favorites) : [];
    } catch (e) {
        console.error("Erro ao carregar favoritos do localStorage:", e);
        return [];
    }
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(getInitialFavorites);

    // Efeito para salvar favoritos no LocalStorage sempre que eles mudarem
    useEffect(() => {
        localStorage.setItem('quizFavorites', JSON.stringify(favorites));
    }, [favorites]);

    // Função que adiciona/remove um quiz (identificado pelo 'id' e 'nome')
    const toggleFavorite = (quizData) => {
        // quizData deve ter { id: 101, nome: "Matemática" }
        setFavorites(prevFavorites => {
            const isFavorite = prevFavorites.some(fav => fav.id === quizData.id);

            if (isFavorite) {
                // Remove dos favoritos
                return prevFavorites.filter(fav => fav.id !== quizData.id);
            } else {
                // Adiciona aos favoritos
                return [...prevFavorites, quizData];
            }
        });
    };

    // Função auxiliar para checar se é favorito
    const isQuizFavorite = (quizId) => {
        return favorites.some(fav => fav.id === quizId);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isQuizFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Hook customizado para fácil uso
export const useFavorites = () => {
    return useContext(FavoritesContext);
};