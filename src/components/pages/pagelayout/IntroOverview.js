import selfie from "../../images/Presidential.PNG";
import Imclasses from "../../images/PresidentialSelfie.module.css";
import Introclasses from "./Introduction.module.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import FontAwesome from "../../icon/FontAwesome";
import { useEffect, useState } from "react";

function OverviewIntro() {
  const [offsetX, setOffsetX] = useState(0);
  const handleScroll = () => setOffsetX(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Variable for section
  var sectionStyle = {
    transform: `translateY(${offsetX * -0.3}px)`,
  };
  return (
    <section style={sectionStyle}>
      <div className={Introclasses.height}>
        <div className="container-xxl">
          <div className={Imclasses.container}>
            <img className={Imclasses.image} src={selfie} alt="David Kimball" />
            <div className={Imclasses.middle}>
              <div className={Imclasses.text}>Nice to meet you!</div>
            </div>
          </div>
        </div>
        <div>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <div className={Introclasses.introtext}>
                  Hi, I am David and welcome to my website. I'm a Business
                  Analytics Major with 4 years of experience. I also have a
                  passion in programming and software development.
                </div>
              </Col>
            </Row>
          </Container>
          <div>
            <FontAwesome />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverviewIntro;

//<section style={sectionStyle}>
