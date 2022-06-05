import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const TeamCard = ({ name, description, img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} style = {{ width: "18rem", height: 300}}/>
      <Card.Body>
        <Card.Title className="text-center">{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default TeamCard;
