import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Resuclasses from "./Resume.module.css";

import FaProLangIcon from "../../icon/FaProLang";
import FaSoftwareIcon from "../../icon/FaSoftware";
import FaExperienceIcon from "../../icon/FaExperience";
import WorkExperience from "../../layouts/WorkExperience";

import { useEffect, useState } from "react";

function ResumeOverview() {
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Variable for background
  var sectionStyle = {
    transform: `translateY(${offsetX * -0.2}px)`,
  };

  return (
    <section className={Resuclasses.height}>
      <div className={Resuclasses.parallax} style={sectionStyle}>
        <Container fluid>
          <Row>
            <Col>
              <div className={Resuclasses.word}>
                <Container>
                  <Row className="justify-content-md-center">
                    <Col md="auto" className={Resuclasses.box}>
                      <Row className={Resuclasses.top_padding}>
                        <FaProLangIcon />
                      </Row>
                      <br />
                      <Row>
                        <p className="text-center">Programming Language:</p>
                      </Row>
                      <Row>
                        <p className="text-center">Python</p>
                      </Row>
                      <Row>
                        <p className="text-center">React</p>
                      </Row>
                      <Row>
                        <p className="text-center">SQL</p>
                      </Row>
                      <Row>
                        <p className="text-center">HTML</p>
                      </Row>
                      <Row>
                        <p className="text-center">CSS</p>
                      </Row>
                      <Row>
                        <p className="text-center">JavaScript</p>
                      </Row>
                      <Row>
                        <p className="text-center">PowerShell/Bash</p>
                      </Row>
                      <Row>
                        <p className="text-center">C#</p>
                      </Row>
                      <Row>
                        <p className="text-center">Java</p>
                      </Row>
                      <Row>
                        <p className="text-center">PHP</p>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col className={Resuclasses.box}>
              <div className={Resuclasses.word}>
                <Row className={Resuclasses.top_padding}>
                  <FaExperienceIcon />
                </Row>
                <br />
                <Container>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Row>
                        <Col>Experience:</Col>
                      </Row>
                      <Row>
                        <WorkExperience />
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col>
              <div className={Resuclasses.word}>
                <Container>
                  <Row className="justify-content-md-center">
                    <Col md="auto" className={Resuclasses.box}>
                      <Row className={Resuclasses.top_padding}>
                        <FaSoftwareIcon />
                      </Row>
                      <br />
                      <Row>
                        <p className="text-center">Software:</p>
                      </Row>
                      <Row>
                        <p className="text-center">Bootstrap</p>
                      </Row>
                      <Row>
                        <p className="text-center">Git</p>
                      </Row>
                      <Row>
                        <p className="text-center">Visual Studio</p>
                      </Row>
                      <Row>
                        <p className="text-center">Sublime</p>
                      </Row>
                      <Row>
                        <p className="text-center">Node.js</p>
                      </Row>
                      <Row>
                        <p className="text-center">Qlik Sense</p>
                      </Row>
                      <Row>
                        <p className="text-center">Tableau</p>
                      </Row>
                      <Row>
                        <p className="text-center">NLTK</p>
                      </Row>
                      <Row>
                        <p className="text-center">Tensorflow</p>
                      </Row>
                      <Row>
                        <p className="text-center">Selenium</p>
                      </Row>
                      <Row>
                        <p className="text-center">Docker</p>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default ResumeOverview;
