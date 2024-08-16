import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div>
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
