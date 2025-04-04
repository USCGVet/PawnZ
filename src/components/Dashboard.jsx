import React, { useContext } from 'react';
import { Web3Context } from '../context/Web3Context';
import { ThemeContext } from '../context/ThemeContext';

const Dashboard = () => {
  const { account } = useContext(Web3Context);
  const { darkMode } = useContext(ThemeContext);

  const themeStyles = {
    container: {
      ...styles.container,
      backgroundColor: darkMode ? '#121212' : '#ffffff',
      color: darkMode ? '#e0e0e0' : '#333333',
    },
    card: {
      ...styles.card,
      backgroundColor: darkMode ? '#1e1e1e' : '#ffffff',
      boxShadow: darkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    button: {
      ...styles.button,
      backgroundColor: darkMode ? '#6d9e70' : '#4CAF50',
    },
    input: {
      ...styles.input,
      backgroundColor: darkMode ? '#333' : '#fff',
      color: darkMode ? '#e0e0e0' : '#333',
      borderColor: darkMode ? '#555' : '#ddd',
    }
  };

  if (!account) {
    return (
      <div style={themeStyles.container}>
        <h2>Dashboard</h2>
        <p>Please connect your wallet to view the dashboard.</p>
        <p><strong>Note:</strong> This is a parody app for entertainment purposes only.</p>
      </div>
    );
  }

  return (
    <div style={themeStyles.container}>
      <h2>Your Pretend Finance Dashboard</h2>
      <p style={styles.disclaimer}>
        <strong>REMINDER:</strong> This is a parody only! No real assets involved.
      </p>
      
      <div style={styles.cardContainer}>
        <div style={themeStyles.card}>
          <h3>Your Fake Vault</h3>
          <p>Connected Account: {account}</p>
          <p>Pretend Collateral: 0.00 ETH</p>
          <p>Simulated Debt: 0.00 PawnZ</p>
          <div style={styles.formGroup}>
            <label>Add Pretend Collateral:</label>
            <input type="number" placeholder="0.00" style={themeStyles.input} />
            <button style={themeStyles.button}>Simulate Deposit</button>
          </div>
        </div>
        
        <div style={themeStyles.card}>
          <h3>Mint Fake PawnZ</h3>
          <p>Max available to mint: 0.00 PawnZ</p>
          <div style={styles.formGroup}>
            <label>Amount to mint:</label>
            <input type="number" placeholder="0.00" style={themeStyles.input} />
            <button style={themeStyles.button}>Simulate Minting</button>
          </div>
          <p style={styles.warning}>Remember: These are pretend tokens for entertainment purposes only!</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
  },
  disclaimer: {
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    color: 'red',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  card: {
    padding: '20px',
    borderRadius: '8px',
    transition: 'background-color 0.3s, box-shadow 0.3s',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    transition: 'background-color 0.3s, color 0.3s, border-color 0.3s',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '4px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  warning: {
    color: 'orange',
    marginTop: '15px',
    fontStyle: 'italic',
  }
};

export default Dashboard;