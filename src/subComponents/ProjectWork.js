import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Box = styled.a`
  width: 45rem;
  height: 50vh;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 2px solid #ffeddb;
  text-decoration: none;
  transition: all 0.2s ease;
  margin-bottom: 2rem;

  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .texts {
    margin-right: 10px;
    width: 60%;
  }
  .projImg {
    width: 90%;
  }
  .projImg img {
    width: 100%;
    height: 250px;
    border-radius: 10px;
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.8vw);
  font-weight: 800;
  color: #ffe9ae;
`;
const Desciption = styled.span`
  font-size: calc(0.7em + 0.5vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  color: #999;
`;
const Tag = styled.span`
  margin-right: 1rem;
`;

const Footer = styled.footer`
  display: flex;
`;
const Link = styled(NavLink)`
  padding: 0.2rem 0.6rem;
  color: #ffeddb;
  text-decoration: none;
  font-weight: 700;
  margin-top: 15px;
  margin-right: 30px;

  &:hover {
    background-color: #3d0000;
    color: ${(props) => props.theme.text};
  }
`;

const ProjectWork = (props) => {
  const { id, name, img, description, tags, demo, github } = props.data;
  return (
    <Box key={id} href={demo} target="_blank">
      <div className="details">
        <div className="texts">
          <Title>{name}</Title> <br />
          <Desciption>{description}</Desciption>
          <Tags>
            {tags.map((t, id) => {
              return <Tag key={id}> #{t}</Tag>;
            })}
          </Tags>
          <Footer>
            <Link to={{ pathname: `${github}` }} target="_blank">
              Source Code
            </Link>
          </Footer>
        </div>
        <div className="projImg">
          <img src={img} alt={img}></img>
        </div>
      </div>
    </Box>
  );
};

export default ProjectWork;
