import React from "react";
import { Outlet } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-primary text-light p-3 fs-5" style={{ height: "60px" }}>
      <strong style={{ fontSize: "25px", marginLeft: "20px" }}>Users</strong>
      <Outlet />
    </div>
  );
};

export default Header;
