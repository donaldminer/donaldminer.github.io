import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="flex h-5/6 justify-center">
      <div className="w-3/4 appearance-none overflow-y-scroll text-pretty bg-black bg-opacity-65 backdrop-blur-sm">
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
    </div>
  );
}
