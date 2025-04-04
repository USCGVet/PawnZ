import { ethers } from 'ethers';

/**
 * Initializes a web3 provider for PulseChain or Ethereum as needed.
 * By default, it attempts to use the window.ethereum provider.
 * 
 * For PulseChain testnet, you might specify a chainId or connect to
 * a test RPC URL directly if MetaMask isn't set up.
 */
export const initWeb3Provider = async () => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Optionally, request network switching if needed
    // e.g., if you want to ensure the user is on PulseChain testnet:
    // await provider.send('wallet_switchEthereumChain', [{ chainId: '0x???' }]);
    return provider;
  } else {
    // Fallback: connect to a public testnet node or your local node
    // Example: ethers.getDefaultProvider('homestead') or PulseChain testnet
    return ethers.getDefaultProvider();
  }
};
