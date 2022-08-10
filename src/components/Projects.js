import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { darkTheme } from "./Themes";
import { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import Socials from "../subComponents/Socials";
import { Project } from "../data/ProjectsData";
import ProjectWork from "../subComponents/ProjectWork";
import Particles from "react-particles-js";
import configBubble from "../config/particlesjs-config-bubble.json";
import BigTitle from "../subComponents/BigTitle";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  border: 1px solid #FFEDDB;
  border-radius: 10px;
  padding: 50px 120px 100px;
  margin: 10rem 0;
  box-shadow: 0px 2px 20px #999;
  top: 12rem;
  left: calc(10rem + 15vw);
  min-height: screen;
  z-index: 3;
`;

const Bubble = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Scroll = styled.div`
  background-color: ${(props) => props.theme.body};
`;

const Projects = () => {
  // const ref = useRef(null);

  // useEffect(() => {
  //   let element = ref.current;

  //   const rotate = () => {
  //     element.style.transform = `translateX(${-window.pageYOffset * 3}rem)`;
  //   };

  //   window.addEventListener("scroll", rotate);
  //   return () => window.removeEventListener("scroll", rotate);
  // });

  return (
    <ThemeProvider theme={darkTheme}>
      <MainContainer>
        <LogoComponent theme="dark" />
        <PowerButton theme="dark" />
        <Socials theme="dark" />
        {/* <Bubble>
          <Particles
            style={{ position: "absolute", top: "0" }}
            params={configBubble}
          />
        </Bubble> */}

        {/* <Box ref={ref}>
          {Project.map((props) => (
            <ProjectWork key={props.id} data={props} />
          ))}
        </Box> */}
        <Box>
          {Project.map((props) => (
            <ProjectWork key={props.id} data={props} />
          ))}
        </Box>
      </MainContainer>

      <BigTitle text="PROJECTS" top="10%" right="15%" />
    </ThemeProvider>
  );
};

export default Projects;
