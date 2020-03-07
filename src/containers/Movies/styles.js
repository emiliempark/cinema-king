import { css } from "styled-components";
import themes from "../../themes";
import bg from "../../images/promobg.png";

const styles = css`
  .promo {
    background-image: url(${bg});
    background-size: cover;
    background-position: center left;
    background-repeat: no-repeat;
    height: 596px;
  }
`;

export default styles;
