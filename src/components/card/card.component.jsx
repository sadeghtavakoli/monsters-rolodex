import React from "react";

import "./card.styles.css";

export const Card = ({ monster }) => {
  return (
    <div className="card-container">
      <img
        className="card-img"
        alt="funny monster face"
        src={`https://robohash.org/${monster.id}?set=set2`}
      ></img>
      <h2 className="card-name">{monster.name}</h2>
      <p className="card-email">{monster.email}</p>
    </div>
  );
};
