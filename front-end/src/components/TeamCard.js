import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "../styles.module.css";

const socialLink = () => {
  console.log("poggers");
};

const TeamCard = ({ name, link, img }) => {
  return (
    <a href={link} className={styles.cardLink}>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ width: "18rem", height: 300 }}
        />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
        </Card.Body>
      </Card>
    </a>
  );
};

export default TeamCard;
