import React from "react";
import Col from "../components/Col"
import Container from "../components/Container"
import Row from "../components/Row"
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
