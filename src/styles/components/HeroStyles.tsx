'use client';

import { mediaQueries } from '@/styles/mediaQueries';
import styled from 'styled-components';

const HeroContainer = styled.div`
    overflow: hidden;
    position: relative;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    align-self: center;

    align-self: start;

    img {
        position: absolute;
        z-index: -1;
        object-fit: cover;
    }

    @meda ${mediaQueries.large} {
        min-height: 60vh;
    }
`;

const HeroDiv = styled.div`
    color: ${props => props.theme.background};
    background-color: rgba(255, 255, 255, 0.9);
    margin: 5vmin;
    padding: 4vh 4vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%; 
    // Styles for large screens
    @media ${mediaQueries.large} {
        // font-size: 2rem;
        padding: 3rem;
        width: 50%;    
    }
`;

const HeroHeader = styled.h1`  
    text-align: left;
    margin: 0;
`;

const HeroP = styled.p`
    width: 100%;
    font-size: 1rem;
    margin: 15px;
    text-align: left;
`;

export { HeroContainer, HeroDiv, HeroHeader, HeroP };