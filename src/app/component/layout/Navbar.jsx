"use client";
import React, { useState } from "react"; 
import ListIcon from "../icons/list";
import CloseIcon from "../icons/close";
import { Button } from "react-bootstrap";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-light p-5 fixed-top"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
    >
      <div className="container-fluid">
        <Button
          className="d-md-none pb-4"
          onClick={toggleNavbar}
          style={{
            padding: "0",
            border: "none",
            marginRight: "30px",
          }}
          variant="link"
        >
          {isOpen ? <CloseIcon /> : <ListIcon />}
        </Button>
        <a className="nav-link" href="/">
          <img 
            src="/photo/portfolio.png"
            style={{ width: "48px", height: "48px" }}
          />
        </a>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item active ">
              <a
                className="nav-link"
                href="/about"
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link"
                href="/tools"
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Tools
              </a>
            </li>
            <li className="nav-item active ">
              <a
                className="nav-link"
                href="/works"
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Works
              </a>
            </li>
            <li className="nav-item active ">
              <a
                className="nav-link"
                href="/contact"
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
