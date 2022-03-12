import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import classes from "./FontAwesome.module.css";

function ProLangIcon() {
  return (
    <div>
      <div>
        <FontAwesomeIcon
          icon={faLaptopCode}
          size="3x"
          className={classes.prolang}
        />
      </div>
    </div>
  );
}

export default ProLangIcon;
