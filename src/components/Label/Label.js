import React from "react";
import "./Label.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

// Component Cháu
function ChildComponent() {
  const context = useContext(CartContext);

  return <label>{context.labelText}</label>;
}

export default ChildComponent;
