'use client';

import styled from 'styled-components';

const SplashContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 35vh; 
    gap: 20px;
    margin: 0 5vw;
    padding: 1vmin 5vmin;
`;

const Column = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.background};  
    padding: 20px;

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
    text-align: center;
    margin-top: 20px;
`;

const DetailText = styled.p`
    font-size: 1rem;
    text-align: left;
`;

const CTAButton = styled.button`
    padding: 10px 20px;
    font-size: 1.2rem;
    background-color: #7DDF64; /* Theme accent color */
    border: none;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 20px;

    &:hover {
        background-color: #659f54; /* Darker shade for hover effect */
    }
`;

export { SplashContainer, Column, SplashImage, Headline, DetailText, CTAButton };