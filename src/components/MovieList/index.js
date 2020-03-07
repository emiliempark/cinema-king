import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../uikit/Section";
import styles from "./styles";

const Div = styled(Section)`
  ${styles}
`;

const MovieList = props => {
  useEffect(() => {}, []);

  const renderItem = List => {
    return List.map((item, i) => <div key={i}>{item.name}</div>);
  };

  return (
    <Div innerWidth={1200} className="movies">
      {props.isLoading ? "loading" : renderItem(props.movieList)}
    </Div>
  );
};

MovieList.propTypes = {
  data: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    isLoading: state.movie.isLoading,
    movieList: state.movie.list
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
