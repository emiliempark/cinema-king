import { css } from "styled-components";
import themes from "../../themes";
import hexBg from "../../images/hex-bg.svg";
const styles = css`
  box-sizing: border-box;
  // min-height: 458px;
  margin-bottom: 35px;
  transform: translateY(-90px);
  .innerWidth {
    box-sizing: border-box;
    background-image: url(${hexBg});
    background-size: 105% 110%;
    background-position: center;
    background-repeat: no-repeat;
    padding: 80px 80px 90px;
  }
  .post {
    display: flex;
    * {
      margin: 0;
    }
    .author {
      width: 155px;
      border-right: 4px solid ${themes.colors.primary};
      .name,
      .permission {
        ${themes.typography.articleCredit}
        strong {
          ${themes.typography.caption}
        }
      }
      .date {
        ${themes.typography.articleDate}
        margin: 1em 0;
      }
    }
    .blob {
      flex: 1;
      box-sizing: border-box;
      padding: 0 40px;
      h3 {
        ${themes.typography.articleTitle}
        margin-bottom: 38px;
      }
      p {
        ${themes.typography.article}
        margin-bottom: 0.5em;
        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default styles;
