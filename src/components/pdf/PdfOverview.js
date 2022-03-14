import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import classes from "./Pdf.module.css";

function PdfOverview() {
  return (
    <section className={classes.section}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" className={classes.button}>
            <Link
              to="Resume.pdf"
              target="_blank"
              download
              className={classes.text}
            >
              Resume
            </Link>
          </Col>
        </Row>
        <Row className={classes.row_section}>
          <Col>
            <Row className="justify-content-md-center">
              <Col md="auto" className={classes.bg}>
                <Row className="justify-content-md-center">
                  <Col className={classes.design_text} md="auto">
                    Designers:
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col className={classes.design_text} md="auto">
                    <a
                      className={classes.jasonlink}
                      href="https://www.jasonmustafa.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Jason Mustafa
                    </a>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col className={classes.design_text} md="auto">
                    David Kimball
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default PdfOverview;
