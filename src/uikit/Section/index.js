import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  .innerWidth {
    width: 90%;
    max-width: ${prop => (prop.innerWidth ? `${prop.innerWidth}px` : "none")};
  }
`;

const Section = props => {
  const { ...other } = props;
  const renderInnerWrapper = () => (
    <div className="innerWidth">{props.children}</div>
  );

  return (
    <SectionStyle innerWidth={props.innerWidth} {...other}>
      {props.innerWidth ? renderInnerWrapper() : props.children}
    </SectionStyle>
  );
};

Section.propTypes = {
  innerWidth: PropTypes.number
};

export default Section;
