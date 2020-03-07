import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Title from "../../components/Title";
import Post from "../../components/Post";
import MovieList from "../../components/MovieList";
import Promo from "../../components/Promo";
import styles from "./styles";
import Section from "../../uikit/Section";
import { getMovies } from "./actions";

const Div = styled.div`
  ${styles}
`;

const Movies = props => {
  useEffect(() => {
    console.log("loaded", props.movieList);
    props.getMovies();
  }, []);
  return (
    <Div className="pageMovies">
      <Title />
      <Post />
      <MovieList data={props.movieList}>loading or list</MovieList>
      <Promo />
    </Div>
  );
};

Movies.propTypes = {};

const mapStateToProps = state => {
  return {
    movieList: state.movie.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => dispatch(getMovies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
