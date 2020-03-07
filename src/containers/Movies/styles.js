import { css } from "styled-components";
import themes from "../../themes";

const styles = css`
  .title {
    height: 420px;
    display: flex;
    align-items: center;
    ${themes.typography.title}
  }
  .post {
    height: 458px;
    margin-bottom: 35px;
    .innerWidth {
      background-color: white;
    }
  }
  .promo {
    background: black;
    height: 596px;
  }
`;

export default styles;
