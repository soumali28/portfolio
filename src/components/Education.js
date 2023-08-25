import React from "react";
import styled from "styled-components";
import { darkTheme } from "./Themes";
import { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import Socials from "../subComponents/Socials";
import { EducationData } from "../data/Educationdata";
import ParticleComponent from "../subComponents/ParticleComponent";

import Sou from "../assets/Images/about.jpg";
import EducationCompo from "../subComponents/EducationCompo";

// style
const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  padding: 200px 0 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .horizontal {
    position: absolute;
    left: 0;
    width: 50%;
    height: 3px;
    background-color: #ebd8b7;
    z-index: 1;

    span {
      position: absolute;
      bottom: 0;
      color: #ebd8b7;
      font-size: 68px;
      opacity: 0.4;
      margin-left: 12%;
      font-family: "Dancing Script", cursive;
    }
  }
  .vertical {
    position: absolute;
    transform: rotate(90deg);
    top: 50%;
    width: 100%;
    height: 3px;
    background-color: #ebd8b7;
    z-index: 1;
  }
  .containerScl {
    width: 88%;
    position: absolute;
    top: calc(25% + 1.2rem);
    left: 0;
    right: 0;
    //right: calc(5% + 0.8rem);
    z-index: 3;
  }
`;

const Image = styled.div`
  width: 12rem;
  z-index: 3;
  & > :first-child {
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 30px;
    float: right;
  }
`;

// code
const Education = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainContainer>
        <LogoComponent theme="dark" />
        <PowerButton theme="dark" />
        <Socials theme="dark" />
        {/* <ParticleComponent theme="dark" /> */}

        <div className="horizontal">
          <span>Education</span>
        </div>
        <Image>
          <img src={Sou} alt="profile"></img>
        </Image>
        <div className="vertical"></div>
        <div className="containerScl">
          {EducationData.map((props) => {
            return <EducationCompo key={props.id} active={props} />;
          })}
          {/* <EducationCompo /> */}
        </div>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Education;
