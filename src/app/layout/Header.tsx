'use client';

import styled from "styled-components";

const Header = styled.section`
    text-align: left;
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: end;
    gap: 0.2vmin;
    padding: 2vmin;

    a {
        display: inline-block;
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
        h1 { 
            margin: 0;
        }   
    }

    h4 {
        display: inline;
        color: ${props => props.theme.colors.secondary};
        margin: 0;  
    }

    span {
        color: ${props => props.theme.colors.tertiary};
    }
`;

export default Header;