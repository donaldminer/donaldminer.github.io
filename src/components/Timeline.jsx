import timeline from "../data/timeline";

export default function Timeline() {
  return (
    <div className="flex h-full justify-center">
      <div className="w-full appearance-none overflow-y-scroll text-pretty bg-black bg-opacity-75 backdrop-blur-sm">
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
    <div className="px-4 py-4 text-left font-bold">
      <h1 className="text-xl text-darkCream">{year}</h1>
      <h3 className="text-lg text-lightCream">{title}</h3>
      <div className="text-md font-semibold text-lightCream">{duration}</div>
      <p className="font-normal">{details}</p>
    </div>
  );
}
