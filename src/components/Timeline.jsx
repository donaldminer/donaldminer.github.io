import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="col-span-9 row-span-10 bg-black bg-opacity-65">
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
