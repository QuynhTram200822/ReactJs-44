// GrandchildComponent.js
import React from "react";
import { useSelector } from "react-redux";

const GrandchildComponent = () => {
  const labelText = useSelector((state) => state.labelText); // Lấy labelText từ store

  return <label>{labelText}</label>; // Hiển thị labelText
};

export default GrandchildComponent;
