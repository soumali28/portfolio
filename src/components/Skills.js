import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/Themes";
import { Card, ProgressBar } from "react-bootstrap";
import LogoComponent from "../subComponents/LogoComponent";
import Socials from "../subComponents/Socials";
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

  .skillscard {
    width: 100%;
    padding: 20px 50px 50px;
    margin: 0 100px;
    text-align: center;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .skillscard .title {
    margin-bottom: 10px;
    font-size: 37px;
    color: #333;
  }
  .skillscard .skills {
    width: 45%;
    text-align: left;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .skillscard .skillcardbody h3 {
    font-weight: 600;
    color: #333;
  }
  .skillscard img {
    width: 50px;
    height: 40px;
  }
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

  & span {
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

        <ParticleComponent theme="light" />
        <Card className="skillscard">
          <h3 className="title">Skills</h3>
          <Card className="skills">
            <Card.Body>
              <img
                src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                alt="htmllogo"
              />
              <h3>HTML 5</h3>
            </Card.Body>
          </Card>
        </Card>

        {/* <ProgressBars>

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
          
          
        </ProgressBars> */}
      </MainContainer>
    </ThemeProvider>
  );
};

export default Skills;
