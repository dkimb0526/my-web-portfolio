import classes from "./ChatbotInterface.module.css";
import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBots } from "@fortawesome/free-brands-svg-icons";

function ChatbotInterface() {
  const [BotResponse, setBotResponse] = useState("Hello");
  const [InputMessage, setInputMessage] = useState(0);
  const [Request, setRequest] = useState(0);

  //saving input data into variable
  function getData(event) {
    setInputMessage(event.target.value);
  }
  //down arrow key
  function keyPress(event) {
    if (event.keyCode === 13) {
      setRequest(event.target.value);
    }
  }
  //can also look into addEventListener
  useEffect(() => {
    fetch(`http://127.0.0.1:5000/chatbot/${Request}`)
      .then((res) => res.json())
      .then((data) => {
        setBotResponse(data); //set BotResponse values
      });
  }, [Request]); //renders everytime Request changes

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Row className="justify-content-md-center">
              <Col md="auto" className={classes.container}>
                <FontAwesomeIcon
                  icon={faBots}
                  size="4x"
                  className={classes.icon}
                />
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col md="auto" className={classes.name}>
                April:
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={classes.response}>
                  <p className="text-wrap">{BotResponse}</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className={classes.container_2}>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <input type="text" onKeyDown={keyPress} onChange={getData}></input>
          </Col>
          <Col md="auto">
            <button
              className={classes.submit}
              onClick={() => setRequest(InputMessage)}
            >
              submit
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ChatbotInterface;
