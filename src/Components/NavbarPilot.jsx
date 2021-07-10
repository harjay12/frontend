import "./NavbarPilot.css";
import React from "react";

function NavbarPilot() {
  return (
    <div className="NavbarContainer">
      <div className="NavbarWapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h6
            style={{
              marginTop: "10px",
              marginBottom: "-10px",
            }}
          >
            Question?Call:
            <a href="#Question?Call"> 555-555-5555</a>
          </h6>
          <a
            href="#Employee"
            style={{
              marginTop: "10px",
              marginBottom: "-10px",
            }}
          >
            Employee Information / Resources
          </a>
        </div>
        <hr color="#ababab" />

        <a href="/" style={{ float: "left" }}>
          <img src="/assets/logo1.png" alt="logo1"></img>
        </a>
        <div>
          <nav id="nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Services">Our Services</a>
              </li>
              <li>
                <a href="/About">About Us</a>
              </li>
              <li>
                <a href="/Careers">Career Opportunities</a>
              </li>
              <li>
                <a href="/Contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavbarPilot;
