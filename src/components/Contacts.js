import React from "react";
import styled from "styled-components";
import { Github, LinkedIn, Mail, Twitter } from "../components/Allsvg";
import { NavLink } from "react-router-dom";
import { darkTheme } from "../components/Themes";
import { useForm, ValidationError } from "@formspree/react";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  height: 130vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 80%;
  height: 95vh;
  display: flex;
  justify-content: center;
  gap: 50px;
  z-index: 2;
  padding: 5rem;
  border-radius: 33px;
  background: #ebd8b7;
  box-shadow: inset 11px 11px 21px #d8c7a8, inset -11px -11px 21px #fee9c6;

  @media (max-width: 678px) {
    padding-left: 2rem;
  }
`;

const Heading = styled.h1`
  font-size: calc(1rem + 2vw);
  font-weight: 600;
  color: ${(props) => props.theme.text};
  margin-bottom: 2rem;

  & p {
    font-size: 20px;
    margin: 30px 0;
    font-weight: 500;
  }
`;

const Label = styled.label`
  font-size: calc(0.5rem + 1.3vw);
  font-weight: 400;
  color: #865439;
  margin-bottom: 1.5rem;

  & input {
    background-color: inherit;
    border: none;
    border-bottom: 2px solid #865439;
  }
  & textarea {
    background-color: inherit;
    border: none;
    border-bottom: 2px solid #865439;
    outline-style: none;
  }
  & input:focus {
    outline: none;
    border-bottom: 2px solid #865439;
  }
`;
const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 800;
  color: #865439;
  margin: 20px auto;
  padding: 3px 8px;
  background-color: ${(props) => props.theme.body};
  border-radius: 5px;
  border: 2px solid #865439;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Contacts = (props) => {
  const [state, handleSubmit] = useForm("mlezbwnn");
  if (state.succeeded) {
    return <h1>Thanks! Form submitted successfully.</h1>;
  }

  return (
    <MainContainer>
      <PowerButton />
      <LogoComponent />

      <Box>
        <Heading>
          Contact me
          <p>
            Send me a message or you can email me at @goraisoumali5@gmail.com
          </p>
          <div style={{ display: "flex", gap: "20px" }}>
            <div>
              <NavLink
                target={"_blank"}
                style={{ color: "inherit" }}
                to={{ pathname: "https://github.com/soumali28" }}
              >
                <Github
                  width={25}
                  height={25}
                  fill={
                    props.theme === "dark" ? darkTheme.text : darkTheme.body
                  }
                />
              </NavLink>
            </div>
            <div>
              <NavLink
                target={"_blank"}
                style={{ color: "inherit" }}
                to={{
                  pathname:
                    "https://www.linkedin.com/in/soumali-gorai-566b01220/",
                }}
              >
                <LinkedIn
                  width={25}
                  height={25}
                  fill={
                    props.theme === "dark" ? darkTheme.text : darkTheme.body
                  }
                />
              </NavLink>
            </div>
            <div>
              <NavLink
                target={"_blank"}
                style={{ color: "inherit" }}
                to={{
                  pathname:
                    "https://twitter.com/_soumali_?t=PqRqu78kpVe-05t96hQvCg&s=09",
                }}
              >
                <Twitter
                  width={25}
                  height={25}
                  fill={
                    props.theme === "dark" ? darkTheme.text : darkTheme.body
                  }
                />
              </NavLink>
            </div>
            <div>
              <NavLink
                target={"_blank"}
                style={{ color: "inherit" }}
                to={{ pathname: "mailto:goraisoumali5@gmsil.com" }}
              >
                <Mail
                  width={25}
                  height={25}
                  fill={
                    props.theme === "dark" ? darkTheme.text : darkTheme.body
                  }
                />
              </NavLink>
            </div>
          </div>
        </Heading>
        {/* <Design></Design> */}
        <form method="POST" onSubmit={handleSubmit}>
          <br />
          <Label>
            Name:
            <br />
            <input type="text" name="first name" id="name"></input>
          </Label>
          <ValidationError
            prefix="First Name"
            field="first name"
            errors={state.errors}
          />
          <Label>
            Email:
            <br />
            <input type="email" name="email" id="email"></input>
          </Label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <br />
          <Label>
            Message for me:
            <br />
            <textarea
              type="text"
              name="message"
              id="message"
              rows={3}
              cols={23}
            ></textarea>
          </Label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <br />
          <Button type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </form>
      </Box>
      {/* <Circle></Circle> */}
    </MainContainer>
  );
};

export default Contacts;
