// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./pages/store";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectRoutes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route index element={<LogIn />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
