import React from "react";
import CardFooterState from "./CardFooterState";

export default function CardFooter({ units, name }) {
  const unitsValue = units.map((unit, index) => <CardFooterState stat={unit.state} statValue={unit.value} noBorder={index === units.length - 1} />);
  return <div className={`clash-card__unit-stats clash-card__unit-stats--${name} clearfix`}>{unitsValue}</div>;
}
