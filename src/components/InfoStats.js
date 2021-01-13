import React from "react";
import { Link } from "react-router-dom";

export const InfoStats = ({
  catName,
  origin,
  description,
  wiki_url,
  cfa_url,
}) => (
  <div className="text--section">
    <h1>
      {catName} <span>({origin})</span>
    </h1>
    <h4>{description}</h4>
    <h4>
      Read More at{" "}
      <Link to={{ pathname: `${wiki_url}` }} target="_blank">
        Wikipedeia
      </Link>{" "}
      or{" "}
      <Link to={{ pathname: `${cfa_url}` }} target="_blank">
        The Cat Fanciers' Association
      </Link>
    </h4>
  </div>
);

export const ProgressBars = ({
  adapt,
  affection,
  friendlyness,
  health_issues,
  rare,
  intelligence,
}) => (
  <div className="progess--bars">
    <div className="progress--child">
      <p>adaptability</p>
      <progress max="10" value={adapt} />
    </div>
    <div className="progress--child">
      <p>affection level</p>
      <progress max="10" value={affection} />
    </div>
    <div className="progress--child">
      <p>stranger friendly</p>
      <progress max="10" value={friendlyness} />
    </div>
    <div className="progress--child">
      <p>health issues</p>
      <progress max="10" value={health_issues} />
    </div>
    <div className="progress--child">
      <p>rarity</p>
      <progress max="10" value={rare} />
    </div>
    <div className="progress--child">
      <p>intelligence</p>
      <progress max="10" value={intelligence} />
    </div>
  </div>
);
