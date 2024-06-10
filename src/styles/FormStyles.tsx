import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    button {
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.colors.primary};
        border-radius: 3px;
        border: 1px solid ${props => props.theme.colors.primary};
        padding: 5px 10px;
    }

    button[type="submit"] {
        background-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.background};
    }
        
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        
        div {
            width: 80%;
            display: flex;
            justify-content: center;
            font-size: 1.34vmin;
            gap: 0.5vmin;
            padding: 1vmin;
            align-items: end;
            
            label {
                display: flex;
                flex-direction: row;
                gap: 1vmin;
                justify-content: center;
            }
            
            input {
                border: none;
                color: ${props => props.theme.colors.primary};
                border-bottom: 1px solid ${props => props.theme.colors.primary};
                background-color: ${props => props.theme.background};
                outline: none;
                font-size: 1.34vmin;
            }

            input:focus-visible {
                border: none;
                border-bottom: 1px solid ${props => props.theme.colors.primary};
            }    
            
        }
    }  
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 1vmin;
    display: flex;
    flex-direction: column;
    gap: 0.5vmin;
    align-items: center;
`;
