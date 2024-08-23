import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="flex-1 flex-row bg-black bg-opacity-65 backdrop-blur-sm">
      {timeline.map((item) => (
        <TimelineItem
          key={item.title}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
}
