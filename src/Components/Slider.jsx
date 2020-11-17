import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import Card from "./Cards/Card";

export default function Slider() {
  return (
    <div className="slide-container">
      <Arrow />
      <Card />
      <Arrow />
    </div>
  );
}
