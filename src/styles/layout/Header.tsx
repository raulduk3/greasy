'use client';

import styled from "styled-components";

const Header = styled.section`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vmin;
    flex: 0 1 auto;
    margin: 0;
    text-align: center;
    height: 20vh;

    a {
        display: inline-block;
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        h1 { 
            margin: 0;
            font-size: 3.5em;
        }   
    }

    h4 {
        color: ${props => props.theme.colors.primary};
        font-size: 1.2em;
        margin: 0;
        font-weight: normal;
    }

    span {
        color: ${props => props.theme.colors.tertiary};
    }
`;

export default Header;