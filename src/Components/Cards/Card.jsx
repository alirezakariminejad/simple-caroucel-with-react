import React from "react";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";
import CardItem from "./CardItem";

export default function Card() {
  return (
    <div className="wrapper">
      <div className="clash-card barbarian">
        
        <CardImage />

        <CardItem clsName="clash-card__level clash-card__level--barbarian">Level 4</CardItem>
        <CardItem clsName="clash-card__unit-name">The Barbarian</CardItem>
        <CardItem clsName="clash-card__unit-description">
          The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
        </CardItem>

        <CardFooter />

      </div>
    </div>
  );
}
