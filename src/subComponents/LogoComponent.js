import React from "react";
import styled from "styled-components";
import { darkTheme, lightTheme } from "../components/Themes";

const Logo = styled.h3`
  display: inline-block;
  color: ${(props) => props.color === "dark" ? darkTheme.text : lightTheme.text};
  font-family: "Pacifico", cursive;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  @media(max-width: 500px){
    font-size: 18px;
    
  }
`;

const LogoComponent = (props) => {
  return <Logo color = {props.theme}>S.G</Logo>;
};

export default LogoComponent;
