import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import TextAnimation from "./TextAnimation";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <TextAnimation />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/my-web-portfolio">Overview</Link>
          </li>
          <li>
            <Link to="/chatbot-april">Chatbot April</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
