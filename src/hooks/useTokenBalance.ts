"use client";

import { useReadContract, useActiveAccount } from "thirdweb/react";
import { getContract } from "thirdweb";
import { client } from "@/lib/thirdweb";
import { polygon } from "thirdweb/chains";
import { balanceOf } from "thirdweb/extensions/erc20";
import { CONTRACT_ADDRESSES } from "@/lib/contracts";

export function useTokenBalance(tokenSymbol: 'USDC' | 'USDT' | 'WETH' | 'WMATIC') {
  const account = useActiveAccount();
  
  const tokenAddress = {
    USDC: CONTRACT_ADDRESSES.USDC,
    USDT: CONTRACT_ADDRESSES.USDT,
    WETH: CONTRACT_ADDRESSES.WETH,
    WMATIC: CONTRACT_ADDRESSES.WMATIC,
  }[tokenSymbol];

  const contract = getContract({
    client,
    chain: polygon,
    address: tokenAddress
  });

  const { 
    data: balance, 
    isLoading,
    error 
  } = useReadContract(
    balanceOf,
    {
      contract,
      address: account?.address || ""
    }
  );

  // Convertir balance basado en decimales del token
  const formatBalance = (rawBalance: bigint | undefined) => {
    if (!rawBalance) return "0";
    
    // USDC y USDT tienen 6 decimales en Polygon
    const decimals = tokenSymbol === 'USDC' || tokenSymbol === 'USDT' ? 6 : 18;
    const divisor = BigInt(10 ** decimals);
    
    const wholeUnits = rawBalance / divisor;
    const fractionalUnits = rawBalance % divisor;
    
    // Mostrar hasta 4 decimales
    const fractionalStr = fractionalUnits.toString().padStart(decimals, '0');
    const truncatedFractional = fractionalStr.slice(0, 4);
    
    return `${wholeUnits}.${truncatedFractional}`;
  };

  return {
    balance: formatBalance(balance),
    rawBalance: balance,
    isLoading: isLoading && !!account,
    error,
    isConnected: !!account,
    tokenSymbol,
    refetch: () => {
      // El hook se refresca automáticamente
    }
  };
}

export function useMultipleTokenBalances() {
  const usdcBalance = useTokenBalance('USDC');
  const usdtBalance = useTokenBalance('USDT');
  const wethBalance = useTokenBalance('WETH');
  const wmaticBalance = useTokenBalance('WMATIC');

  return {
    USDC: usdcBalance,
    USDT: usdtBalance,
    WETH: wethBalance,
    WMATIC: wmaticBalance,
    isLoading: usdcBalance.isLoading || usdtBalance.isLoading || wethBalance.isLoading || wmaticBalance.isLoading,
    allBalances: {
      USDC: usdcBalance.balance,
      USDT: usdtBalance.balance,
      WETH: wethBalance.balance,
      WMATIC: wmaticBalance.balance,
    }
  };
}