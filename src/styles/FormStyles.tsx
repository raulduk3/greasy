import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin: 0;
    }

    button {
        border: 1px solid ${props => props.theme.colors.primary};
        padding: 5px 10px;
        width: 63.4922px;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.background};
        border: 1px solid ${props => props.theme.background};
    }
        
    button[type="submit"] {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.colors.primary};
        align-self: end;
    }

    form {
        display: flex;
        font-size: 1em;
        flex-direction: column;
        align-items: start;
        padding: 10px 20px;
        margin: 15px 0;
        border: 1px solid ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.background};
        
        div:last-child {
            margin:  0.5vmin 0 0 0;  
        }

        div:first-child {
            margin: 0.5vmin 0 1vmin 0;
        }

        div {
            display: flex;
            flex-direction: column;
            margin:  0 0 1vmin 0;
            width: 100%;

            label {
                font-size: 1em;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            input {
                border: none;
                color: ${props => props.theme.background};
                border-bottom: 1px solid ${props => props.theme.background};
                background-color: ${props => props.theme.colors.primary};
                outline: none;
                padding: 5px 0;   
                flex-grow: 1;
            }
        }
    }
`;
export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.5vmin;
    align-items: start;
`;
