import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

import Pic from "../assets/Images/bitmoji.png";

const IntroStyle = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 50vh;
 
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
    border-radius: 30px 0 30px 0 ;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
  @media(max-width: 500px){
    width: 70vw;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    top: 6.7rem;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: auto;
  }
  @media(max-width: 500px){
    .pic{
      width: 90%;
      top: 8.9rem;
    }
  }
`;

const Text = styled(motion.div)`
    color: ${props => props.theme.body};
    font-size:calc(1em + 1.5vw);
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & h6{
      color: #E0C097;
      font-size: calc(0.5rem + 1.3vw);
      font-weight: 300;
    }
`;

const Intro = (props) => {
  return (
    <IntroStyle  initial={{height: 0}} animate={{height: "50vh"}} transition={{type: 'spring', duration:2, delay:1}}>
      <SubBox>
        <Text initial={{opacity: 0.3}} animate={{opacity:1}} transition={{type: 'spring', duration:1, delay:2}}>
          <h2>Hi,</h2>
          <h3>I am Soumali</h3>
          <h6>
            I am a full stack developer. An enthusiast in AI and Ml. Keen to learn
            new technologies and love solving problems. 
          </h6>
        </Text>
      </SubBox>

      <SubBox>
        <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{type: 'spring', duration:1, delay:2}} >
          <img className="pic" src={Pic} alt="Profile Image"></img>
        </motion.div>
      </SubBox>
    </IntroStyle>
  );
};

export default Intro;
