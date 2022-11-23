import React from "react";
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ props.image } />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
  export default ProjectCard;