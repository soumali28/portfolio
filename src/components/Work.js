import React from "react";
import styled from "styled-components";
import Girl from "../assets/Images/women.png"
import LogoComponent from "../subComponents/LogoComponent";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import { darkTheme, lightTheme } from "./Themes";
import { Line } from "./Allsvg";



// Styling
const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.theme === "dark" ? darkTheme.body : lightTheme.body};
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Ground = styled.div`
  position: absolute;
  bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const User = styled.div`
  position: absolute;
  bottom: 10%;
  width: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img{
    width: 100%;
  }
`;

// Coding
function Work(props) {
  return (
    <MainContainer theme="dark">
      <LogoComponent theme="dark" />
      <PowerButton theme="dark" />
      <Socials theme="dark" />

      <Ground>
        <Line width={500} height={25} />
        <Line width={500} height={25} />
        <Line width={500} height={25} />
      </Ground>

      <User>
        <img src={Girl} alt='girl' />
      </User>
    </MainContainer>
  );
}

export default Work;
