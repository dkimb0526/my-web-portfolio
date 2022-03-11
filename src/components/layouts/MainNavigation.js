import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import TextAnimation from "./TextAnimation";

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function MainNavigation() {
  return (
    <div className={classes.header}>
      <Container className={classes.topbuffer}>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <div className={classes.bg}>
              <Link to="/my-web-portfolio">Overview</Link>
            </div>
          </Col>
          <Col md="auto">
            <div className={classes.bg}>
              <Link to="/chatbot-april">Chatbot April</Link>
            </div>
          </Col>
        </Row>
        <div className={classes.topbuffer}>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <div className={classes.bg}>
                <TextAnimation />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default MainNavigation;
