import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/Themes";
import {ProgressBar} from "react-bootstrap";
import LogoComponent from "../subComponents/LogoComponent"
import Socials from "../subComponents/Socials"
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`;
const ProgressBars = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 70vw;
 
  line-height: 1.5;
  margin: 50px 0;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 2;

  & span{
    font-size: calc(1rem + 1.2vw);
    font-weight: 600;
    color: #541212;
  }

`;


const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer>
      <LogoComponent />
      <PowerButton />
      <Socials />

      <ParticleComponent theme='light' />
        <ProgressBars>

          <span for="file">Html5:</span>
          <ProgressBar variant="danger" animated now={90} />
        
          <span for="file">CSS3:</span>
        
          <ProgressBar variant="danger" animated now={90} />
          <span for="file">Bootstrap:</span>
          <ProgressBar variant="danger" animated now={80} />
        
          <span for="file">ReactJS:</span>
          <ProgressBar variant="danger" animated now={60} />
          <span for="file">JavaScript:</span>
          <ProgressBar variant="danger" animated now={80} />

          <span for="file">Java(core):</span>
          <ProgressBar variant="danger" animated now={70} />
          
          
        </ProgressBars>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Skills;
