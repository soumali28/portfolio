import React from "react";
import styled from "styled-components";

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import Socials from "../subComponents/Socials";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  background-color: ${(props) => props.theme.text};
  width: 30vw;
  height: 55vh;
  position: absolute;
  border-radius: 0 100% 0 0;
  left: 0;
  bottom: calc(-6rem - 2.5vw);
  z-index: 3;
`;

const Box = styled.div`
  width: 70%;
  height: 95vh;
  z-index: 5;
  background-color: #fff;
  padding-left: 5rem;

  @media (max-width: 678px) {
    padding-left: 2rem;
  }
`;
const Design = styled.div`
  width: 20%;
  height: 20vh;
  z-index: 6;
  background-color: ${(props) => props.theme.text};
  border-radius: 0 0 0 100%;
  position: relative;
  left: 80%;
`;
const Heading = styled.h1`
  font-size: calc(2rem + 2vw);
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin-bottom: 2rem;
`;
const Label = styled.label`
  font-size: calc(0.5rem + 1.3vw);
  font-family: "Courier New", Courier, monospace;
  font-weight: 600;
  color: #a13333;
  margin-bottom: 1.5rem;

  & input {
    border: none;
    border-bottom: 2px solid #a13333;
  }
  & input:focus {
    outline: none;
    border-bottom: 2px solid #a13333;
  }
`;
const Button = styled.button`
  font-size: 1.2rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: 800;
  color: ${(props) => props.theme.text};
  margin: 20px auto;
  padding: 3px 8px;
  background-color: ${(props) => props.theme.body};
  border-radius: 30px;
  border: 2px solid ${(props) => props.theme.text};


  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Contacts = () => {

 
    const [state, handleSubmit] = useForm("mlezbwnn");
    if (state.succeeded) {
      return <h1>Thanks! Form submitted successfully.</h1>;
    }
  

  return (
    <MainContainer>
    <PowerButton/>
    <LogoComponent/>
    <Socials/>
    
      <Box>
        <Design></Design>
        <form
          
          method="POST"
          onSubmit={handleSubmit}
        >
          <Heading>Contact me</Heading>
          <br />
          <Label>
            First Name:
            <input type="text" name="first name" id="first name"></input>
          </Label>
          <ValidationError
            prefix="First Name"
            field="first name"
            errors={state.errors}
          />
          <Label>
            Last Name:
            <input type="text" name="last name" id="last name"></input>
          </Label>
          <ValidationError
            prefix="Last Name"
            field="last name"
            errors={state.errors}
          />
          <br />
          <Label>
            Email:
            <input type="email" name="email" id="email"></input>
          </Label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <br />
          <Label>
            Message for me:
            <input type="text" name="message" id="message"></input>
          </Label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <Button
          type="submit"  disabled={state.submitting}>Submit
          </Button>
        </form>
      </Box>
      <Circle></Circle>
    </MainContainer>
  );
};

export default Contacts;
