// ChildComponent.js
import React from "react";
import Button from "react-bootstrap/Button";
import GrandchildComponent from "../GrandchildComponent/GrandchildComponent";

export const ChildComponent = ({ onDecrement }) => {
  return (
    <div className="d-flex align-items-center">
      <GrandchildComponent />
      <Button variant="primary" className="ms-2" onClick={onDecrement}>
        -
      </Button>
    </div>
  );
};
