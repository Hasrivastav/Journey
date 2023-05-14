import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            des={item.description}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index, des }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <p>{text}</p>
      <h3 style={{ color: "#FCF6F5" }}>{heading}</h3>
      <p>{des}</p>
    </div>
  </div>
);

export default Timeline;
