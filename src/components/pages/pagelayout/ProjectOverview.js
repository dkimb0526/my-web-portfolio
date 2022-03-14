import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import classes from "./Project.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faReddit,
  faChrome,
} from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const ProjectData = [
  {
    title: "Reddit Web scrape Project",
    text: `Scrapped top 50 posts from the subreddit of "Anti-work" to analyze factors that drive people away their jobs.`,
    id: "1",
    softwares: "Panda, Python, NLTK",
    icon: faReddit,
    github: faGithub,
    link: "https://github.com/dkimb0526/python-projects",
  },
  {
    title: "Personal Website",
    text: `Portfolio made using React, CSS, HTML, and Bootstrap framework to showcase my front-end development skills.`,
    softwares: "React, CSS, HTML, Bootstrap",
    id: "2",
    icon: faChrome,
    github: faGithub,
    link: "https://github.com/dkimb0526/my-web-portfolio",
  },
  {
    title: "Chatbot",
    text: `Personal project of building a chatbot to showcase my back-end capability.`,
    softwares: "Python, NLTK, Tensorflow",
    icon: faComments,
    id: "3",
    github: faGithub,
    link: "",
  },
];

function OverviewProject() {
  return (
    <section className={classes.height}>
      <Container fluid>
        <Row>
          <Col>
            <Row>
              {ProjectData.map((data) => (
                <Col key={data.id} className={classes.col}>
                  <Row className="justify-content-md-end">
                    <Col>
                      <FontAwesomeIcon
                        icon={data.icon}
                        size="3x"
                        className={classes.icons}
                      />
                    </Col>
                    <Col md="auto">
                      <a href={data.link} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon
                          icon={data.github}
                          size="2x"
                          className={classes.github}
                        />
                      </a>
                    </Col>
                  </Row>
                  <Row className={classes.title}>{data.title}</Row>
                  <Row>
                    <Col className={classes.softwares}>{data.softwares}</Col>
                  </Row>
                  <Row className={classes.text}>{data.text}</Row>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OverviewProject;
