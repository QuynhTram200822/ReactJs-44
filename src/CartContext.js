import { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [labelText, setLabelText] = useState(0);
  const handleButton = () => {
    setLabelText(labelText + 1);
  };

  const value = {
    labelText,
    handleButton,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
