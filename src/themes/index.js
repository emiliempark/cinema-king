import { css } from "styled-components";

export const fonts = {
  reg: "poppinsregular",
  med: "poppinssemibold",
  bold: "poppinsblack",
  boldi: "poppinsblack_italic",
  textreg: "caladearegular"
};

export const typography = {
  title: css`
    font-size: 58px;
    line-height: 100px;
    color: white;
    font-family: ${fonts.med};
    margin: 0;
  `,
  caption: css`
    font-family: ${fonts.bold};
    font-size: 14px;
  `
};

export const colors = {
  primary: "#2E19A5",
  secondary: "#F84464"
};

export const effects = {
  angle: "-14deg",
  shadow: "0px 4px 30px rgba(0, 0, 0, 0.05), 0px 0px 1px rgba(0, 0, 0, 0.15)"
};

const themes = {
  fonts,
  typography,
  colors,
  effects
};

export default themes;
