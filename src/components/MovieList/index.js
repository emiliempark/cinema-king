import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../uikit/Section";
import styles from "./styles";

const Div = styled(Section)`
  ${styles}
`;

const MovieList = props => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (props.data === undefined) {
      return "loading";
    }
    setIsLoading(false);
  }, []);

  return (
    <Div innerWidth={1200} className="list">
      {isLoading ? <p>loader</p> : <p>lists</p>}
    </Div>
  );
};

MovieList.propTypes = {
  data: PropTypes.array
};
export default MovieList;
