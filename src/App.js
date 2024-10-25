// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
