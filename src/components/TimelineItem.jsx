function TimelineItem({ year, title, duration, details }) {
  return (
    <ol>
      <li>
        <div>
          <p>
            <span>{year}</span>
            <h3>{title}</h3>
            <div>{duration}</div>
          </p>
          <p>{details}</p>
        </div>
      </li>
    </ol>
  );
}

export default TimelineItem;
