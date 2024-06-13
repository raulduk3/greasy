'use client';

import styled from "styled-components";

const Themer = styled.body`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.colors.secondary};
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
`;

export default Themer;