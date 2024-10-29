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
        onClick={context.handleButton}
        variant="primary"
      >
        +
      </Button>

      <ChildComponent />
    </div>
  );
}

// Component Con
function ChildComponent() {
  const context = useContext(CartContext);
  return <label>{context.labelText}</label>;
}

export default ParentComponent;
