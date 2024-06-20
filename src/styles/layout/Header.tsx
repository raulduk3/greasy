'use client';

import styled from "styled-components";
import { mediaQueries } from "../mediaQueries";

export const Header = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    flex: 0 1 auto;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.background};

    margin: 0;
    text-align: center;
    padding: 2vh 0 0 0;
    
    a {
        text-decoration: none;
        color: ${props => props.theme.background};
    }
`;


export const Title = styled.h1`
    margin: 0;
    font-size: 3.5em;

    span {
        color: ${props => props.theme.colors.tertiary};
    }

`;

export const Subtitle = styled.h4`
    font-size: 1em;
    margin: 0;
    font-weight: normal;
    width: 90%;
`;

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    text-align: center;
    list-style: none;
    padding: 0;
    margin: 20px;

    li a {
        text-decoration: none;
        color: ${props => props.theme.background};
    }
`;

export default Header;