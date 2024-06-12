'use client';

import styled from "styled-components";

const Header = styled.section`
    text-align: left;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: end;
    gap: 0.6vmin;
    padding: 2vh 4vw;
    flex: 0 1 auto;
    margin: 0;
    max-height: 14vh;
    text-align: center;

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
        font-size: .89em;
        margin: 0;
    }

    span {
        color: ${props => props.theme.colors.tertiary};
    }
`;

export default Header;