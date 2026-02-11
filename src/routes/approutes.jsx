import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "../pages/public/Home";
import Browse from "../pages/public/Browse";
import DJProfile from "../pages/public/DJProfile";

// Auth Pages
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

// Dashboards
import CustomerDashboard from "../pages/dashboards/CustomerDashboard";
import DJDashboard from "../pages/dashboards/DJDashboard";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboard";

const approutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/dj/:id" element={<DJProfile />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Dashboards */}
      <Route path="/customer" element={<CustomerDashboard />} />
      <Route path="/dj-dashboard" element={<DJDashboard />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default approutes;
