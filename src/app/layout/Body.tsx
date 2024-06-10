'use client';

import styled from "styled-components";

const Body = styled.body`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.colors.primary};
    
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
`;

export default Body;