import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
import Toast from "react-hot-toast";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    console.log("clickkkk");
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    Toast.success("Logout Successfully");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            🛒 Ecommerce App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" href="#">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Category" className="nav-link">
                  Category
                </NavLink>
              </li>
              {!auth?.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link" href="#">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" href="#">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link"
                      href="#"
                      onClick={handleLogout}
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link" href="#">
                  Cart (0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
