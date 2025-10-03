import { createThirdwebClient } from 'thirdweb';

// Configuración de thirdweb
export const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || '',
});

// Configuración de redes
export const SUPPORTED_CHAINS = {
  ethereum: {
    chainId: 1,
    name: 'Ethereum',
    rpc: 'https://ethereum.rpc.thirdweb.com',
  },
  polygon: {
    chainId: 137,
    name: 'Polygon',
    rpc: 'https://polygon.rpc.thirdweb.com',
  },
  arbitrum: {
    chainId: 42161,
    name: 'Arbitrum',
    rpc: 'https://arbitrum.rpc.thirdweb.com',
  },
};

// Configuración de tokens soportados
export const SUPPORTED_TOKENS = {
  USDC: {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    addresses: {
      1: '0xA0b86a33E6C1fC4C77cD8e4C0c0C7A1f6E0b8b5c', // Ethereum
      137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', // Polygon
      42161: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', // Arbitrum
    },
  },
  USDT: {
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    addresses: {
      1: '0xdAC17F958D2ee523a2206206994597C13D831ec7', // Ethereum
      137: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F', // Polygon
      42161: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // Arbitrum
    },
  },
  ETH: {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    addresses: {
      1: '0x0000000000000000000000000000000000000000', // Native ETH
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', // Wrapped ETH on Polygon
      42161: '0x0000000000000000000000000000000000000000', // Native ETH on Arbitrum
    },
  },
};

// Configuración de APY y tasas
export const PROTOCOL_CONFIG = {
  VAULT_APY: 5.2, // 5.2% APY base
  LENDING_LTV_MAX: 70, // 70% LTV máximo
  SWAP_FEE: 0.1, // 0.1% fee para swaps
  STABLE_SWAP_FEE: 0.05, // 0.05% fee para swaps entre stablecoins
  LIQUIDATION_THRESHOLD: 75, // 75% threshold para liquidación
  LIQUIDATION_PENALTY: 5, // 5% penalización por liquidación
};

// Utilidades para formateo
export const formatCurrency = (amount: number, decimals: number = 2): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
};

export const formatPercentage = (percentage: number, decimals: number = 1): string => {
  return `${percentage.toFixed(decimals)}%`;
};

export const formatNumber = (number: number, decimals: number = 2): string => {
  return new Intl.NumberFormat('es-ES', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(number);
};