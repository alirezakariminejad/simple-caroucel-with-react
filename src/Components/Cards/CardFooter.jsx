import React from "react";
import CardFooterState from "./CardFooterState";

export default function CardFooter() {
  return (
    <div className="clash-card__unit-stats clash-card__unit-stats--barbarian clearfix">
      <CardFooterState stat="20" statValue="Training" />
      <CardFooterState stat="16" statValue="Speed" />
      <CardFooterState stat="150" statValue="Cost" />
    </div>
  );
}
