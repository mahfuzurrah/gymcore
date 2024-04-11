import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/layouts/MainLayout";
import Lucas from "./pages/Lucas";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/lucas" element={<Lucas />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;