import React from "react";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import { darkTheme, lightTheme } from "./Themes";
import Carousel from "react-bootstrap/Carousel";

import Work1 from "../assets/Images/work1.png";
import Work2 from "../assets/Images/work2.png";
import Work3 from "../assets/Images/work3.png";
import Work4 from "../assets/Images/work4.png";
import Work5 from "../assets/Images/work5.png";

// Styling
const MainContainer = styled.div`
  width: 100%;
  background-color: ${(props) =>
    props.theme === "dark" ? darkTheme.body : lightTheme.body};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 60px;

  .carouselContainer {
    margin: 120px 40px 100px;
    border-radius: 30px;

    .carouselSlide {
      border-radius: 30px;
    }
    img {
      border-radius: 30px;
      width: 100%;
      opacity: 0.3;
    }
    .carousel-caption {
      right: 40%;
      bottom: 16rem;
      left: 0;
      color: #ebd8b7;
      margin-left: 150px;
      text-align: left;
      h3 {
        font-size: 48px;
        font-weight: 800;
      }
      p {
        font-size: 34px;
        color: #edd3a7c2;
      }
      .skill {
        list-style: none;
        display: flex;
        align-items: center;
        padding-left: 0;
      }
      .skill li {
        margin: 5px;
        background-color: #e732b0c2;
        border-radius: 10px;
        padding: 10px 20px;
      }
      .code {
        position: absolute;
        bottom: 0;
      }
    }
  }

  .carouselContainer:hover {
    scale: 1.04;
  }

  .proj {
    border: none;
    padding: 10px 20px;
    background-color: yellow;
    font-weight: 600;
    border-radius: 5px;
    box-shadow: inset 5px #333;
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
        <Carousel className="carouselSlide" slide="none">
          <Carousel.Item>
            <a target="blank" href="https://www.uhfindia.org/">
              <img src={Work1} alt="first slide" />
              <Carousel.Caption>
                <div>
                  <h3>United Hope</h3>
                  <p>An Ngo website to manage funds</p>
                  <ul className="skill">
                    <li>ReactJs</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
              </Carousel.Caption>
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <a target="blank" href="https://himalayandreamtreks.in/">
              <img src={Work3} alt="first slide" />
              <Carousel.Caption>
                <h3>The Himalyan Treks</h3>
                <p>Travel booking system</p>
                <ul className="skill">
                  <li>ExpressJs</li>
                  <li>ReactJs</li>
                  <li>MongoDb</li>
                </ul>
              </Carousel.Caption>
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <a target="blank" href="https://manjeetkaur-frontend.vercel.app/">
              <img src={Work2} alt="first slide" />
              <Carousel.Caption>
                <h3>Manjeet Kaur Org</h3>
                <p>Website to managee funds and volunteers</p>
                <ul className="skill">
                  <li>ReactJs</li>
                  <li>TainwindCSS</li>
                </ul>
              </Carousel.Caption>
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <a target="blank" href="https://testaeccc.web.app/">
              <img src={Work5} alt="first slide" />
              <Carousel.Caption>
                <h3>AEC Coding Club</h3>
                <p>Event Management System for Coding club in our college</p>
                <ul className="skill">
                  <li>ReactJs</li>
                  <li>ExpressJs</li>
                </ul>
              </Carousel.Caption>
            </a>
          </Carousel.Item>

          <Carousel.Item>
            <a target="blank" href="https://createyourownmeme.netlify.app/">
              <img src={Work4} alt="first slide" />
              <Carousel.Caption>
                <h3>Make your Meme</h3>
                <p>A frontend site to generate memes</p>
                <ul className="skill">
                  <li>ReactJs</li>
                </ul>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        </Carousel>
      </div>
      <a href="https://github.com/soumali28">
        <button className="proj">View More</button>
      </a>
    </MainContainer>
  );
}

export default Work;
