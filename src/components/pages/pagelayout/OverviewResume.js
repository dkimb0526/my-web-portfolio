import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Resuclasses from "./Resume.module.css";

import FaProLangIcon from "../../icon/FaProLang";
import FaSoftwareIcon from "../../icon/FaSoftware";
import FaExperienceIcon from "../../icon/FaExperience";
import WorkExperience from "../../layouts/WorkExperience";

function ovResume() {
  return (
    <section className={Resuclasses.height}>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <div className={Resuclasses.word}>
                <Container>
                  <Row className="justify-content-md-center">
                    <Col md="auto" className={Resuclasses.box}>
                      <Row>
                        <FaProLangIcon />
                      </Row>
                      <br />
                      <Row>
                        <p className="text-center">Programming Languages</p>
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
                        <p className="text-center">PowerShell</p>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col className={Resuclasses.box}>
              <div className={Resuclasses.word}>
                <Row>
                  <FaExperienceIcon />
                </Row>
                <br />
                <Container>
                  <Row className="justify-content-md-center">
                    <Col md="auto">
                      <Row>
                        <Col>Experience</Col>
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
                      <Row>
                        <FaSoftwareIcon />
                      </Row>
                      <br />
                      <Row>
                        <p className="text-center">Software</p>
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

export default ovResume;
