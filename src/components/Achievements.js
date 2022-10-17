import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "../assets/Images/tasks.png";
import { motion } from "framer-motion";
import AchiveText from "../subComponents/Achieve-Text";
import PowerButton from "../subComponents/PowerButton";
import { Achievement } from "../data/AchievementsData";
import AchieveCompo from "../subComponents/AchieveCompo";
import AnchorComponent from "../subComponents/Anchor";

const MainContainer = styled.div`
  width: 100vw;
  background-color: rgb(255, 237, 219);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.div`
  background-image: linear-gradient(120deg, #1c0a00 50%, #ffeddb 50%);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SubBox = styled.div`
  width: 70%;

  position: relative;
  display: flex;
  .pic {
    position: absolute;
    top: -8rem;
    left: 90%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: auto;
    opacity: 0.8;
  }
`;

const Center = styled.div`
  margin: 3rem 10rem;
  width: 80%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const Achievements = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 20) / 30;
    setNumbers(parseInt(num));
  });

  return (
    <MainContainer>
      <Banner>
        <SubBox>
          <PowerButton />
          <AchiveText />
        </SubBox>
        <SubBox>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          >
            <img className="pic" src={Profile}></img>
          </motion.div>
        </SubBox>
      </Banner>

      <AnchorComponent number={numbers} />
      <Center>
        <Grid>
          {Achievement.map((props) => {
            return <AchieveCompo key={props.id} achive={props} />;
          })}
        </Grid>
      </Center>
    </MainContainer>
  );
};

export default Achievements;
