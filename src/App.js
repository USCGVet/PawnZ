import React from 'react';
import { Web3ContextProvider } from './context/Web3Context';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';

function App() {
  return (
    <ThemeProvider>
      <Web3ContextProvider>
        <div>
          <Navigation />
          <LandingPage />
        </div>
      </Web3ContextProvider>
    </ThemeProvider>
  );
}

export default App;
