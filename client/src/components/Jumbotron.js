import React from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import { NavLink } from "react-router-dom";

const Jumbotron = props => {
  return (
    <div className={`
    jumbotron
    ${props.fluid ? "jumbotron-fluid" : ""}
    bg-${props.bg || "default"}
    text-${props.color || "dark"}
    text-center 
    `}>
      <Container>
        <Row helper={"justify-content-around"}>
          <Col>
            <h1>{props.pageTitle}</h1>
          </Col>
        </Row>
        <Row helper={"justify-content-around"}>
          <Col md={6}>
            <NavLink to='/' className="btn btn-info btn-large">Search</NavLink>
          </Col>
          <Col md={6}>
            <NavLink to='/saved' className="btn btn-info btn-large">Saved</NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;