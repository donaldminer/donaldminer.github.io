function TimelineItem({ year, title, duration, details }) {
  return (
    <div>
      <span>{year}</span>
      <h3>{title}</h3>
      <div>{duration}</div>
      <p>{details}</p>
    </div>
  );
}

export default TimelineItem;
