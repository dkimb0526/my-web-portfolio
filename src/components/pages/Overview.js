import selfie from "../images/Presidential.PNG";
import Imclasses from "../images/PresidentialSelfie.module.css";
import Ovclasses from "../modules/Overview.module.css";
import Background from "../background/background";
import SocialIcons from "../icon/SocialIcon";

function Overview() {
  return (
    <div>
      <Background />
      <div className={Imclasses.container}>
        <img className={Imclasses.image} src={selfie} alt="David Kimball" />
        <div className={Imclasses.middle}>
          <div className={Imclasses.text}>Nice to meet you!</div>
        </div>
      </div>
      <div>
        <div className={Ovclasses.container}>
          <div className={Ovclasses.introduction}>
            Hello, I am David and welcome to my website. I'm a Business
            Analytics Major with 2 years of experience. I also have a passion in
            programming and software development.
          </div>
        </div>
        <SocialIcons />
      </div>
    </div>
  );
}

export default Overview;
