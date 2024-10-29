import React from "react";
import Button from "react-bootstrap/Button";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext";
import Content from "../../pages/Content";

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

      <Content />
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

export default ParentComponent;
