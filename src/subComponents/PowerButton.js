//Home Button

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;

  background-image: linear-gradient(to bottom right,  #FFEDDB, #980F5A );
  padding: 0.5rem;
  border: 1px solid #8a39e1;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: inset 0 -2px 8px #461111;

  &:hover {
    box-shadow: inset 0 2px 8px #750550;
   
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const PowerButton = () => {
  return (
    <Power>
      <NavLink to="/">Home</NavLink>
    </Power>
  );
};

export default PowerButton;
