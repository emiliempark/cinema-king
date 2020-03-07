import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Title from "../../components/Title";
import styles from "./styles";
import Section from "../../uikit/Section";
const Div = styled.div`
  ${styles}
`;
const Movies = props => {
  return (
    <Div className="pageMovies">
      <Title />
      <Section innerWidth={1200} className="post">
        <div className="author">
          <p className="name">by Liam Coxon</p>
          <p className="permission">Contributor</p>
          <p className="date">MARCH 18 2020</p>
        </div>
        <div className="blob">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Section>
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
