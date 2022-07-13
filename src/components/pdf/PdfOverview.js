import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import classes from "./Pdf.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function PdfOverview() {
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Variable for background
  var sectionStyle = {
    transform: `translateY(${offsetX * 0.15}px)`,
  };
  return (
    <section className={classes.section} style={sectionStyle}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto" className={classes.button}>
            <Link
              to="Resume.pdf"
              target="_blank"
              style={{ textDecoration: "none" }}
              download
              className={classes.text}
            >
              <FontAwesomeIcon
                icon={faFileDownload}
                size="1x"
                className={classes.icon}
              />
              &nbsp;Resume
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
                    Jason Mustafa
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
