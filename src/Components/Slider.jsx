import React, { useState, useEffect } from "react";
import Arrow from "./Arrow";
import Card from "./Cards/Card";

export default function Slider() {
  const [heroes, setHeroes] = useState([]);
  const [pointer, setPointer] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/heroes")
      .then((response) => response.json())
      .then((hero) => setHeroes(hero));
  }, []);

  function nextHandler() {
    const currentPoint = pointer + 1 < heroes.length ? pointer + 1 : 0;
    setPointer(currentPoint);
  }
  function prevHandler() {
    const currentPoint = pointer - 1 < 0 ? heroes.length - 1 : pointer - 1;
    setPointer(currentPoint);
  }

  return (
    <div className="slide-container">
      {!heroes.length ? (
        <div>LOADING...</div>
      ) : (
        <>
          <Arrow direction="prev" handleClick={prevHandler} />
          <Card hero={heroes[pointer]} />
          <Arrow direction="next" handleClick={nextHandler} />
        </>
      )}
    </div>
  );
}
