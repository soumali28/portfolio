import React from "react";
import styled from "styled-components";
import { FaSchool } from "react-icons/fa";
import { darkTheme } from "../components/Themes";

const Container = styled.div`
  position: absolute;
  bottom: calc(43% + 1.2rem);
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};
  z-index: 3;
  .circle {
    position: absolute;
    bottom: calc(43% + 1.2rem);
    padding: 60px;
    background: rgba(62, 37, 25, 0.35);
    border-radius: 50%;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2.1px);
    -webkit-backdrop-filter: blur(2.1px);
    border: 1px solid rgba(62, 37, 25, 0.03);
  }
`;

function EducationCompo(props) {
  return (
    <Container theme="dark">
      <div className="circle">
        <FaSchool size={72} />
      </div>
      <div className="content">{props.school} Assembly of </div>
    </Container>
  );
}

export default EducationCompo;
