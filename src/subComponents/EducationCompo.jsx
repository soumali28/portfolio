import React from "react";
import styled from "styled-components";
import { FaSchool } from "react-icons/fa";
import { darkTheme } from "../components/Themes";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};
  z-index: 3;
  margin: 200px 0 100px;
  .circle {
    padding: 60px;
    background: rgba(62, 37, 25, 0.35);
    border-radius: 50%;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(62, 37, 25, 0.03);
  }
  .sclName {
    font-size: 34px;
    font-weight: 600;
    width: 20%;
  }
  .marks {
    font-size: 28px;
    font-weight: 500;
    display: block;
  }
  .board {
    font-size: 22px;
    color: #c0ad8c;
  }
`;

function EducationCompo(props) {
  const { school, marks, board } = props.active;
  return (
    <Container theme="dark">
      <span className="sclName">{school}</span>
      <div className="circle">
        <FaSchool size={72} />
      </div>
      <div>
        <span className="marks">{marks}</span>
        <span className="board">{board}</span>
      </div>
    </Container>
  );
}

export default EducationCompo;
