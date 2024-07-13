import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "AI Job Matching on LinkedIn",
        "New feature to improve job recommendations."
      )}
      {newsArticle(
        "Tech Giants Hiring on LinkedIn",
        "Google and Amazon post record job openings."
      )}
      {newsArticle(
        "New LinkedIn Learning Platform",
        "Personalized course recommendations now available."
      )}
      {newsArticle(
        "LinkedIn Networking Tools",
        "Introduces virtual meetups and collaboration features."
      )}
      {newsArticle(
        "Tech Engagement Surge on LinkedIn",
        "More professionals joining and participating in discussions."
      )}
    </div>
  );
}

export default Widgets;
