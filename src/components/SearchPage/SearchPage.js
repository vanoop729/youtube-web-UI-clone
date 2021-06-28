import React from "react";
import "./SearchPage.css";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import user_img from "../../assets/anoop.jpeg";

function SearchPage() {
  return (
    <div className="search-page">
      <div className="filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image={user_img}
        channel="Anoop's Channel"
        verified
        subs="659K"
        noOfVideos={382}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <hr />

      <VideoRow
        views="4.4M"
        subs="1M"
        description="lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        timestamp="5 months ago"
        channel="Technical Guruji"
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
      />
      <VideoRow
        views="14K"
        subs="79K"
        description="lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        timestamp="9 months ago"
        channel="Web Dev Simplified"
        title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6sGlg7_OLUJZt0TToHw7ROmAbMA"
      />

      <VideoRow
        views="7.1M"
        subs="3.2M"
        description="lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        timestamp="2 years ago"
        channel="Philip Lackner"
        title="🔴 Full Stack React and Firebase Tutorial - Build a Facebook Messenger Clone"
        image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALxLB6sGhlmjdjyUIGSIjaetlf4g"
      />

      <VideoRow
        views="4.4M"
        subs="1M"
        description="lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        timestamp="5 months ago"
        channel="Technical Guruji"
        title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBuov-I_MvZg_RR-beB3Q9gNGM0pQ"
      />
      <VideoRow
        views="14K"
        subs="79K"
        description="lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        timestamp="9 months ago"
        channel="Web Dev Simplified"
        title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD6sGlg7_OLUJZt0TToHw7ROmAbMA"
      />

      <VideoRow
        views="7.1M"
        subs="3.2M"
        description="lorem ipsum In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
        timestamp="2 years ago"
        channel="Philip Lackner"
        title="🔴 Full Stack React and Firebase Tutorial - Build a Facebook Messenger Clone"
        image="https://i.ytimg.com/vi/KB7JEnfc7Dc/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALxLB6sGhlmjdjyUIGSIjaetlf4g"
      />
    </div>
  );
}

export default SearchPage;
