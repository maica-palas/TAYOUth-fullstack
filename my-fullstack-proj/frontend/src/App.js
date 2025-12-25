import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboardLayout from "./components/AdminDashboard/AdminDashboardLayout";
import LandingPageLayout from "./components/LandingPage/LandingPageLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboardLayout />} />
        <Route path="/*" element={<LandingPageLayout />} />
      </Routes>
    </div>
  );
}

export default App;
