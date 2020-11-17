import React from "react";

export default function CardItem({ clsName, children }) {
  return <div className={clsName}>{children}</div>;
}
