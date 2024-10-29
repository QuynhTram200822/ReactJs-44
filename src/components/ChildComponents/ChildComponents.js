// ChildComponent.js
import React from "react";
import GrandchildComponent from "../GrandchildComponent/GrandchildComponent";

export const ChildComponent = ({ onDecrement }) => {
  return (
    <div className="d-flex align-items-center">
      <GrandchildComponent />
    </div>
  );
};
