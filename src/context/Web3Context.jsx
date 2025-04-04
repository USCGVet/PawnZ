import React, { createContext, useState } from 'react';
import { initWeb3Provider } from '../utils/web3';

export const Web3Context = createContext();

export const Web3ContextProvider = ({ children }) => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    try {
      const provider = await initWeb3Provider();
      const accounts = await provider.send('eth_requestAccounts', []);
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <Web3Context.Provider value={{ account, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
};
