import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import themes from "../../themes";

const NavStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: ${themes.effects.shadow};
`;

const Nav = props => {
  return (
    <NavStyle>
      <ul>
        <li>
          <a href="">Movies</a>
        </li>
      </ul>
    </NavStyle>
  );
};

Nav.propTypes = {};

export default Nav;
