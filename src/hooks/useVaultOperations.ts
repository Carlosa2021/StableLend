"use client";

import { useState } from "react";
import { useActiveAccount, useSendTransaction } from "thirdweb/react";
import { getContract, prepareContractCall } from "thirdweb";
import { client, activeChain } from "@/lib/thirdweb";
import { CONTRACT_ADDRESSES } from "@/lib/contracts";

export function useVaultOperations() {
  const account = useActiveAccount();
  const { mutate: sendTransaction, isPending } = useSendTransaction();
  const [isLoading, setIsLoading] = useState(false);

  const depositToVault = async (tokenSymbol: "USDC" | "USDT", amount: string) => {
    if (!account) {
      throw new Error("Wallet not connected");
    }

    setIsLoading(true);

    try {
      // Seleccionar el contrato del vault correcto
      const vaultAddress = tokenSymbol === "USDC" 
        ? CONTRACT_ADDRESSES.SLUSDC_VAULT 
        : CONTRACT_ADDRESSES.SLUSDT_VAULT;

      const vaultContract = getContract({
        client,
        address: vaultAddress,
        chain: activeChain,
      });

      // Preparar la transacción de claim (simula depósito)
      const transaction = prepareContractCall({
        contract: vaultContract,
        method: "function claim(address to, uint256 quantity, address currency, uint256 pricePerToken, bytes32[] memory proofs, uint256 priceInProofCurrency)",
        params: [
          account.address, // to
          BigInt(Number(amount) * 1e18), // quantity - cantidad de vault tokens a recibir (wei)
          "0x0000000000000000000000000000000000000000", // currency (ETH address para test)
          BigInt(0), // pricePerToken (gratis para test)
          [], // proofs (vacío para claim público)
          BigInt(0), // priceInProofCurrency
        ],
      });

      // Enviar transacción
      sendTransaction(transaction, {
        onSuccess: (result) => {
          console.log("Deposit successful:", result);
          setIsLoading(false);
        },
        onError: (error) => {
          console.error("Deposit failed:", error);
          setIsLoading(false);
          throw error;
        },
      });

    } catch (error) {
      setIsLoading(false);
      throw error;
    }
  };

  const getVaultBalance = async (tokenSymbol: "USDC" | "USDT") => {
    if (!account) return "0";

    try {
      const vaultAddress = tokenSymbol === "USDC" 
        ? CONTRACT_ADDRESSES.SLUSDC_VAULT 
        : CONTRACT_ADDRESSES.SLUSDT_VAULT;

      const vaultContract = getContract({
        client,
        address: vaultAddress,
        chain: activeChain,
      });

      // Aquí podrías implementar la lectura del balance
      // Por ahora retornamos 0
      return "0";
    } catch (error) {
      console.error("Error getting vault balance:", error);
      return "0";
    }
  };

  return {
    depositToVault,
    getVaultBalance,
    isLoading: isLoading || isPending,
  };
}