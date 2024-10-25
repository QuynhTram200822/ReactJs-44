import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Cart.css";

// Component Cha
function ParentComponent() {
  const [labelText, setLabelText] = useState(0);

  return (
    <div className=" cart container d-flex justify-content-center align-items-center">
      <Button
        className="plus me-3"
        onClick={() => setLabelText(labelText + 1)}
        variant="primary"
      >
        +
      </Button>

      <ChildComponent label={labelText} />

      <Button
        className="minus ms-3"
        onClick={() => setLabelText(labelText - 1)}
        variant="primary"
      >
        -
      </Button>
    </div>
  );
}

// Component Con
function ChildComponent({ label }) {
  return <label>{label}</label>;
}

export default ParentComponent;
