import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import classes from "./FontAwesome.module.css";

function SoftwareIcon() {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faRobot} size="3x" className={classes.icons} />
      </div>
    </div>
  );
}

export default SoftwareIcon;
