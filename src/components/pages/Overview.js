//import ParallaxBackground from "../background/ParallaxBackground";
import ResumeOverview from "./pagelayout/ResumeOverview";
import IntroOverview from "./pagelayout/IntroOverview";
import ProjectOverview from "./pagelayout/ProjectOverview";
import PdfOverview from "../pdf/PdfOverview";
import IntroParallax from "../background/IntroParallax";
import ResumeParallax from "../background/ResumeParallax";
import classes from "./OverView.module.css";

function Overview() {
  return (
    <div className={classes.BG}>
      <IntroParallax />
      <IntroOverview />
      <ResumeParallax />
      <ResumeOverview />
      <ProjectOverview />
      <PdfOverview />
    </div>
  );
}

export default Overview;

//<div className={classes.outer}> <div className={classes.BG}>
