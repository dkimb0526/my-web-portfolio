import Background from "../background/background";
import OverviewResume from "./pagelayout/OverviewResume";
import OverviewIntro from "./pagelayout/OverviewIntro";

function Overview() {
  return (
    <div>
      <Background />
      <OverviewIntro />
      <OverviewResume />
    </div>
  );
}

export default Overview;
