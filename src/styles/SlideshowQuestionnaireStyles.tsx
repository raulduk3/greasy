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
    height: 100%;
`;

export const FormContainer = styled.div`
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 25vh;
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