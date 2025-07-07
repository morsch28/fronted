import { Link, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";
import { useEffect, useState } from "react";
import { useAuth } from "../context/auth.context";

function Navbar() {
  const { logout, user } = useAuth;
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/home");
  };
  return (
    <nav
      className="navbar navbar-expand-md navbar text-dark bg-body-secondary "
      aria-label="Fourth navbar example"
    >
      <div className="container fs-5">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 gap-2">
            <li className="nav-item">
              <Link className="nav-link active" to="/users-list">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link active dropdown-toggle"
                aria-disabled="true"
                to="/workouts"
                id="navbarDropDownMenuLink"
              >
                Workouts
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item">Articles</Link>
                </li>
                <li>
                  <Link className="dropdown-item">Training-Program</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/users-list">
                Nutrition
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/users-list">
                Travel
              </Link>
            </li>
            <form role="search" className="d-flex mx-5">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <div className="dropdown">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922510.png"
              className="rounded-circle bg-primary"
              width="70"
              height="70"
              role="button"
              id="userDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
            />
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="userDropdown"
            >
              {user ? (
                <li>
                  <Link className="dropdown-item text-primary" to="/user-info">
                    User Info
                  </Link>
                  <button
                    className="dropdown-item text-danger"
                    onClick={handleLogout}
                  >
                    <i class="bi bi-box-arrow-right"></i>
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link className="dropdown-item text-primary" to="/sign-in">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
