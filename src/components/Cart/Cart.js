import React from "react";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

// Component Cha
function ParentComponent() {
  const context = useContext(CartContext);

  return (
    <div className=" cart container d-flex justify-content-center align-items-center">
      <Button
        className="plus me-3"
        onClick={context.handleButtonPlus}
        variant="primary"
      >
        +
      </Button>

      <ChildComponent />
      <Button
        className="minus ms-3"
        onClick={context.handleButtonMinus}
        variant="primary"
      >
        -
      </Button>
    </div>
  );
}

// Component Con
function ChildComponent({ label }) {
  return <GrandChildComponent label={label} />;
}

// Component Cháu
function GrandChildComponent() {
  const context = useContext(CartContext);

  return <label>{context.labelText}</label>;
}

export default ParentComponent;
