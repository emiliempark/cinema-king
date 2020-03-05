import React, { useEffect } from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux';
import axios from 'axios';
import GlobalStyle from './styles';
import Movies from '../Movies'
function App() {
  
  useEffect(() => {
    axios.get('https://virtserver.swaggerhub.com/narrative-software/sci-fi-movie-api/1.0.0/movies').then(res => {});
  }, []);
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
            <div>cinema king logo</div>
            <nav>manu items</nav>
        </header>
        {/* Router */}
        <Movies />
        <footer>
            <div>links</div>
            <div>social media</div>
            <div>lisence</div>
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
