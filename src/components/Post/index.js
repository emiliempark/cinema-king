import React from "react";
import styled from "styled-components";
import Section from "../../uikit/Section";
import styles from "./styles";

const Div = styled(Section)`
  ${styles}
`;

const Post = props => {
  return (
    <Div innerWidth={1200} className="post">
      <div className="post">
        <div className="author">
          <p className="name">
            by <strong>Liam Coxon</strong>
          </p>
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
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </Div>
  );
};

export default Post;
