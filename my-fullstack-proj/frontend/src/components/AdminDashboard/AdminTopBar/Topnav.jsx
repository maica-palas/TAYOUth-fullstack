import React from "react";
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Topnav = () => (
  <div style={styles.topnav}>
    <div />
    <div style={styles.icons}>
      <FaBell style={styles.icon} />
      <FaUserCircle style={styles.icon} />
    </div>
  </div>
);

const styles = {
  topnav: {
    width: '100%',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    background: 'transparent',
    padding: '0 32px',
    boxSizing: 'border-box',
    position: 'relative',
    zIndex: 10,
  },
  icons: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  icon: {
    fontSize: '2rem',
    color: '#111',
    cursor: 'pointer',
  },
};

export default Topnav;
