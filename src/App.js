// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./pages/store";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./pages/ProtectRoutes";
import LayoutFrontend from "./components/LayoutFrontend";
import LayoutBackend from "./components/LayoutBackend";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            index
            element={
              <LayoutFrontend>
                <LogIn />
              </LayoutFrontend>
            }
          />
          <Route
            path="/sign-up"
            element={
              <LayoutFrontend>
                <SignUp />
              </LayoutFrontend>
            }
          />
          <Route
            path="/dashboard"
            element={
              <LayoutBackend>
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              </LayoutBackend>
            }
          />
          <Route
            path="/profile"
            element={
              <LayoutBackend>
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              </LayoutBackend>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
