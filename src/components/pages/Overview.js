import selfie from "../images/Presidential.PNG";
import Imclasses from "../images/PresidentialSelfie.module.css";
import Ovclasses from "../modules/Overview.module.css";
import Background from "../background/background";
import SocialIcons from "../icon/SocialIcon";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Overview() {
  return (
    <div>
      <Background />
      <div className={Imclasses.container}>
        <img className={Imclasses.image} src={selfie} alt="David Kimball" />
        <div className={Imclasses.middle}>
          <div className={Imclasses.text}>Nice to meet you!</div>
        </div>
      </div>
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <div className={Ovclasses.introtext}>
                Hello, I am David and welcome to my website. I'm a Business
                Analytics Major with 2 years of experience. I also have a
                passion in programming and software development.
              </div>
            </Col>
          </Row>
        </Container>
        <SocialIcons />
      </div>
    </div>
  );
}

export default Overview;
