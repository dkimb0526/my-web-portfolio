import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
//import TextAnimation from "./TextAnimation";

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function MainNavigation() {
  return (
    <div className={classes.header}>
      <Container className={classes.topbuffer}>
        <Row className="d-flex justify-content-around">
          <Col md="auto">
            <div className={classes.bg}>
              <Link to="/">Overview</Link>
            </div>
          </Col>
          <Col md="auto">
            <div className={classes.bg}>
              <Link to="/chatbot">Chatbot</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainNavigation;

/*Main Navi is used in Layouts.js */
