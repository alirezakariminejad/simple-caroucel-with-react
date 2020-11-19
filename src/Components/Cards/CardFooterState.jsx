import React from "react";

export default function CardFooterState({ stat, statValue, noBorder }) {
  let className = "one-third ";
  if (noBorder) {
    className += "no-border";
  }
  return (
    <div className={className}>
      <div className="stat">{stat}</div>
      <div className="stat-value">{statValue}</div>
    </div>
  );
}
