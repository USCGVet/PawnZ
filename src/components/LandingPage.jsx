import React, { useContext } from 'react';
import { Web3Context } from '../context/Web3Context';
import { ThemeContext } from '../context/ThemeContext';

const LandingPage = () => {
  const { connectWallet, account } = useContext(Web3Context);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const themeStyles = {
    ...styles,
    container: {
      ...styles.container,
      backgroundColor: darkMode ? '#121212' : '#ffffff',
      color: darkMode ? '#e0e0e0' : '#333333',
    },
    connectButton: {
      ...styles.connectButton,
      backgroundColor: darkMode ? '#6d9e70' : '#4CAF50',
    },
    section: {
      ...styles.section,
      backgroundColor: darkMode ? '#1e1e1e' : '#f9f9f9',
      padding: '20px',
      borderRadius: '8px',
    },
    toggleButton: {
      backgroundColor: darkMode ? '#6d9e70' : '#4CAF50',
      color: '#fff',
      padding: '8px 15px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  };

  return (
    <div style={themeStyles.container}>
      <header style={styles.header}>
        <h1>PawnZ - UnStablecoin</h1>
        <p>
          A parody DApp inspired by MakerDAO concepts. <p>This is <strong>NOT</strong> a real financial product
          and should never be used for actual financial activities.</p>  Created for entertainment purposes only.
        </p>
        <p style={styles.disclaimer}>
          <strong>DISCLAIMER:</strong> This is a parody only, for entertainment purposes.
        </p>
        <button 
          style={themeStyles.toggleButton} 
          onClick={toggleDarkMode}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        {!account ? (
          <button style={themeStyles.connectButton} onClick={connectWallet}>
            Connect Wallet (For Demo Only)
          </button>
        ) : (
          <p style={styles.accountInfo}>Connected: {account}</p>
        )}
      </header>
      <main style={styles.main}>
        <section style={themeStyles.section}>
          <h2>How This Fictional System Works</h2>
          <ul>
            <li>Pretend to provide collateral (this is just a demo!)</li>
            <li>Simulate minting tokens (not real tokens, just educational)</li>
            <li>Learn about DeFi concepts through this parody interface</li>
          </ul>
        </section>
        <section style={themeStyles.section}>
          <h2>Entertainment Value of PawnZ</h2>
          <p>
            This parody helps you understand the risks of pawning off your PulseChain shitcoins. 
            It's a simplified demonstration of MakerDAO-like systems, reimagined for entertainment purposes on PulseChain.
            <strong> Remember: This is NOT a real financial tool!</strong>           
          </p>
          <p> <strong> Use at your own risk!</strong></p>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
  },
  header: {
    textAlign: 'center',
    marginTop: '50px'
  },
  disclaimer: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: '10px'
  },
  connectButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '12px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
  accountInfo: {
    marginTop: '20px',
    fontWeight: 'bold'
  },
  main: {
    maxWidth: '800px',
    marginTop: '40px',
    padding: '0 20px'
  },
  section: {
    marginBottom: '40px',
    transition: 'background-color 0.3s',
  }
};

export default LandingPage;
