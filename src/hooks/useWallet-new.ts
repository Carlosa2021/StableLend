'use client';

import { useState, useEffect } from 'react';
import { useActiveAccount, useConnect, useDisconnect } from 'thirdweb/react';
import { createWallet } from 'thirdweb/wallets';
import { client, SUPPORTED_CHAINS } from '@/lib/config';

export interface WalletState {
  address?: string;
  isConnected: boolean;
  isConnecting: boolean;
  chainId?: number;
  balance?: string;
  error?: string;
}

export const useWallet = () => {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    isConnecting: false,
  });

  const account = useActiveAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (account) {
      setWalletState({
        address: account.address,
        isConnected: true,
        isConnecting: false,
        chainId: 1, // Default to Ethereum
      });
    } else {
      setWalletState({
        isConnected: false,
        isConnecting: false,
      });
    }
  }, [account]);

  const connectWallet = async (walletType: 'metamask' | 'walletconnect' | 'coinbase' = 'metamask') => {
    try {
      setWalletState(prev => ({ ...prev, isConnecting: true, error: undefined }));
      
      let wallet;
      switch (walletType) {
        case 'metamask':
          wallet = createWallet('io.metamask');
          break;
        case 'walletconnect':
          wallet = createWallet('walletConnect');
          break;
        case 'coinbase':
          wallet = createWallet('com.coinbase.wallet');
          break;
        default:
          wallet = createWallet('io.metamask');
      }

      await connect(async () => {
        await wallet.connect({ client });
        return wallet;
      });

    } catch (error) {
      console.error('Error connecting wallet:', error);
      setWalletState(prev => ({
        ...prev,
        isConnecting: false,
        error: 'Error conectando wallet. Por favor, intenta de nuevo.',
      }));
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect();
      setWalletState({
        isConnected: false,
        isConnecting: false,
      });
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  const switchNetwork = async (chainId: number) => {
    try {
      // Implementar cambio de red aquí
      console.log('Switching to chain:', chainId);
    } catch (error) {
      console.error('Error switching network:', error);
    }
  };

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
    switchNetwork,
    supportedChains: SUPPORTED_CHAINS,
  };
};