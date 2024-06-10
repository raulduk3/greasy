'use client';

import styled from "styled-components";

const Footer = styled.section`
    width: 100%;
	height: 100px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    gap: 2vmin;

    div {
        width: 10%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        text-align: center;
        gap: 1vmin;
    }

    a { 
        border: 1px solid ${props => props.theme.colors.primary};
        padding: 10px;
        color: ${props => props.theme.colors.primary};
        font-style: italic;
        text-decoration: none;
        padding: 10px;
        margin: 0;

        width: 50%;
    }
`;

export default Footer;