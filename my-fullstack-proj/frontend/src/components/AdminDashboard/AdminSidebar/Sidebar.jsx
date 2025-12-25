import { NavLink } from "react-router-dom";
import logo from "../../../img/d_logo.png";
import homeIcon from "../../../img/home.png";
import projIcon from "../../../img/proj.png";
import heartIcon from "../../../img/heart.png";
import boxIcon from "../../../img/box.png";
import feedIcon from "../../../img/feed.png";
import locationIcon from "../../../img/location_on.png";
import memIcon from "../../../img/mem.png";
import analyticsIcon from "../../../img/analytics.png";
import reportIcon from "../../../img/report.png";

const navItems = [
  { path: "/dashboard", icon: homeIcon, label: "Dashboard" },
  { path: "/projects", icon: projIcon, label: "Projects" },
  { path: "/donation", icon: heartIcon, label: "Donation" },
  { path: "/inventory", icon: boxIcon, label: "Inventory" },
  { path: "/feedback", icon: feedIcon, label: "Feedback" },
  { path: "/beneficiaries", icon: locationIcon, label: "Beneficiaries" },
  { path: "/members", icon: memIcon, label: "Members" },
  { path: "/analytics", icon: analyticsIcon, label: "Analytics" },
  { path: "/reports", icon: reportIcon, label: "Reports" },
];

const Sidebar = () => (
  <div style={styles.sidebar}>
    <div style={styles.logoContainer}>
      <img src={logo} alt="Logo" style={styles.logo} />
    </div>
    <nav style={{ width: "100%" }}>
      {navItems.map(({ path, icon, label }) => (
        <NavLink
          to={path}
          key={label}
          style={({ isActive }) => ({
            ...styles.link,
            ...(isActive ? styles.activeLink : {}),
          })}
        >
          <img src={icon} alt={`${label} icon`} style={styles.icon} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  </div>
);

const styles = {
  sidebar: {
    width: "300px",
    background: "#ffe14d",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "15px",
    minHeight: "100vh",
    position: "fixed",
    left: 0,
    top: 0,
    height: "100vh",
    zIndex: 100,
  },
  logoContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "15px",
  },
  logo: {
    width: "120px",
    height: "120px",
    objectFit: "contain",
    display: "block",
  },
  link: {
    display: "flex",
    alignItems: "center",
    padding: "18px 36px",
    fontSize: "1.25rem",
    color: "#222",
    textDecoration: "none",
    transition: "background 0.2s",
    borderLeft: "7px solid transparent",
    fontWeight: 500,
    background: "none",
    letterSpacing: "0.5px",
    width: "100%",
    marginBottom: "2px",
    gap: "18px",
  },
  activeLink: {
    background: "#fff7c2",
    fontWeight: "bold",
    borderLeft: "7px solid #000",
  },
  icon: {
    width: "28px",
    height: "28px",
    verticalAlign: "middle",
  },
};

export default Sidebar;
