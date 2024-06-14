'use client';

import styled from 'styled-components';

const HeroContainer = styled.div`
    overflow: hidden;
    position: relative;
    min-height: 42vh;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    align-self: center;

    img {
        filter: grayscale(80%);
        position: absolute;
        z-index: -1;
        object-fit: cover;
    }
`;

const HeroDiv = styled.div`
    color: ${props => props.theme.background};
    background-color: rgba(255, 255, 255, 0.9);
    margin: 5vmin;
    padding: 2vh 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%; 
    box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
`;

const HeroHeader = styled.h1`  
    text-align: left;
    margin: 0;
`;

const HeroP = styled.p`
    width: 80%;
    font-size: 1rem;
    margin: 15px;
`;

export { HeroContainer, HeroDiv, HeroHeader, HeroP };