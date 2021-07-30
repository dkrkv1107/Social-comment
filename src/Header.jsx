import React from "react";
import "./header.css";
import logo from "./images/logo1.png";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="115" height="100" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item px-3">
                <a class="nav-link active" aria-current="page" href="#">
                  Integration
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link active" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link active" aria-current="page" href="#">
                  Blog
                </a>
              </li>
              <li class="nav-item px-3">
                <a class="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <button type="button" class="btn btn-primary">
              Get Early Access
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
