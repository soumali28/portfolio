import React from "react";
import styled from "styled-components";
import  {motion} from "framer-motion";

const line1 = " A little";
const line2 = " progress";
const line3 = " each day adds upto";
const line4 = " big results.";

const sentence = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
  // exit: {
  //   zIndex: 0,
  //   //x: 600,
  //   opacity: 0
  // }
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & h2 {
    color: #FFDEDE;
    font-size: calc(1.5rem + 1vw);
  }
  .heading {
    color: #900C3F;
    font-size: calc(2.2rem + 1vw);
  }
`;

const AchiveText = () => {
  return (
    <Text>
      <motion.h2
        className="load-screen--message"
        variants={sentence}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
      >
        {line1.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {line2.split("").map((char, index) => {
          return (
            <motion.span
              className="heading"
              key={char + "-" + index}
              variants={letter}
            >
              {char}
            </motion.span>
          );
        })}
        <br />
        {line3.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {line4.split("").map((char, index) => {
          return (
            <motion.span
              className="heading"
              key={char + "-" + index}
              variants={letter}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.h2>
    </Text>
  );
};

export default AchiveText;