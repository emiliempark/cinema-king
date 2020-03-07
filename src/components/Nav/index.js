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
  padding: 0;
  ul {
    padding: 0;
    display: flex;
  }
  li {
    list-style: none;
    padding: 0 32px;
    &.current {
      a {
        color: ${themes.colors.ng900};
      }
    }
  }
`;

const NavItem = styled.a`
  ${themes.typography.mainNav}
  &:hover {
    color: ${themes.colors.ng900};
  }
`;
const Nav = props => {
  return (
    <NavStyle>
      <ul>
        <li className="current">
          <NavItem href="">Movies</NavItem>
        </li>
        <li>
          <NavItem href="">Games</NavItem>
        </li>
        <li>
          <NavItem href="">Podcasts</NavItem>
        </li>
        <li>
          <NavItem href="">Award</NavItem>
        </li>
        <li>
          <NavItem href="">Shopping</NavItem>
        </li>
        <li>
          <NavItem href="">Win</NavItem>
        </li>
      </ul>
    </NavStyle>
  );
};

Nav.propTypes = {};

export default Nav;
