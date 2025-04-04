import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navigation = () => {
  const { darkMode } = useContext(ThemeContext);

  const navStyles = {
    ...styles.nav,
    backgroundColor: darkMode ? '#1e1e1e' : '#f8f9fa',
    borderBottom: darkMode ? '1px solid #333' : '1px solid #ddd',
  };

  const linkStyles = {
    ...styles.link,
    color: darkMode ? '#e0e0e0' : '#333',
  };

  return (
    <nav style={navStyles}>
      <div style={styles.navContent}>
        <div style={styles.logo}>
          <a href="/" style={linkStyles}>
            PawnZ <small>(Parody)</small>
          </a>
        </div>
        <div style={styles.links}>
          <a href="/" style={linkStyles}>Home</a>
          <a href="#dashboard" style={linkStyles}>Dashboard</a>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    width: '100%',
    padding: '15px 0',
    transition: 'background-color 0.3s, border-color 0.3s',
  },
  navContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    textDecoration: 'none',
    transition: 'color 0.3s',
  }
};

export default Navigation;