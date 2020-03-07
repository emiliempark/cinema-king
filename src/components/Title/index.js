import React from "react";
import styled from "styled-components";
import Section from "../../uikit/Section";
import styles from "./styles";

const Div = styled(Section)`
  ${styles}
`;

const Title = props => {
  return (
    <Div className="title">
      <div className="textbox">
        <h1>Sci-fi Movies of the decade</h1>
        <div className="feature">Feature</div>
      </div>
    </Div>
  );
};

export default Title;
