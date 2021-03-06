import { css } from "styled-components";
import themes from "../../themes";
import viewIcon from "../../images/viewmore.png";
const styles = css`
  margin-bottom: 45px;
  .innerWidth {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const itemStyles = css`
  width: 33.3%;
  max-width: 396px;
//   overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 60px;
  position: relative;
  &:before{
      content: '';
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    background-image: url(${viewIcon});
      background-size: 115px;
      background-repeat: no-repeat;
      background-position: center;
      z-index: 5;
  }
  &:hover{
    cursor: pointer;
    &:before{
        display: block;
    }
    & .imgView{
        width: calc(100% - 10px); 
        padding-top: calc(270 / 386 * 100%);
        transition: all ease 0.3;
        &:after{
            opacity: 1;
            transform: translate(6px, 6px); 
        }   
    }
  }
  .imgView {
    width: 100%;
    padding-top: calc(280 / 396 * 100%);
    // overflow: hidden;
    position: relative;
    z-index: 2;
    &:after{
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background-color: ${themes.colors.primary};
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        opacity: 0;
        transform: translate(0, 0); 
    }
  }
  .imgContent {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${prop => (prop.url ? `url(${prop.url})` : "none")};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 5;
  }
  .rank {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    top: 101%;
    height: 65px;
    padding: 0 13px 0 23px;
    background-color: ${themes.colors.secondary};
    transform: translate(0, -85%);
    ${themes.typography.movieRank}
    z-index: 2;
    &:after{
        content: "";
        display: block;
        width: 0;
        height: 0;
        position: absolute;
        left: 100%;
        border-left: 16px solid ${themes.colors.secondary};
        border-bottom: 65px solid transparent;
        z-index: 2;
    }
    span {
      display: block;
      transform: skew(14deg);
    }
  }
  .title {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 53px;
    padding: 0 21px 0 30px;
    position: absolute;
    top: 100%;
    left: 35px;
    ${themes.typography.movieTitle}
    transform: skew(${themes.effects.angle}) translate(0, -50%);
    background-color: ${themes.colors.primary};
    span{
        display: block;
        transform: skew(14deg);
        i{
            ${themes.typography.movieYear}
            font-style: normal;
        }
    }
  }
`;

export default styles;
