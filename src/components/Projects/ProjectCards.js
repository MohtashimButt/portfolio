import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { AiFillFileText } from "react-icons/ai";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" className="mx-2">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        <Button variant="primary" href={props.pprLink} target="_blank" className="mx-2">
          {props.reportIcon ? <props.reportIcon /> : <AiFillFileText />} &nbsp;
          {props.isBlog ? "Deployed-Site" : "Report"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
