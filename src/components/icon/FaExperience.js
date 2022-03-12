import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import classes from "./FontAwesome.module.css";

function ExperienceIcon() {
  return (
    <div>
      <div>
        <FontAwesomeIcon
          icon={faDatabase}
          size="3x"
          className={classes.icons}
        />
      </div>
    </div>
  );
}

export default ExperienceIcon;
