import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Cart.css";

// Component Cha
function ParentComponent() {
  const [labelText, setLabelText] = useState(0);

  const handleButtonClick1 = () => {
    setLabelText(labelText + 1);
  };

  const handleButtonClick2 = () => {
    setLabelText(labelText - 1);
  };

  return (
    <div className=" cart container d-flex flex-column justify-content-center align-items-center">
      <ChildComponent
        onButtonClick1={handleButtonClick1}
        onButtonClick2={handleButtonClick2}
      >
        <label>{labelText}</label>
      </ChildComponent>
    </div>
  );
}

// Component Con
function ChildComponent({ onButtonClick1, onButtonClick2, children }) {
  return (
    <div className=" cart container d-flex justify-content-center align-items-center">
      <Button className="plus me-3" onClick={onButtonClick1} variant="primary">
        +
      </Button>
      {children}

      <Button className="minus ms-3" onClick={onButtonClick2} variant="primary">
        -
      </Button>
    </div>
  );
}

export default ParentComponent;
