"use client";

import { useActiveAccount, useActiveWallet } from "thirdweb/react";
import { useMultipleTokenBalances } from "@/hooks/useTokenBalance";

export function WalletInfo() {
  const account = useActiveAccount();
  const wallet = useActiveWallet();
  const { allBalances, isLoading } = useMultipleTokenBalances();

  if (!account) {
    return (
      <div className="card bg-gray-50">
        <div className="text-center py-8">
          <div className="text-4xl mb-4">👛</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Conecta tu Wallet
          </h3>
          <p className="text-gray-600">
            Conecta tu wallet para ver balances y acceder a todos los servicios DeFi
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Mi Wallet 💎
        </h3>
        <div className="text-sm text-gray-500">
          {wallet?.id} Conectado
        </div>
      </div>

      {/* Dirección del wallet */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Dirección
        </label>
        <div className="bg-gray-50 rounded-lg p-3 font-mono text-sm">
          {account.address.slice(0, 6)}...{account.address.slice(-4)}
        </div>
      </div>

      {/* Balances de tokens */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Balances en Polygon
        </label>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">USDC</div>
            <div className="font-semibold text-blue-600">
              {isLoading ? "..." : allBalances.USDC}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">USDT</div>
            <div className="font-semibold text-green-600">
              {isLoading ? "..." : allBalances.USDT}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">WETH</div>
            <div className="font-semibold text-purple-600">
              {isLoading ? "..." : allBalances.WETH}
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500 mb-1">WMATIC</div>
            <div className="font-semibold text-orange-600">
              {isLoading ? "..." : allBalances.WMATIC}
            </div>
          </div>
        </div>
      </div>

      {/* Servicios rápidos */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Servicios Rápidos
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs py-2 px-3 rounded-lg transition-colors">
            💳 Comprar
          </button>
          <button className="bg-green-50 hover:bg-green-100 text-green-700 text-xs py-2 px-3 rounded-lg transition-colors">
            📤 Enviar
          </button>
          <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs py-2 px-3 rounded-lg transition-colors">
            📥 Recibir
          </button>
          <button className="bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs py-2 px-3 rounded-lg transition-colors">
            🔄 Swap
          </button>
        </div>
      </div>
    </div>
  );
}