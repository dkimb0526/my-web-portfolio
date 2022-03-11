import Sociclasses from "./SocialIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function FontAwesome() {
  return (
    <div className={Sociclasses.center}>
      <a href="https://github.com/dkimb0526" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faGithub}
          size="4x"
          className={Sociclasses.icons}
        />
      </a>
      &nbsp; &nbsp;
      <a
        href="https://www.linkedin.com/in/davidxingkimball/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          icon={faLinkedin}
          size="4x"
          className={Sociclasses.icons}
        />
      </a>
    </div>
  );
}

export default FontAwesome;
