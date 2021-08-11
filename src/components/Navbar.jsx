import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector(state => state.productReducer);
  // console.log("leng", cart.cart.length);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <NavLink
            className="navbar-brand fw-bold text-white text-decoration-none"
            to="/"
            style={{ fontSize: "1.5em" }}
          >
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/cart"
                >
                  <div className="btn btn-primary">
                    Cart <i className="fas fa-shopping-cart"></i>
                    {cart.cart.length === 0 ? (
                      false
                    ) : (
                      <span className="m-1">{cart.cart.length} </span>
                    )}
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
