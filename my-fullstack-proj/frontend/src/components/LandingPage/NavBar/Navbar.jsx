import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../../img/d_logo.png";
import acntLogo from "../../../img/acnt.png";

const navbarStyle = `
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 20px 0 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  position: sticky;
  border-bottom: 3px solid rgb(255, 255, 255);
}
.navbar-logo {
  height: auto;
  width: 100px;
  object-fit: contain;
}
.navbar-links {
  display: flex;
  gap: 32px;
  margin-right: 32px;
}
.navbar-links span {
  text-decoration: none;
  color: #181818;
  font-size: 1.4rem;
  font-weight: 400;
  padding-bottom: 2px;
  transition: color 0.2s;
  cursor: pointer;
}
.navbar-links span.active {
  border-bottom: 2px solid #181818;
  font-weight: 500;
}

.navbar-right-logo {
  height: auto;
  width: 35px;
  background: #fff;
  object-fit: contain;
  cursor: pointer;
}
.account-dropdown {
  position: absolute;
  right: 0;
  top: 45px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  border-radius: 4px;
  min-width: 180px;
  z-index: 2000;
  padding: 0;
  margin: 0;
  border: 1px solid #eee;
}
.account-dropdown-item {
  padding: 20px 0;
  text-align: center;
  font-size: 1.5rem;
  color: #181818;
  cursor: pointer;
  background: #fff;
  border-bottom: 1px solid #eee;
  transition: background 0.2s;
}
.account-dropdown-item:last-child {
  border-bottom: none;
}
.account-dropdown-item:hover, .account-dropdown-item.active {
  background: #f2f2f2;
}
`;

const NavbarLinks = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar-links">
      <span
        className={location.pathname === "/" ? "active" : ""}
        onClick={() => navigate("/")}
      >
        Home
      </span>
      <span
        className={location.pathname === "/about" ? "active" : ""}
        onClick={() => navigate("/about")}
      >
        About
      </span>
      <span
        className={location.pathname === "/projects" ? "active" : ""}
        onClick={() => navigate("/projects")}
      >
        Projects
      </span>
      <span
        className={location.pathname === "/contact" ? "active" : ""}
        onClick={() => navigate("/contact")}
      >
        Contact Us
      </span>
    </div>
  );
};

const AccountDropdown = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <div className="account-dropdown">
      <div
        className="account-dropdown-item"
        onClick={() => handleNavigate("/join")}
      >
        Join Us
      </div>
      <div
        className="account-dropdown-item"
        onClick={() => handleNavigate("/donate")}
      >
        Donate
      </div>
      <div
        className="account-dropdown-item"
        onClick={() => handleNavigate("/login")}
      >
        Log In
      </div>
    </div>
  );
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <>
      <style>{navbarStyle}</style>
      <nav className="navbar" style={{ position: "relative" }}>
        <img src={logo} className="navbar-logo" alt="Logo" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <NavbarLinks />
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <img
              src={acntLogo}
              className="navbar-right-logo"
              alt="Account"
              onClick={() => setDropdownOpen((open) => !open)}
            />
            {dropdownOpen && (
              <AccountDropdown onClose={() => setDropdownOpen(false)} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
