import React from "react";
import Container from "../Components/Shared/Container";
import Navbar from "../Components/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
