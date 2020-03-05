import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const NavStyle = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;


const Nav = (props) => {

    return (
        <NavStyle>
            <ul>
                <li><a href="">Movies</a></li>
            </ul>
        </NavStyle>
    )
}

Nav.propTypes = {
};

export default Nav
