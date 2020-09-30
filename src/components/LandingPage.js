import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Jumbotron, Row, Button } from "react-bootstrap";
import video from "../assets/running.mp4";

function LandingPage() {
  return (
    <div>
      <Jumbotron fluid>
        <h1>Commerce St Gym</h1>
        <p>24/7/365</p>
      </Jumbotron>
      <video
        autoPlay="autoplay"
        muted
        loop
        style={{
          width: "80%",
          height: "auto",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      <div>
        <h3>
          no pressure, <br /> no frills, <br /> personalized atmosphere
        </h3>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/Home">
          <Button
            variant="danger"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "40%",
            }}
          >
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
