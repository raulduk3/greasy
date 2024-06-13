'use client';

import styled from "styled-components";

const Themer = styled.body`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.colors.secondary};
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;

    display: flex;
    flex-direction: column;
`;

export default Themer;