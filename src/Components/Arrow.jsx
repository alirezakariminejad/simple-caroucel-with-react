import React from "react";

export default function Arrow({ direction, handleClick }) {
  return <button
    onClick={handleClick}
    type="button"
    data-role="none"
    className={`slick-${direction} slick-arrow`}
    aria-label="Previous"
    role="button">
    </button>;
}
