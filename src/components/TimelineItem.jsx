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

export default TimelineItem;
