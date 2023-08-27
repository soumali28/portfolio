import React from "react";
import styled from "styled-components";
import { darkTheme } from "./Themes";
import { ThemeProvider } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import Socials from "../subComponents/Socials";
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { EducationData } from "../data/Educationdata";
import ParticleComponent from "../subComponents/ParticleComponent";

import "react-vertical-timeline-component/style.min.css";
import Sou from "../assets/Images/about.jpg";

// style
const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  padding: 200px 0 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  .horizontal {
    position: absolute;
    left: 0;
    width: 50%;
    height: 4px;
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
  .containerScl {
    position: absolute;
    width: 100%;
    top: calc(50% + 9.2rem);
    z-index: 3;
  }
  .line {
    color: #ebd8b7;
  }
  .board {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    & > :first-child {
      font-size: 22px;
    }
  }
  @media screen and (max-width: 528px) {
    padding: 10px 0 70rem;
    .horizontal {
      display: none;
    }
    .containerScl {
      top: calc(30% + 1.2rem);
    }
  }
`;

const Image = styled.div`
  width: 13rem;
  z-index: 5;
  & > :first-child {
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 30px;
    float: right;
  }

  @media screen and (max-width: 528px) {
    display: none;
  }
`;

// code
const Education = () => {
  let circle = {
    padding: "20px",
    background: "rgba(62, 37, 25, 0.35)",
    borderRadius: "50%",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(10px)",
    webkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(62, 37, 25, 0.03)",
    color: "#ebd8b7",
  };
  let content = {
    padding: "20px",
    background: "rgba(235, 216, 183, 0.18)",
    borderRadius: "20px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(2.1px)",
    webkitBackdropFilter: "blur(2.1px)",
    border: "1px solid rgba(235, 216, 183, 0.3)",
    borderBottom: "2px solid #ebd8b7",
    color: "#ebd8b7",
  };

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
        <div className="containerScl">
          <VerticalTimeline className="line">
            {EducationData.map((props) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={content}
                  contentArrowStyle={{
                    borderRight: "7px solid  #ebd8b7",
                  }}
                  date={props.date}
                  iconStyle={circle}
                  icon={
                    props.type === "school" ? <FaSchool /> : <FaGraduationCap />
                  }
                >
                  <h3 className="vertical-timeline-element-title">
                    {props.school}
                  </h3>
                  <div className="board">
                    <span>{props.marks}</span>
                    <span>{props.board}</span>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Education;
