import { css } from "styled-components";

export const colors = {
  primary: "#2E19A5",
  secondary: "#F84464",
  ng300: "#B4B4B4",
  ng500: "#828282",
  ng800: "#393939",
  ng900: "#1C1C1C"
};

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
  subHeading: css`
    font-size: 48px;
    line-height: 72px;
    color: white;
    font-family: ${fonts.med};
    margin: 0;
  `,
  articleTitle: css`
    font-size: 23px;
    line-height: 40px;
    color: ${colors.ng900};
    font-family: ${fonts.reg};
    font-weight: normal;
    margin: 0;
  `,
  article: css`
    font-size: 17px;
    line-height: 34px;
    font-family: ${fonts.textreg};
    color: ${colors.ng800};
  `,
  articleCredit: css`
    font-size: 14px;
    line-height: 20px;
    font-family: ${fonts.med};
    color: ${colors.ng800};
  `,
  articleDate: css`
    font-size: 11px;
    line-height: 20px;
    font-family: ${fonts.boldi};
    color: ${colors.ng300};
  `,
  caption: css`
    font-family: ${fonts.bold};
    font-size: 14px;
  `,
  mainNav: css`
    font-size: 12px;
    line-height: 18px;
    color: ${colors.ng500};
    font-family: ${fonts.med};
    font-weight: normal;
    margin: 0;
    text-transform: uppercase;
    text-decoration: none;
  `,
  movieRank: css`
    font-size: 23px;
    line-height: 40px;
    font-family: ${fonts.boldi};
    color: black;
  `,
  movieTitle: css`
    font-size: 18px;
    line-height: 40px;
    font-family: ${fonts.bold};
    color: white;
  `,
  movieYear: css`
    font-size: 18px;
    line-height: 40px;
    font-family: ${fonts.reg};
    color: white;
  `,
  btn: css`
    font-size: 17px;
    line-height: 25px;
    font-family: ${fonts.med};
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.6;
  `,
  copyright: css`
    font-size: 11px;
    line-height: 16px;
    font-family: ${fonts.reg};
    color: ${colors.ng500};
  `
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
