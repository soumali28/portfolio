import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.li`
  width: 17rem;
  height: 45vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 4px solid #3d0000;
  box-shadow: 0px 2px 12px #f9c5d5;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.8vw);
  font-weight: 800;
`;
const Desciption = styled.span`
  font-size: calc(0.7em + 0.5vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0%.5rem;
  display: flex;
  flex-wrap: wrap;
`;
const Tag = styled.span`
  margin-right: 1rem;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;
const Link = styled(NavLink)`
  padding: 0.2rem 0.6rem;
  border-radius: 30px;
  color: #3d0000;
  text-decoration: none;
  border: 2px solid #3d0000;
  font-weight: 700;
  margin-top:5px;

  &:hover {
    background-color: #3d0000;
    color: ${(props) => props.theme.text};
  }
`;

const ProjectWork = (props) => {
  const { id, name, description, tags, demo, github } = props.data;
  return (
    <Box key={id}>
      <Title>{name}</Title>
      <Desciption>{description}</Desciption>
      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}> #{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link to={{ pathname: `${demo}` }} target="_blank">
          Vist
        </Link>
        <Link to={{ pathname: `${github}` }} target="_blank">
          Github
        </Link>
      </Footer>
    </Box>
  );
};

export default ProjectWork;
