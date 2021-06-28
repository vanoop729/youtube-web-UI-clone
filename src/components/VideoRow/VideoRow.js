import React from "react";
import "./VideoRow.css";

function VideoRow({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="video-row">
      <img src={image} alt="" />
      <div className="text">
        <h3>{title}</h3>
        <p className="headline">
          {channel} •{" "}
          <span className="subs">
            <span className="subs-number">{subs}</span> subscribers
          </span>{" "}
          {views} views • {timestamp}
        </p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;
