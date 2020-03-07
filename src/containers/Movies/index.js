import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Title from "../../components/Title";
import Post from "../../components/Post";
import styles from "./styles";
import Section from "../../uikit/Section";
const Div = styled.div`
  ${styles}
`;
const Movies = props => {
  return (
    <Div className="pageMovies">
      <Title />
      <Post />
      <Section innerWidth={1200} className="list">
        loading or list
      </Section>
      <Section className="promo">
        Join the Kingdom for just $5
        <div>Sigh up</div>
      </Section>
    </Div>
  );
};

Movies.propTypes = {};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
