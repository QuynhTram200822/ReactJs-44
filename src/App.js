// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
