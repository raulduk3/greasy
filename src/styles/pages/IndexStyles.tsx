'use client';

import styled from 'styled-components';

const SplashContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0 5vw;
    padding: 5vmin 5vmin;
`;

const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.background};  
    padding: 2vh 4vw;
    width: 50%;

    h2 { 
        margin: 0;
        font-size: 1.5rem;
        color: ${props => props.theme.background}; /* Theme accent color */
    }
`;

const SplashImage = styled.img`
    max-width: 100%;
    height: auto;
    border-radius: 8px; /* Optional: for rounded corners */
`;

const Headline = styled.h1`
    font-size: 1.5rem;
    color: ${props => props.theme.background}; /* Theme accent color */
    text-align: left;
    margin: 2vmin 0 0 0;
`;

const DetailText = styled.p`
    font-size: 1rem;
    text-align: left;
`;

const CTAButton = styled.button`
    padding: 10px 20px;
    font-size: 1rem;
    background-color: ${props => props.theme.colors.primary}; /* Theme accent color */
    border: none; /* Theme accent color */
    font-weight: bold;
    cursor: pointer;
    background-color: #659f54; /* Darker shade for hover effect */
    color: white;
`;

export { SplashContainer, Column, SplashImage, Headline, DetailText, CTAButton };