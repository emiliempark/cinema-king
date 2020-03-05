import React, { useEffect } from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import styles, {GlobalStyle} from './styles';
import Movies from '../Movies'
import Nav from '../../components/Nav';
import Section from '../../components/Section';

const Header = styled.div`${styles}`;
function App() {
  
  useEffect(() => {
    axios.get('https://virtserver.swaggerhub.com/narrative-software/sci-fi-movie-api/1.0.0/movies').then(res => {});
  }, []);
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header className="App-header">
            <div>cinema king logo</div>
            <Nav />
        </Header>
        {/* Router */}
        <Movies />
        <footer>
            <Section>links</Section>
            <Section>social media</Section>
            <Section>lisence</Section>
        </footer>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
      // members: state.team.list,
      // maxEntry: state.team.maxEntry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      // updateMember : (array) => dispatch(updateMember(array))
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
