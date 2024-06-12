import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 8vw;

    h2 {
        margin: 0;
        font-size: 1.4em;
    }
    
    p {
        margin: 1vmin 0 0 0;
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
        align-items: center;
        justify-content: end;
        padding: 25px 20px 15px 20px;
        margin: 15px 0;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.background};

        filter: drop-shadow(0px 0px 2px black);
        
        div:last-child {
            margin:  2.5vmin 0 0 0;  
            align-self: end;
        }

        div:first-child {
            display: flex-item;
            margin: 0vmin 0 2.5vmin 0;
            align-self: start;
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
                font-size: 1em;
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
    font-size: 1em;
    align-items: start;
`;
