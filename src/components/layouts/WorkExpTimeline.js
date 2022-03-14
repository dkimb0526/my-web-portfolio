import WorkExpData from "./WorkExpData";
import WorkExpTimelineItem from "./WorkExpTimelineItem";

const WorkExpTimeline = () =>
  WorkExpData.length > 0 && (
    <div className="timeline-container">
      {WorkExpData.map((data, idx) => (
        <WorkExpTimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default WorkExpTimeline;
