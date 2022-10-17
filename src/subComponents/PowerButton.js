//Home Button

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../components/Themes";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
  background-color: ${(props) => props.theme === "dark" ? lightTheme.body: lightTheme.text };
  color: ${(props) => props.theme === "dark" ? darkTheme.body : darkTheme.text };
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 600;
  border: none;

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <NavLink to="/">
      <Power>Home</Power>
    </NavLink>
  );
};

export default PowerButton;
