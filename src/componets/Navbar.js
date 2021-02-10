import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="link bg-black">
          <Link className="link1" to="/users">
            Click To Start CRUD
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
