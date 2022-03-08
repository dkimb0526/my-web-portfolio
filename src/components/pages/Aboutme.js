import selfie from "../images/Presidential.PNG";
import classes from "../images/PresidentialSelfie.module.css";

function Aboutme() {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={selfie} alt="David Kimball" />
      <div className={classes.middle}>
        <div className={classes.text}>Nice to meet you!</div>
      </div>
    </div>
  );
}

export default Aboutme;
