import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import Section from '../../components/Section';

const Movies = props => {
    return (
        <div className="pageMovies">
            <Section>title</Section>
            <Section>posts</Section>
            <Section innerWidth={1200}>list</Section>
            <Section>promo</Section>

        </div>

    )
}

Movies.propTypes = {

}

const mapStateToProps = (state) => {
    return {
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
    }
    
  }

export default connect(mapStateToProps, mapDispatchToProps)(Movies)