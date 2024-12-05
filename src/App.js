// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentList from "./pages/StudentTable";

import NotFound from "./pages/NotFound";
import LayoutFrontend from "./components/LayoutFrontend";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          index
          element={
              <StudentList />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
