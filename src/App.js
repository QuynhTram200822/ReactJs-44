// App.js
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Result from "./pages/Result";
import UserEdit from "./pages/UserEdit";
import UserDelete from "./pages/UserDelete";

import { UserProvider } from "./pages/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/user-list" element={<Result />} />
            <Route path="/user-edit/:id" element={<UserEdit />} />
            <Route path="/user-delete/:id" element={<UserDelete />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
