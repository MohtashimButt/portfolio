import React from "react";
import Card from "react-bootstrap/Card";
import { FaCaretRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am based in{" "}
            <a
              href="https://www.google.com/maps?q=Lahore,Pakistan"
              target="_blank"
              rel="noopener noreferrer"
              className="teal-link"
            >
              Lahore, Pakistan
            </a>
            .
            <br /> I am a Senior Year student, pursuing a Bachelor's in Computer
            Science from{" "}
            <a
              href="https://www.lums.edu.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="teal-link"
            >
              LUMS School of Science and Engineering
            </a>
            . My research interests are centered around using Machine Learning
            with remote sensing data for biodiversity conservation and
            sustainable urban development. I am also passionate about making
            human-centered vision and language models for cross-lingual,
            unprejudiced, trustworthy, and interpretable interaction between
            humans and machines. My long-term goal is to architect machine
            learning models that process vision, language, and speech data for a
            healthy human-robot collboration and make machine learning models
            more probabilistic and generative.
            <br />
            <br />
            Moreover, I am also interested in <b>product designing</b> and
            strategy building. I have experience in conducting extensive user
            research via structured/semi-structured detailed interviews. I also
            have strong expertise in qualitative coding and thematic analysis of
            the user research data and then brainstorming the potential desgins
            for the product solution. Besides delving into detailed research for
            enhanced user experience, I am also experienced in building
            interactive UIs. I have command over several frontend frameworks
            (via React with Tailwind CSS, and Bootstrap).
            <br />
            <br /> Other than academics, I am also an{" "}
            <a
              href="https://www.instagram.com/drawliterallyme"
              target="_blank"
              rel="noopener noreferrer"
              className="teal-link"
            >
              artist
            </a>{" "}
            with a love for photography and cooking.
            <br />
            <br />
          </p>

          <h2 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            What am I <strong className="teal">working</strong> on ?
          </h2>
          <ul style={{ listStyleType: "disc", paddingLeft: 30 }}>
            <li className="about-activity">
              <FaCaretRight className="bullet-icon" />{" "}
              <strong className="teal"> Bachelor's Thesis: </strong> Developing
              a geographically transferable DL model for urban greenspace
              segmentation in input satellite imagery.
            </li>
            <li className="about-activity">
              <FaCaretRight className="bullet-icon" />
              <strong className="teal">
                {" "}
                Directed Research Project:{" "}
              </strong>{" "}
              Architecturing a deep neural network for semantic segmentation of
              ancient petroglyphs' carving along with the development of a
              vision tranformer model for the prompt explanation.{"\n\n"}
            </li>
            <p style={{paddingTop: "20px" }}>
            For more detials, visit my {" "}
            <a
              href="https://mohtashimbutt.github.io/portfolio/#/project"
              target="_blank"
              rel="noopener noreferrer"
              className="teal-link"
            >
               Projects 
            </a>
            {" "}section.
            </p>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
