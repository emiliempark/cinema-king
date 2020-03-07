import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import styles, { footerStyles, GlobalStyle } from "./styles";
import Movies from "../Movies";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import mainLogo from "../../images/Learn.png";

const Header = styled.div`
  ${styles}
`;
const Footer = styled.footer`
  ${footerStyles}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header>
          <div className="mainLogoLink">
            <a href="#">
              <img src={mainLogo} />
            </a>
          </div>
          <Nav />
        </Header>
        {/* Router */}
        <Movies />
        <Footer>
          <Section>links</Section>
          <Section>social media</Section>
          <Section>lisence</Section>
        </Footer>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    // members: state.team.list,
    // maxEntry: state.team.maxEntry
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // updateMember : (array) => dispatch(updateMember(array))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
