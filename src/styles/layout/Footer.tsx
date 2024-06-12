'use client';

import styled from "styled-components";

const Footer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.background};
    gap: 0.8vmin;
    padding: 1vmin 0;
    flex: 0 1 100px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 1vmin;
        text-align: center;
        
        span {
            display: inline-block;
            text-align: center;
            width: 1vw;
        }
    }

    a { 
        color: ${props => props.theme.background};
        padding: 0 1vmin;
        font-style: italic;
        text-decoration: underline;
        margin: 0;
        text-align: center;
    }
`;

export default Footer;