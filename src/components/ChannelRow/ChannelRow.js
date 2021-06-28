import React from "react";
import "./ChannelRow.css";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";

function ChannelRow({
  image,
  channel,
  subs,
  noOfVideos,
  description,
  verified,
}) {
  return (
    <div className="channel-row">
      <Avatar className="logo" alt={channel} src={image} />
      <div className="text">
        <h4>
          {channel} {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos{" "}
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
