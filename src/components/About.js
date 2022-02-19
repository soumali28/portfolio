import React from "react";
import styled from "styled-components";
import { darkTheme } from "./Themes";
import { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import Socials from "../subComponents/Socials";
import ParticleComponent from "../subComponents/ParticleComponent";



import Sou from "../assets/Images/about.jpg";
import { Col, Row } from "react-bootstrap";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  z-index: 3;
  border: 2px solid ${(props) => props.theme.text};
  width: 60%;
  height: 23rem;
  margin: 50px 0;
  padding: 2rem;
  color: ${(props) => props.theme.text};


  &>:last-child{
      font-size: 1.2rem;
      
  }
`;

const Image = styled.div`
  & > :first-child {
    width: 15rem;
    height: 18rem;
    border: 2px solid transparent;
    border-radius: 25px;
    float: right;
    
  }
`;

const About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <MainContainer>
        <LogoComponent theme="dark" />
        <PowerButton theme="dark" />
        <Socials theme="dark" />
        <ParticleComponent theme="dark" />

        <Box>
          <Row>
            <Col>
              <span>Hey, I am a frontend developer pursuing my Bachelor's of Technology from Asansol
              Engineering College. I am a passionate developer and enthusiat in Machine Learning. Keen 
              to learn and explore new technologies. I love to create simple yet beautiful websites with great user experience.
              Some of my hobbies include painting, journaling and netflix of course. You can connect with me via social links.</span>
            </Col>
            <Col>
              <Image>
                <img src={Sou}></img>
              </Image>
            </Col>
          </Row>
        </Box>
      </MainContainer>
        
    </ThemeProvider>
  );
};

export default About;
