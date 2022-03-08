import { SocialIcon } from "react-social-icons";
import Sociclasses from "./SocialIcon.module.css";

function SocialIcons() {
  return (
    <div className={Sociclasses.center}>
      <SocialIcon
        url="https://www.linkedin.com/in/davidxingkimball/"
        target="_blank"
        bgColor="#ec9688"
        fgColor="#ffffff"
        style={{ height: 35, width: 35 }}
      />
      &nbsp; &nbsp;
      <SocialIcon
        url="https://github.com/dkimb0526/personal-projects"
        target="_blank"
        bgColor="#ec9688"
        fgColor="#ffffff"
        style={{ height: 35, width: 35 }}
      />
    </div>
  );
}

export default SocialIcons;
