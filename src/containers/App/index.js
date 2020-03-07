import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import styles, { footerStyles, GlobalStyle } from "./styles";
import Movies from "../Movies";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import mainLogo from "../../images/Learn.png";

const Header = styled.div`
  ${styles}
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
        <Footer></Footer>
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
