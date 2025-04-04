import React, { createContext, useState, useEffect } from 'react';
import { initWeb3Provider } from '../utils/web3';

export const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);
  const [isWalletAvailable, setIsWalletAvailable] = useState(false);

  // Check if wallet is available on page load
  useEffect(() => {
    const checkWalletAvailability = async () => {
      setIsWalletAvailable(typeof window !== 'undefined' && window.ethereum !== undefined);
    };
    
    checkWalletAvailability();
  }, []);

  const connectWallet = async () => {
    setError(null);
    setIsConnecting(true);
    
    try {
      const provider = await initWeb3Provider();
      const accounts = await provider.send('eth_requestAccounts', []);
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setError('Failed to connect wallet. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Web3Context.Provider value={{ 
      account, 
      connectWallet, 
      isConnecting, 
      error, 
      isWalletAvailable 
    }}>
      {children}
    </Web3Context.Provider>
  );
};
