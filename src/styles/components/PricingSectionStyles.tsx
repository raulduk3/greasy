import { mediaQueries } from '@/styles/mediaQueries';

import styled from 'styled-components';

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px;
    

    @media ${mediaQueries.large} {
        flex-direction: row;
        justify-content: center;
        gap: 25px;
    }

    @media ${mediaQueries.medium} {
        flex-direction: row;
        justify-content: center;
        gap: 25px;
    }
`;

export const Card = styled.div`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.background};
    padding: 25px;
    margin: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 15px;


    h1 {
        font-size: 1.5em;
    }

    p {
        font-size: 1.2em;
        margin-bottom: 0.5em;
    }

    ul {
        :before {
            content: "• ";
        }
        
        list-style-type: none;
        text-align: left;

        li {
            margin-bottom: 0.5em;
        }
    }

    a {
        text-decoration: none;
        background-color: ${props => props.theme.colors.tertiary};
        color: ${props => props.theme.background};
        padding: 10px 20px;
        margin: 10px;
        border-radius: 5px;
        font-weight: bold;
        transition: background-color 0.3s ease;
        text-align: center;

        &:hover {
            background-color: ${props => props.theme.colors.secondary};
        }
    }
`;