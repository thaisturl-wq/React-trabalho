import styled from 'styled-components';

// 🎨 Paleta Mario Bros (com contraste alto)
const COLORS = {
    SKY_BLUE: '#6C83FF',        
    BLOCK_BROWN: '#955816',    
    COIN_YELLOW: '#FFCC00',     
    PIPE_GREEN: '#00871B',      
    DANGER_RED: '#E72020',     
    WHITE_TEXT: '#FFFFFF',      
    INPUT_DARK: '#333549',      
    BORDER: '#000000',        
};
 
export const PageContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: ${COLORS.SKY_BLUE};
    color: ${COLORS.WHITE_TEXT};
    font-family: Arial, sans-serif;

    @media (min-width: 769px) {
        padding-left: 260px;
    }
    @media (max-width: 768px) {
        padding-left: 0;
    }
`;

export const Content = styled.div`
    flex-grow: 1;
    padding: 30px;

    @media (max-width: 768px) {
        padding-top: 60px;
        padding-left: 15px;
        padding-right: 15px;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 20px;
    border-bottom: 2px solid ${COLORS.BLOCK_BROWN};

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: ${COLORS.DANGER_RED};
    margin: 0;
    line-height: 1.2;
`;

export const SubTitle = styled.p`
    font-size: 1rem;
    color: ${COLORS.WHITE_TEXT};
    margin-top: 5px;
    line-height: 1.5;
`;
 
export const CreateQuizButton = styled.button`
    background-color: ${COLORS.PIPE_GREEN};
    color: ${COLORS.WHITE_TEXT};
    border: 2px solid ${COLORS.BORDER};
    border-radius: 6px;
    padding: 10px 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: ${COLORS.COIN_YELLOW};
        color: #000;
    }

    &:focus {
        outline: 3px solid ${COLORS.COIN_YELLOW};
        outline-offset: 2px;
    }
`;

export const SearchBar = styled.div`
    background-color: ${COLORS.INPUT_DARK};
    border-radius: 6px;
    padding: 10px 15px;
    margin-bottom: 30px;
    border: 2px solid ${COLORS.BORDER};

    input {
        width: 100%;
        background: none;
        border: none;
        outline: none;
        color: ${COLORS.WHITE_TEXT};
        font-size: 1rem;
        line-height: 1.5;

        &::placeholder {
            color: ${COLORS.COIN_YELLOW};
        }
    }
`;
 
export const MainSection = styled.section`
    display: flex;
    gap: 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
`;

export const SectionTitle = styled.h2`
    font-size: 1.2rem;
    color: ${COLORS.COIN_YELLOW};
    margin-bottom: 15px;
`;

export const CategoryGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
`;
 
export const CategoryCard = styled.div`
    background-color: ${COLORS.BLOCK_BROWN};
    border-radius: 8px;
    padding: 15px;
    border: 2px solid ${COLORS.BORDER};
    transition: transform 0.1s;

    &:hover {
        transform: translateY(-3px);
    }
`;

export const CardHeader = styled.div`
    margin-bottom: 10px;
`;

export const CardTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: 5px;
    color: ${COLORS.WHITE_TEXT};
`;

export const CardSubText = styled.p`
    font-size: 0.85rem;
    color: ${COLORS.COIN_YELLOW};
`;
 
export const DifficultyButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

export const DifficultyButton = styled.button`
    flex: 1;
    border: 2px solid ${COLORS.BORDER};
    border-radius: 5px;
    padding: 8px 0;
    font-weight: bold;
    cursor: pointer;
    background-color: ${props =>
        props.color === 'green' ? COLORS.PIPE_GREEN :
        props.color === 'yellow' ? COLORS.COIN_YELLOW :
        props.color === 'red' ? COLORS.DANGER_RED :
        COLORS.COIN_YELLOW
    };
    color: ${props => props.color === 'yellow' ? '#000' : COLORS.WHITE_TEXT};

    &:focus {
        outline: 3px solid ${COLORS.COIN_YELLOW};
        outline-offset: 2px;
    }

    &:hover {
        opacity: 0.9;
    }
`;
 
export const RankingBox = styled.aside`
    background-color: ${COLORS.BLOCK_BROWN};
    border-radius: 8px;
    padding: 20px;
    border: 2px solid ${COLORS.BORDER};
    width: 300px;
    min-height: 200px;

    @media (max-width: 1200px) {
        width: 100%;
    }
`;

export const RankingItem = styled.div`
    background-color: ${COLORS.INPUT_DARK};
    padding: 8px 12px;
    margin-bottom: 6px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
    color: ${COLORS.WHITE_TEXT};
`;
 
export const QuestionsSection = styled.section`
    margin-top: 30px;
`;

export const EmptyState = styled.div`
    background-color: ${COLORS.INPUT_DARK};
    border: 2px dashed ${COLORS.DANGER_RED};
    border-radius: 8px;
    padding: 30px;
    text-align: center;
    color: ${COLORS.COIN_YELLOW};
    font-style: italic;
`;
