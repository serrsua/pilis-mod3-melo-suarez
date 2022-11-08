import React from "react";
import { Link, Outlet } from "react-router-dom";
import earth from "../../assets/earth.gif";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div>
            <Link className="new-card-btn" to={"/new-card"}>
              Crea tu propia tarjeta
            </Link>
          </div>
          <div className="logo-container">
            <Link className="logo" to={"/"}>
              <img src={earth} alt="Logo mundo" />
            </Link>
          </div>
          <Link className="navbar-brand" to={"/"}>
            {title}
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
