import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { YinYang } from "./Allsvg";
import { motion } from "framer-motion";

//subcomponents
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import Socials from "../subComponents/Socials";
import Intro from "../subComponents/Intro";
import { darkTheme } from "./Themes";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }
  @media (max-width: 500px) {
    h3 {
      font-size: 18px;
    }
  }
`;

const Honors = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 1vw);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
  transform: rotate(90deg) translate(-20%, -90%);

  &:hover {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }

  @media (max-width: 500px) {
    right: calc(1rem + -6vw);

    h3 {
      font-size: 18px;
    }
  }
`;

const Works = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
  transform: translate(-50%, -50%) rotate(-90deg);

  &:hover {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }
  @media (max-width: 500px) {
    h3 {
      font-size: 18px;
    }
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  @media (max-width: 500px) {
    h3 {
      font-size: 18px;
    }
  }
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }
`;

const SKILL = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.text};
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 1s ease;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & span {
    margin-top: 2rem;
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.text};
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0")};
  height: ${(props) => (props.click ? "100%" : "0")};
  z-index: 1;

  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = (props) => {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }

  return (
    <MainContainer>
      <DarkDiv click={click} />

      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <Socials theme={click ? "dark" : "light"} />

        <Center click={click}>
          <YinYang
            onClick={handleClick}
            width={click ? "7vw" : "15vw"}
            height={click ? "7vw" : "15vw"}
            fill="currentColor"
          />
          <span>Click me</span>
        </Center>

        <Contact to={{ pathname: "/contact" }}>
          <motion.h4 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
            Say Hi 👋
          </motion.h4>
        </Contact>

        <Honors to={{ pathname: "/achievements" }}>
          <motion.h4 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
            Achievements
          </motion.h4>
        </Honors>

        <Works to={{ pathname: "/work" }} click={click}>
          <motion.h4 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
            Work
          </motion.h4>
        </Works>

        <BottomBar>
          <ABOUT to={{ pathname: "/education" }} click={click}>
            <motion.h4 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
              Education
            </motion.h4>
          </ABOUT>

          <SKILL to={{ pathname: "/skills" }}>
            <motion.h4 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }}>
              Skills
            </motion.h4>
          </SKILL>
        </BottomBar>
      </Container>

      {click && <Intro click={click} />}
    </MainContainer>
  );
};

export default Main;
