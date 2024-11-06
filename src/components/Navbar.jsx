//rfc -> react function based component
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" herf="/">
                Home
              </a> */}
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              {/* <a className="nav-link" aria-disabled="true" herf="/about">
                About
              </a> */}
              <Link className="nav-link" aria-disabled="true" to="/about">
                About
              </Link>
            </li>
          </ul>
          {/* coloured mode 
          <div class="text-light">
            Choose Color: 
            <div class="form-check form-check-inline mx-2">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
                onClick={checkColor("light")}
              />
              <label class="form-check-label" for="inlineRadio1">
                Light
              </label>
            </div>
            <div class="form-check form-check-inline mx-2">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
                onClick={checkColor("blue")}
              />
              <label class="form-check-label" for="inlineRadio2">
                Blue Dark
              </label>
            </div>
            <div class="form-check form-check-inline mx-2">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
                onClick={checkColor("red")}
              />
              <label class="form-check-label" for="inlineRadio3">
                Red Dark
              </label>
            </div>
          </div> */}

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light "
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// if not same then error in the console.
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};

// if proprs are not mentioned
// Navbar.defaultProps = {
//   title: "Title not mentioned",
//   about: "about not mentioned",
// };