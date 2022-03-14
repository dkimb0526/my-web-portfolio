//import classes from "./WorkExperience.module.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./WorkExpmodule.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import WorkExpTimeline from "./WorkExpTimeline";

function WorkExperience() {
  return (
    <Container>
      <Row>
        <Col>
          <WorkExpTimeline />
        </Col>
      </Row>
    </Container>
  );
}

export default WorkExperience;
