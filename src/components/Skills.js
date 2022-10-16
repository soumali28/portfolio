import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../components/Themes";
import { Card, Row, Col} from "react-bootstrap";
import LogoComponent from "../subComponents/LogoComponent";
import Socials from "../subComponents/Socials";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .skillscard {
    width: 100%;
    padding: 20px 50px 50px;
    margin: 140px 100px 60px;
    text-align: center;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .skillscard .title {
    margin-bottom: 30px;
    font-size: 37px;
    color: #333;
  }
  .skillscard .skills {
    text-align: left;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
  }

  .skillscard .skillcardbody h3 {
    font-weight: 600;
    color: #333;
  }
  .skillscard img {
    width: 50px;
    height: 40px;
    margin-right: 10px;
  }
  @media(max-width: 500px){
    .skillscard{
      margin: 140px 20px 100px;
      padding: 20px;
    }
  }
`;


const Skills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MainContainer>
        <LogoComponent />
        <PowerButton />
        <Socials />

        <ParticleComponent theme="light" />
        <Card className="skillscard">
          <h3 className="title">Languages and Tools</h3>
          {/* skills */}
          <Row>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/java/java-icon.svg"
                    alt="Java"
                  />
                  <h3>Java</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    alt="htmllogo"
                  />
                  <h3>HTML 5</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>


          <Row>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
                    alt="Css"
                  />
                  <h3>CSS 3</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667"
                    alt="JavaScript"
                  />
                  <h3>JavaScript</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
                    alt="Bootstrap"
                  />
                  <h3>Bootstrap</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                    alt="Tailwind CSS"
                  />
                  <h3>Tailwind CSS</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          
          <Row>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                    alt="ReactJS"
                  />
                  <h3>ReactJS</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg"
                    alt="Laravel"
                  />
                  <h3>Laravel</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                    alt="Node.js"
                  />
                  <h3>Node.js</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                    alt="express.js"
                  />
                  <h3>Express.js</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/mysql/mysql-official.svg"
                    alt="MySQL"
                  />
                  <h3>MySQL</h3>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6" className="mb-3">
              <Card className="skills">
                <Card.Body>
                  <img
                    src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                    alt="MongoDB"
                  />
                  <h3>MongoDB</h3>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card>
      </MainContainer>
    </ThemeProvider>
  );
};

export default Skills;
