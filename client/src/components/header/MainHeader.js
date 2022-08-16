import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEvents from "../admin/AddEvents";
import AdminLogin from "../admin/AdminLogin";
import VolunteerList from "../admin/VolunteerList";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Blog from "../blog/Blog";
import UserDashboard from "../dashboard/UserDashboard";
import Donation from "../Donation/Donation";
import Home from "../Home/Home";
import PrivateRoute from "../privateRoute/PrivateRoute";
import RegisterEvent from "../registerEvent/RegisterEvent";

const MainHeader = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/register/event/:id" element={<RegisterEvent />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<VolunteerList />} />
          <Route path="/admin/add-events" element={<AddEvents />} />
          <Route path="/donation" element={<Donation />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainHeader;
