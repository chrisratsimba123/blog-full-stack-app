import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          Bugs 'n Dirt
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/add-post">
            Add Posts
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
