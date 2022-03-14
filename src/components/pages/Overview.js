import Background from "../background/background";
import ResumeOverview from "./pagelayout/ResumeOverview";
import IntroOverview from "./pagelayout/IntroOverview";
import ProjectOverview from "./pagelayout/ProjectOverview";
import PdfOverview from "../pdf/PdfOverview";

function Overview() {
  return (
    <div>
      <Background />
      <IntroOverview />
      <ResumeOverview />
      <ProjectOverview />
      <PdfOverview />
    </div>
  );
}

export default Overview;
