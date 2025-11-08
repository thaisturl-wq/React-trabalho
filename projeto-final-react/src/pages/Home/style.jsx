import styled from 'styled-components';
import { Link } from 'react-router-dom';

const primaryColor = '#8A2BE2';
const secondaryColor = '#4B0082';
const backgroundColor = '#1e1e2e';
const cardColor = '#27293d';
const textColor = '#f8f9fa';
const inputBackground = '#333549';
const easyColor = '#2ECC71';
const mediumColor = '#FFC720';
const hardColor = '#E74C3C';

export const PageContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${backgroundColor};
    color: ${textColor};


    @media (max-width: 992px) {
        padding-left: 0;
    }
`;

export const Content = styled.div`
    flex-grow: 1;
    padding: 30px;
    
    @media (max-width: 992px) {
        margin-left: 0;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${primaryColor};
    margin: 0;
`;

export const SubTitle = styled.p`
    font-size: 1rem;
    color: #ccc;
    margin-top: 5px;
`;

export const CreateQuizButton = styled.button`
    background-color: ${secondaryColor};
    color: ${textColor};
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
        background-color: ${primaryColor};
    }
`;

export const SearchBar = styled.div`
    background-color: ${inputBackground};
    border-radius: 8px;
    padding: 10px 15px;
    margin-bottom: 40px;

    input {
        width: 100%;
        background: none;
        border: none;
        color: ${textColor};
        font-size: 1rem;
        outline: none;
        padding: 5px 0;

        &::placeholder {
            color: #999;
        }
    }
`;

export const MainSection = styled.section`
    display: flex;
    gap: 30px;
    margin-bottom: 40px;
    
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    color: ${textColor};
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
`;

export const CategoryCard = styled.div`
    background-color: ${cardColor};
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardHeader = styled.div`
    color: ${primaryColor};
    margin-bottom: 15px;
    svg {
        width: 28px;
        height: 28px;
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.3rem;
    margin-bottom: 5px;
`;

export const CardSubText = styled.p`
    font-size: 0.9rem;
    color: #aaa;
    margin-bottom: 15px;
`;

export const DifficultyButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const DifficultyButton = styled.button`
    flex: 1;
    border: none;
    border-radius: 6px;
    padding: 8px 5px;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.1s;
    
    background-color: ${props => 
        props.color === 'green' ? easyColor : 
        props.color === 'yellow' ? mediumColor : 
        props.color === 'red' ? hardColor : 
        primaryColor
    };
    color: ${props => props.color === 'yellow' ? '#1e1e2e' : textColor};

    &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }
`;

export const RankingBox = styled.aside`
    background-color: ${cardColor};
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 300px;
    min-height: 200px;
    
    h2 {
        font-size: 1.2rem;
        color: ${primaryColor};
        margin-bottom: 15px;
    }

    @media (max-width: 1200px) {
        width: 100%;
        max-width: none;
    }
`;

export const RankingItem = styled.div`
    background-color: ${inputBackground};
    padding: 10px 15px;
    margin-bottom: 8px;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    color: ${textColor};

    span {
        font-weight: bold;
        color: ${primaryColor};
        margin-right: 10px;
    }
`;

export const QuestionsSection = styled.section`
    margin-top: 40px;
`;

export const EmptyState = styled.div`
    background-color: ${cardColor};
    border: 1px dashed #444;
    border-radius: 12px;
    padding: 40px;
    text-align: center;
    color: #999;
    font-style: italic;
`;
