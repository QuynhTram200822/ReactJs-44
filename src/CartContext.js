import { useState, createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [labelText, setLabelText] = useState(0);
  const handleButtonPlus = () => {
    setLabelText(labelText + 1);
  };
  const handleButtonMinus = () => {
    setLabelText(labelText - 1);
  };

  const value = {
    labelText,
    handleButtonPlus,
    handleButtonMinus,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext, CartProvider };
