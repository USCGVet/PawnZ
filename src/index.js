import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Web3ContextProvider } from './context/Web3Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Web3ContextProvider>
    <App />
  </Web3ContextProvider>
);
