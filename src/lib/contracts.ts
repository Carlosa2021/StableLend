import { getContract } from "thirdweb";
import { client, activeChain } from "./thirdweb";

// Direcciones de contratos - actualizar cuando se desplieguen
export const CONTRACT_ADDRESSES = {
  // Fee Distribution (NECESITAS REDESPLEGAR EN POLYGON)
  FEE_SPLIT: "0x0000000000000000000000000000000000000000", // Redesplegar en Polygon
  
  // Account Abstraction (NECESITAS REDESPLEGAR EN POLYGON)
  ACCOUNT_FACTORY: "0x0000000000000000000000000000000000000000", // Redesplegar en Polygon
  
  // Vault Tokens (NECESITAS REDESPLEGAR EN POLYGON)
  SLUSDC_VAULT: "0x0000000000000000000000000000000000000000", // Redesplegar en Polygon
  SLUSDT_VAULT: "0x0000000000000000000000000000000000000000", // Redesplegar en Polygon
  
  // Lending Protocol (pendientes de desplegar)
  LENDING_POOL: "0x0000000000000000000000000000000000000000",
  
  // Governance & Security (pendientes de desplegar)
  MULTISIG: "0x0000000000000000000000000000000000000000",
  TIMELOCK: "0x0000000000000000000000000000000000000000",
  
  // Tokens REALES en Polygon Mainnet 🚀
  USDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC en Polygon Mainnet
  USDT: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // USDT en Polygon Mainnet
  WETH: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", // WETH en Polygon Mainnet
  WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // WMATIC en Polygon
} as const;

// Contratos configurados
export const contracts = {
  // Fee Distribution
  feeSplit: getContract({
    client,
    address: CONTRACT_ADDRESSES.FEE_SPLIT,
    chain: activeChain,
  }),
  
  // Account Abstraction
  accountFactory: getContract({
    client,
    address: CONTRACT_ADDRESSES.ACCOUNT_FACTORY,
    chain: activeChain,
  }),
  
  // Vault Tokens (slUSDC y slUSDT)
  slUsdcVault: getContract({
    client,
    address: CONTRACT_ADDRESSES.SLUSDC_VAULT,
    chain: activeChain,
  }),
  
  slUsdtVault: getContract({
    client,
    address: CONTRACT_ADDRESSES.SLUSDT_VAULT,
    chain: activeChain,
  }),
  
  // Lending (pendiente)
  lendingPool: getContract({
    client,
    address: CONTRACT_ADDRESSES.LENDING_POOL,
    chain: activeChain,
  }),
  
  // Comentamos los tokens por ahora para evitar errores de validación
  // Tokens
  // usdc: getContract({
  //   client,
  //   address: CONTRACT_ADDRESSES.USDC,
  //   chain: activeChain,
  // }),
  
  // usdt: getContract({
  //   client,
  //   address: CONTRACT_ADDRESSES.USDT,
  //   chain: activeChain,
  // }),
  
  // weth: getContract({
  //   client,
  //   address: CONTRACT_ADDRESSES.WETH,
  //   chain: activeChain,
  // }),
};

export type ContractKey = keyof typeof contracts;