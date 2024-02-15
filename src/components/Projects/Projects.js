import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import haqbaat from "../../Assets/Projects/islo.jpg";
import birthday from "../../Assets/Projects/birthday.png";
import petro from "../../Assets/Projects/petro.png";
import house from "../../Assets/Projects/house.jpg";
import raftaar from "../../Assets/Projects/raftaar.png";
import meme from "../../Assets/Projects/meme.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent <strong className="teal">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={haqbaat}
              isBlog={false}
              title="Sustainable Urban Development via Computer Vision"
              description="I have fine-tuned ultralytics Yolov8 model (which is a deep CNN-based architecture) for instance segmentation of greenspaces across Islamabad using f-7 sector's satellite imagery to study the effects of urban deforestation and develop sustainable urban development strategies. I prepared my own dataset via earth engine which can be found on Roboflow (click on the button below for more details)."
              ghLink="https://github.com/MohtashimButt/Islamabad-GreenSpaces"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petro}
              isBlog={false}
              title="Digital Heritage Conservation"
              description="To preserve the ancient petroglyphs digitally, I developed a deep learning model for semantic segmentation of carvings on pre-historic rocks. The model takes a large rock image as input and segments all the carving out of it, saving the binary masks along with the cropped images of each carving."
              ghLink="https://github.com/MohtashimButt/Petroglyphs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="House Price Prediction Using Real Estate Data"
              description="A machine learning project that predicts house prices using linear regression with L2 regularization. The model was trained using a dataset of house features, and evaluated using R2, MSE, RMSE, and MAE metrics.  Built using Flask, and Python."
              ghLink="https://github.com/saleha-muzammil/House-Price-Prediction-Using-Real-Estate-Data"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={birthday}
              isBlog={false}
              title="Auto Birthday Wisher Bot"
              description="The Automated WhatsApp Birthday Wishes project is a Python script that uses the Selenium WebDriver to automate the process of sending birthday wishes to your friends and family on WhatsApp."
              ghLink="https://github.com/saleha-muzammil/auto-birthday-wisher-whatsapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={raftaar}
              isBlog={false}
              title="Raftaar"
              description="(Upcoming)"
              ghLink="https://github.com/saleha-muzammil/Raftaar"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meme}
              isBlog={false}
              title="Meme Sensei"
              description="(Upcoming)"
              ghLink="https://github.com/saleha-muzammil/Raftaar"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
