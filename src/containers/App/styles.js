import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, html{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #E5E5E5;
        font-family: arial;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const styles = css`
    background-color: white;
    height: 80px;
    drop-shadow: 30px 0px, 4px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    position: relative;
    .mainLogoLink{
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        height: 100%;
        width: 223px;
        background-color: #2E19A5;
        &:before{
            z-index: 0;
            position: absolute;
            content: '';
            display: block;
            width: 5px;
            height: 100%;
            left: calc(100%);
            background-color: #F84464;
            transform: skew(-14deg) translateX(10px);
            
        }
        &:after{
            content: '';
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            left: 100%;
            border-left: 20px solid #2E19A5; 
            border-bottom: 80px solid transparent;
            z-index: 2;
        }
        a{
            display: block;
            width: 169px;
        }
        
        img{
            display: block;
            width: 100%;
        }
    }
`;

export default styles;