import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../uikit/Section";
import styles, { itemStyles } from "./styles";
import Loading from "../../images/tenor.gif";

const Div = styled(Section)`
  ${styles}
`;

const Item = styled.div`
  ${itemStyles}
`;

const MovieList = props => {
  useEffect(() => {}, []);

  const renderItem = List => {
    return List.map((item, i) => (
      <Item key={i} url={item.post_url}>
        <div className="imgView">
          <div className="imgContent">
            <div className="rank">
              <span>{item.rank}.</span>
            </div>
            <div className="title">
              <span>
                {item.name} <i>({item.release_date.split("-")[0]})</i>
              </span>
            </div>
          </div>
        </div>
      </Item>
    ));
  };

  return (
    <Div innerWidth={1200} className="movies">
      {props.isLoading ? (
        <div className="spinner">
          <img src={Loading} />
        </div>
      ) : (
        renderItem(props.movieList)
      )}
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
