import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import haqbaat from "../../Assets/Projects/islo.jpg"; //Islamabad project
import birthday from "../../Assets/Projects/birthday.png";
import petro from "../../Assets/Projects/petro.png";  //Petroglyohs project
import house from "../../Assets/Projects/house.png";  //SBERT (ML) project
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
              description="I have fine-tuned ultralytics Yolov8 model (which is a deep CNN-based architecture) for instance segmentation of greenspaces across (Treecover, GrassLand, ShrubLand, and CropLand) Islamabad using f-7 sector's satellite imagery to study the effects of urban deforestation and develop sustainable urban development strategies. I prepared my own dataset via earth engine and merging the greenspace polygons from GIS platforms using Python scripting. For post-processing, the dataset images were also overlayed NDVI masks. I made four different models which were tested separately and compared at the end based upon the pixel-wise errors, DICE Losses, and IoU Scores."
              ghLink="https://github.com/MohtashimButt/Islamabad-GreenSpaces"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petro}
              isBlog={false}
              title="Digital Heritage Conservation"
              description="To preserve the ancient petroglyphs digitally, I developed a deep learning model for semantic segmentation of carvings on pre-historic rocks. The dataset is collected by the lab team via phyical visits to the Chillas district in the North. I prepared the dataset by cropping each carving from the rock, annotating it via Labelme, pre-processing it by adding a contrast adjustment layer in the architecture, and augmenting it to get a large pool. The model I am developing will take a large rock image as input and segment all the carving out of it, saving the binary masks along with the cropped images of each carving."
              ghLink="https://github.com/MohtashimButt/Petroglyphs"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house}
              isBlog={false}
              title="Fine-Tuned SBERT for Text-Similarity and Sentimal Analysis"
              description="I fine-tuned Sentence Transformer (SBERT) architecture for encoding textual prompts. The dataset employed for the text similarity detection task comprised pairs of questions from Quora. The approach involved generating raw embeddings through SBERT for each prompt pair, followed by computing cosine similarity between them. Moreover, I adapted the architecture of distiluse-base-multilingual-cased-v1, incorporating a dropout layer preceding the fully-connected dense layer. The model underwent training for 600 epochs, with a learning rate of 0.002, and was evaluated based on cross-entropy loss."
              ghLink="https://github.com/MohtashimButt/FineTunedSBERT"
            />
          </Col>

          {/* <Col md={4} className="project-card">
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
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
