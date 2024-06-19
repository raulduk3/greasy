import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-20px);
    }
`;

interface QuestionContainerProps {
    $fadeOut: boolean;
}

export const QuestionContainer = styled.div<QuestionContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    animation: ${({ $fadeOut }) => ($fadeOut ? fadeOut : fadeIn)} 1.8s ease forwards;
    min-height: 50vh;
    margin: 2vh 0;
    align-self: center;  
`;

export const FormContainer = styled.div`
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const DisplayMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25vw;
    text-align: center;

    a { 
        color: ${props => props.theme.colors.primary};
        text-decoration: underline;
        font-style: none;
        font-weight: normal;
    }
`;

//--------------------------------------------------------------------------------------//
//                                  Flashcards (temp)                                   //
//--------------------------------------------------------------------------------------//
export const FlashcardsContainer = styled.div`
    display: flex;
    margin: 2vh 0;
    flex-direction: column;
    gap: 1rem;

    width: 80vw;
`;

export const FlashcardContainer = styled.div`
    background-color: ${props => props.theme.colors.primary};
    color: black;
    padding: 1rem;
    filter: shadow(0 0 10px rgba(0, 0, 0, 0.5));
`;

export const FlashcardWord = styled.p`
    text-transform: capitalize;
    text-align: center;
    text-style: bold;
    font-weight: bold;
`;
export const FlashcardDefinition = styled.p`
    padding: 0 0 1rem 0;
`;

export const FlashcardSentence = styled.p`

`;

export const FlashcardPartOfSpeech = styled.p`
    padding: 0 0 1rem 0;
`;