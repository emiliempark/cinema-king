import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import themes from "../../themes";
import Section from "../../uikit/Section";

import Facebook from "../../images/facebook.png";
import Twitter from "../../images/Twitter.png";
import Insta from "../../images/instagram.png";
import Youtube from "../../images/Youtube.png";

const Div = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: ${themes.effects.shadow};
  padding: 75px 0 35px;
  box-sizing: border-box;
  background-color: black;
  color: white;
  border-top: 7px solid ${themes.colors.secondary};

  ul {
    padding: 0;
    margin: 0 0 42px 0;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .link li {
    list-style: none;
    padding: 0 32px;
    a {
      ${themes.typography.mainNav}
      color: white;
      &:hover {
        color: ${themes.colors.ng300};
      }
    }
    &.current {
      a {
        color: ${themes.colors.ng300};
      }
    }
  }
  .social li {
    list-style: none;
    margin-right: 40px;
    &:last-of-type {
      margin-right: 0;
    }
    a {
      display: flex;
      width: 24px;
      height: 24px;
      align-items: center;

      img {
        display: block;
        width: 100%;
      }
    }
  }
  .copyright li {
    list-style: none;
    margin-right: 40px;
    &:first-of-type a {
      text-decoration: none;
    }
    &:last-of-type {
      margin-right: 0;
    }
    a {
      display: flex;
      align-items: center;
      ${themes.typography.copyright}
    }
  }
`;

const Footer = props => {
  return (
    <Div>
      <ul className="link">
        <li className="">
          <a href="">Help</a>
        </li>
        <li>
          <a href="">Shop</a>
        </li>
        <li>
          <a href="">FAQs</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <ul className="social">
        <li className="">
          <a href="">
            <img src={Facebook} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Twitter} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Insta} />
          </a>
        </li>
        <li>
          <a href="">
            <img src={Youtube} />
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li className="">
          <a href="">© 2020 CinemaKing Limited</a>
        </li>
        <li>
          <a href="">Terms & conditions</a>
        </li>
        <li>
          <a href="">Privacy policy</a>
        </li>
      </ul>
    </Div>
  );
};

Footer.propTypes = {};

export default Footer;
