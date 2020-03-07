import { createGlobalStyle, css } from "styled-components";
import { fonts } from "../../themes";

import poppinsregular from "../../fonts/poppins-regular-webfont.woff";
import poppinsregular2 from "../../fonts/poppins-regular-webfont.woff2";

import poppinssemibold from "../../fonts/poppins-semibold-webfont.woff";
import poppinssemibold2 from "../../fonts/poppins-semibold-webfont.woff2";

import poppinsblack from "../../fonts/poppins-black-webfont.woff";
import poppinsblack2 from "../../fonts/poppins-black-webfont.woff2";

import poppinsblack_italic from "../../fonts/poppins-blackitalic-webfont.woff";
import poppinsblack_italic2 from "../../fonts/poppins-blackitalic-webfont.woff2";

import caladearegular from "../../fonts/caladea-regular-webfont.woff";
import caladearegular2 from "../../fonts/caladea-regular-webfont.woff2";

export const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: ${fonts.reg};
      src: url(${poppinsregular}) format('woff2'),
          url(${poppinsregular2}) format('woff');
      font-weight: normal;
      font-style: normal;

  }
  @font-face {
      font-family: ${fonts.med};
      src: url(${poppinssemibold2}) format('woff2'),
          url(${poppinssemibold}) format('woff');
      font-weight: normal;
      font-style: normal;

  }
  @font-face {
      font-family: ${fonts.bold};
      src: url(${poppinsblack2}) format('woff2'),
          url(${poppinsblack}) format('woff');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: ${fonts.boldi};
      src: url(${poppinsblack_italic2}) format('woff2'),
          url(${poppinsblack_italic}) format('woff');
      font-weight: normal;
      font-style: normal;

  }
  @font-face {
      font-family: ${fonts.textreg};
      src: url(${caladearegular2}) format('woff2'),
          url(${caladearegular}) format('woff');
      font-weight: normal;
      font-style: normal;

  }

  *{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body, html{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #E5E5E5;
      font-family: arial;
      font-family: ${fonts.reg};
      font-size: 12px;
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
  .mainLogoLink {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 223px;
    background-color: #2e19a5;
    &:before {
      z-index: 0;
      position: absolute;
      content: "";
      display: block;
      width: 5px;
      height: 100%;
      left: calc(100%);
      background-color: #f84464;
      transform: skew(-14deg) translateX(10px);
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      left: 100%;
      border-left: 20px solid #2e19a5;
      border-bottom: 80px solid transparent;
      z-index: 2;
    }
    a {
      display: block;
      width: 169px;
    }

    img {
      display: block;
      width: 100%;
    }
  }
`;

export default styles;
