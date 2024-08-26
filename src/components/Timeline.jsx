import timeline from "../data/timeline";

export default function Timeline() {
  return (
    <div className="flex h-5/6 justify-center">
      <div className="w-full appearance-none overflow-y-scroll text-pretty bg-black bg-opacity-65 backdrop-blur-sm sm:w-3/4">
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

function TimelineItem({ year, title, duration, details }) {
  return (
    <div className="text-center">
      <h1 className="text-xl font-bold text-darkCream">{year}</h1>
      <h3 className="text-l font-bold">{title}</h3>
      <div>{duration}</div>
      <p>{details}</p>
    </div>
  );
}
