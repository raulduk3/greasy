'use client';

import styled from "styled-components";

const Themer = styled.body`
    margin: 0;
    padding: 0;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    
    font-family: 'Roboto', sans-serif;

    background-color: ${props => props.theme.background};
    color: ${props => props.theme.colors.secondary};
`;

export default Themer;