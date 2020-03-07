import { css } from "styled-components";
import themes from "../../themes";
import bg from "../../images/nathan-duck.png";

const styles = css`
  .title {
    height: 420px;
    display: flex;
    align-items: center;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      url(${bg});
    background-size: cover;
    background-position: center;
    .textbox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h1 {
        ${themes.typography.title}
      }
      .feature {
        display: flex;
        align-items: center;
        transform: skew(${themes.effects.angle}) translateY(-50%);
        background-color: ${themes.colors.secondary};
        ${themes.typography.caption}
        line-height: 1em;
        text-transform: uppercase;
        padding: 0.6em 1.5em 0.4em;
      }
    }
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
