import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, html{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #E5E5E5;
        font-family: arial;
        
    }
`;

const styles = css`
    background-color: white;
    height: 80px;
    drop-shadow: 30px 0px, 4px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: stretch;
`;

export default styles;