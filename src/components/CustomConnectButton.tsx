"use client";

import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";
import { client, activeChain } from "@/lib/thirdweb";

// Configurar wallets disponibles incluyendo smart wallets y autenticación completa
const wallets = [
  inAppWallet({
    auth: {
      options: [
        "email",
        "phone", // ✅ Agregado para autenticación por teléfono
        "passkey", // ✅ Agregado para autenticación por passkey
        "google", 
        "discord", 
        "farcaster",
        "telegram",
        "apple",
        "facebook",
        "x" // Twitter/X
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("com.trustwallet.app"),
  createWallet("walletConnect"),
];

export function CustomConnectButton() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      theme="light"
      chain={activeChain}
      // Habilitar Account Abstraction para transacciones gasless
      accountAbstraction={{
        chain: activeChain,
        sponsorGas: true,
      }}
      connectModal={{
        size: "wide",
        title: "Conectar a StableLend 🚀",
        welcomeScreen: {
          title: "StableLend Protocol",
          subtitle: "DeFi seguro y transparente en Polygon con servicios completos",
        },
        showThirdwebBranding: false,
      }}
      // Configurar tokens soportados para todas las operaciones
      supportedTokens={{
        [activeChain.id]: [
          {
            address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC
            name: "USD Coin",
            symbol: "USDC",
            icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
          },
          {
            address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // USDT
            name: "Tether USD",
            symbol: "USDT",
            icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
          },
          {
            address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619", // WETH
            name: "Wrapped Ether",
            symbol: "WETH",
            icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
          },
          {
            address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // WMATIC
            name: "Wrapped MATIC",
            symbol: "WMATIC",
            icon: "https://cryptologos.cc/logos/polygon-matic-logo.png",
          },
        ],
      }}
      // Configuración de WalletConnect
      walletConnect={{
        projectId: "your_walletconnect_project_id", // Se puede configurar opcionalmente
      }}
      // Configuración de botones y UI
      connectButton={{
        label: "Conectar Wallet 💎",
        style: {
          backgroundColor: "#2563eb",
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
          padding: "12px 24px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
          transition: "all 0.2s ease",
        },
      }}
      detailsButton={{
        style: {
          backgroundColor: "#10b981",
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
          padding: "12px 24px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(16, 185, 129, 0.2)",
          transition: "all 0.2s ease",
        },
      }}
      switchButton={{
        label: "🔄 Cambiar a Polygon",
        style: {
          backgroundColor: "#f59e0b",
          color: "white",
          fontSize: "14px",
          fontWeight: "600",
          padding: "12px 24px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(245, 158, 11, 0.2)",
          transition: "all 0.2s ease",
        },
      }}
      // Configuración avanzada del modal de detalles
      detailsModal={{
        assetTabs: ["token", "nft"], // Orden de las pestañas: tokens primero, luego NFTs
      }}
      // Mostrar todas las wallets disponibles
      showAllWallets={true}
      // Auto-conectar en siguientes visitas
      autoConnect={{ timeout: 15000 }}
      // Callbacks para eventos de conexión
      onConnect={(wallet) => {
        console.log("Wallet conectada:", wallet);
      }}
      onDisconnect={(info) => {
        console.log("Wallet desconectada:", info);
      }}
    />
  );
}