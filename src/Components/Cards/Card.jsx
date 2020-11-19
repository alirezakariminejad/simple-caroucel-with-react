import React from "react";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import CardItem from "./CardItem";

export default function Card({ hero }) {
  return (
    <div className="wrapper">
      <div className="clash-card barbarian">
        <CardImage src={hero.img} name={hero.name} />
        <CardItem clsName={`clash-card__level clash-card__level--${hero.name}`}>{hero.level}</CardItem>
        <CardItem clsName="clash-card__unit-name">{hero.name}</CardItem>
        <CardItem clsName="clash-card__unit-description">{hero.description}</CardItem>
        <CardFooter units={hero.units} name={hero.name} />
      </div>
    </div>
  );
}
