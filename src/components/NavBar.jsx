import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="current" to="/">
              <button
                type="button"
                className="btn btn-outline-warning btn-lg"
                style={{
                  width: "200px",
                  marginTop: "15px",
                  fontSize: "x-large",
                  fontWeight: "bold",
                }}
              >
                HOME
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/game-list">
              <button
                type="button"
                className="btn btn-outline-warning"
                style={{ width: "200px", marginTop: "15px", fontSize: "x-large",
                  fontWeight: "bold", }}
              >
                GAMES LIST
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/game-clips">
              <button
                type="button"
                className="btn btn-outline-warning"
                style={{ width: "200px", marginTop: "15px", fontSize: "x-large",
                  fontWeight: "bold", }}
              >
                CLIPS GAMES
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
