import React from "react";
import styled from "styled-components";
import "../subComponents/styles/achievecompo.css"

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 2px solid transparent;
  background-position: center center;
`;

const Title = styled.h3`
  display: block;
  padding: 0%, 5rem 0;
  color: ${ props => props.theme.text};
  padding-top: 1rem;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  border-bottom: 1px solid ${ props => props.theme.text};
`;


const Detail = styled.span`
  font-size: 1.1rem;
`;

const HashTags = styled.div`
  padding: 0%, 5rem 0;

`

const Tag = styled.span`
  padding-right: 0.5rem;
  margin-right: 0.5rem;

  
`
const AchieveCompo = (props) => {
  const { name, desp, tags, date, imgSrc } = props.achive;
  return (
  
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <Image img={imgSrc} />
            <Title>{name}</Title>
            <HashTags>
            {
              tags.map((t,id) => {
                return <Tag key={id}> #{t}</Tag>
              })
            }
          </HashTags>
          </div>
          <div class="flip-card-back">
          <Detail>{desp}</Detail>
                        
          </div>
        </div>
      </div>
   
  );
};

export default AchieveCompo;
