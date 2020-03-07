import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import themes from "../../themes";
import Section from "../../uikit/Section";

const Div = styled(Section)`
  .innerWidth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      ${themes.typography.subHeading}
    }
    .btn {
      border: 1px solid white;
      display: flex;
      justify-content: center;
      align-items: center;
      ${themes.typography.btn}
      min-width: 200px;
      height: 63px;
      box-sizing: border-box;
      padding: 12px;
      margin: 34px;
    }
  }
`;

const Promo = props => {
  return (
    <Div innerWidth={1200} className="promo">
      <h2>Join the Kingdom for just $5</h2>
      <div className="btn">Sign up</div>
    </Div>
  );
};

Promo.propTypes = {};

export default Promo;
