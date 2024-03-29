import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Pic from "../assets/Images/bitmoji.png";

const IntroStyle = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 55vh;

  display: flex;

  //to create two color border
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;

  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-radius: 30px 0 30px 0;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
  @media (max-width: 500px) {
    width: 70vw;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    top: 8.5rem;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: auto;
  }
  @media (max-width: 500px) {
    .pic {
      width: 90%;
      top: 8.9rem;
    }
  }
`;

const Text = styled(motion.div)`
  color: ${(props) => props.theme.body};
  font-size: calc(1em + 1.5vw);
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & h6 {
    color: #e0c097;
    font-size: calc(0.5rem + 1.3vw);
    font-weight: 300;
  }
  a {
    color: #ffd372;
    font-size: 20px;
    margin: 25px 0 10px;
    border: 1px solid #ffd372;
    border-radius: 5px;
    padding: 5px 0;
    width: 50%;
    text-align: center;
    text-decoration: none;
  }
  a:hover {
    background-color: #ffd372;
    color: ${(props) => props.theme.text};
  }
  @media (max-width: 500px) {
    h2,
    h3,
    h6 {
      font-size: 12px;
    }
    a {
      width: 100%;
      font-size: 15px;
    }
  }
`;

const Intro = (props) => {
  return (
    <IntroStyle
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 2 }}
        >
          <h2>Hi,</h2>
          <h3>I am Soumali</h3>
          <h6>
            I am a full stack web developer. Love to write blogs and socialize
            with people.
          </h6>
          <a
            href="https://drive.google.com/file/d/1_7PUDXNnvAemOf2dwPwtT-QpNTSUN4HE/view?usp=sharing"
            target="blank"
          >
            Resume
          </a>
        </Text>
      </SubBox>

      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1, delay: 2 }}
        >
          <img className="pic" src={Pic} alt="Profile"></img>
        </motion.div>
      </SubBox>
    </IntroStyle>
  );
};

export default Intro;
