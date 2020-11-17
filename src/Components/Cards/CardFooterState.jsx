import React from "react";

export default function CardFooterState({ stat, statValue }) {
  return (
    <div className="one-third no-border">
      <div className="stat">{stat}</div>
      <div className="stat-value">{statValue}</div>
    </div>
  );
}
