import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 8vw;

    div:last-child {
        align-self: center;
        flex-direction: row;
    }

    form { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
        padding: 25px 20px 15px 20px;
        margin: 15px 0;
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.background};
        filter: drop-shadow(0px 0px 2px black);


        div {
            width: 100%;
            margin: 0.7rem 0;
            display: flex;
            flex-direction: column;
            justify-content: center;

            input {
                width: 100%;
            }

            button {
                align-self: center;
            }
        }
    }
`;

export const Title = styled.h2`
    margin: 0;
    font-size: 1.4em;
`;

export const Description = styled.p`
    margin: 1vmin 0 0 0;
    text-align: left;
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

export const ListItem = styled.li`
    margin: 0.5vmin 0;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1vmin;
`;

export const Input = styled.input`
    border: none;
    color: ${props => props.theme.background};
    border-bottom: 1px solid ${props => props.theme.background};
    background-color: ${props => props.theme.colors.primary};
    outline: none;
    padding: 5px 0;   
    flex-grow: 1;
    font-size: 1em;
`;

export const Button = styled.button`
    border: 1px solid ${props => props.theme.colors.primary};
    padding: 5px 10px;
    width: 63.4922px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.background};
    margin-top: 1vmin;

    &[type="submit"] {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.colors.primary};
        align-self: end;
        width: 50%;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
`;
