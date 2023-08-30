import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import { darkTheme, lightTheme } from "./Themes";

import Work1 from "../assets/Images/work1.png";
import Work2 from "../assets/Images/work2.png";
import Work3 from "../assets/Images/work3.png";
import Work4 from "../assets/Images/work4.png";
import Work5 from "../assets/Images/work5.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Styling
const MainContainer = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.theme === "dark" ? darkTheme.body : lightTheme.body};
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .carouselContainer {
    margin: 120px 40px 40px;
    border-radius: 30px;
  }
  .carouselImg{
    border-radius: 20px;
  }
`;

// Coding
function Work(props) {
  return (
    <MainContainer theme="dark">
      <LogoComponent theme="dark" />
      <PowerButton theme="dark" />
      <Socials theme="dark" />
      <div className="carouselContainer">
        <Carousel>
          <div className="carouselImg">
            <img src={Work1} alt="work"/>
            <p className="legend">Legend 1</p>
          </div>
          <div className="carouselImg">
            <img src={Work2} alt="work" />
            <p className="legend">Legend 2</p>
          </div>
          <div className="carouselImg">
            <img src={Work3} alt="work" />
            <p className="legend">Legend 3</p>
          </div>
          <div className="carouselImg"> 
            <img src={Work4} alt="work" />
            <p className="legend">Legend 3</p>
          </div>
          <div className="carouselImg">
            <img src={Work5} alt="work" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </MainContainer>
  );
}

export default Work;
