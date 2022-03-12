import classes from "./WorkExperience.module.css";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Row from "react-bootstrap/Row";
//import Container from "react-bootstrap/Container";
//import Col from "react-bootstrap/Col";

function WorkExperience() {
  return (
    <div className={classes.timeline}>
      <div className={classes.timeline__component}>
        <div className={classes.timeline__date}>
          Dec 2020 - present: Personal/Coding Projects @home
        </div>
      </div>
      <div className={classes.timeline__middle}>
        <div className={classes.timeline__point}></div>
      </div>
      <div></div>
      <div></div>
      <div className={classes.timeline__middle}>
        <div className={classes.timeline__point}></div>
      </div>
      <div className={classes.timeline__component}>
        <div className={classes.timeline__date}>
          Feb 2019 - Nov 2020: Business Intelligence consultant @SDG Group
        </div>
      </div>
      <div className={classes.timeline__component}>
        <div className={classes.timeline__date}>
          Sep 2018 - May 2019: President of Analytics Club @ Montclair State
          University
        </div>
      </div>
      <div className={classes.timeline__middle}>
        <div className={classes.timeline__point}></div>
      </div>
      <div></div>
      <div></div>
      <div className={classes.timeline__middle}>
        <div className={classes.timeline__point}></div>
        <div className={classes.timeline__bottom}></div>
      </div>
      <div className={classes.timeline__component}>
        <div className={classes.timeline__date}>
          June 2018 - Aug 2018: Sales Analyst Intern @ Nestle NA
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
