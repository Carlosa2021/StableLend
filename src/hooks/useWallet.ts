"use client";

import { useActiveAccount } from "thirdweb/react";

export interface WalletState {
  address?: string;
  isConnected: boolean;
  chainId?: number;
}

export const useWallet = () => {
  const account = useActiveAccount();

  return {
    address: account?.address,
    isConnected: !!account,
    chainId: 11155111, // Sepolia por defecto
    account,
  };
};