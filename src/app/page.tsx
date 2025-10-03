"use client";

import { useState } from "react";
import { CustomConnectButton } from "@/components/CustomConnectButton";
import { useVaultOperations } from "@/hooks/useVaultOperations";
import { useWallet } from "@/hooks/useWallet";
import { useMultipleTokenBalances } from "@/hooks/useTokenBalance";
import { WalletInfo } from "@/components/WalletInfo";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"deposit" | "borrow" | "swap">("deposit");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Función para scroll suave a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Función para cambiar tab y hacer scroll
  const handleTabChange = (tab: "deposit" | "borrow" | "swap") => {
    setActiveTab(tab);
    scrollToSection('interface');
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">StableLend</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => handleTabChange('deposit')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
              >
                💰 Vaults
              </button>
              <button 
                onClick={() => handleTabChange('borrow')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
              >
                💸 Préstamos
              </button>
              <button 
                onClick={() => handleTabChange('swap')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
              >
                🔄 Swap
              </button>
              <button 
                onClick={() => scrollToSection('transparency')}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors cursor-pointer"
              >
                📊 Transparencia
              </button>
            </nav>

            <div className="flex items-center space-x-4">
              <CustomConnectButton />
              
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Abrir menú</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={() => handleTabChange('deposit')}
                  className="text-left text-gray-700 hover:text-gray-900 font-medium py-2"
                >
                  💰 Vaults
                </button>
                <button 
                  onClick={() => handleTabChange('borrow')}
                  className="text-left text-gray-700 hover:text-gray-900 font-medium py-2"
                >
                  💸 Préstamos
                </button>
                <button 
                  onClick={() => handleTabChange('swap')}
                  className="text-left text-gray-700 hover:text-gray-900 font-medium py-2"
                >
                  🔄 Swap
                </button>
                <button 
                  onClick={() => scrollToSection('transparency')}
                  className="text-left text-gray-700 hover:text-gray-900 font-medium py-2"
                >
                  📊 Transparencia
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            DeFi Seguro y
            <span className="text-blue-600"> Transparente</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Genera rendimientos reales del 4-6% APY con stablecoins. 
            Wallet completo integrado: compra, envía, recibe e intercambia tokens directamente.
          </p>
          
          {/* Servicios Integrados del Wallet */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">💳</div>
              <div className="text-sm font-medium text-gray-700">Comprar</div>
              <div className="text-xs text-gray-500">Tokens con fiat</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📤</div>
              <div className="text-sm font-medium text-gray-700">Enviar</div>
              <div className="text-xs text-gray-500">A cualquier wallet</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">📥</div>
              <div className="text-sm font-medium text-gray-700">Recibir</div>
              <div className="text-xs text-gray-500">QR & Address</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl mb-2">🔄</div>
              <div className="text-sm font-medium text-gray-700">Swap</div>
              <div className="text-xs text-gray-500">Intercambio directo</div>
            </div>
          </div>
          
          {/* Métricas clave */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <div className="metric-value text-blue-600">5.2%</div>
              <div className="metric-label">APY Promedio</div>
            </div>
            <div className="card text-center">
              <div className="metric-value text-green-600">$0</div>
              <div className="metric-label">TVL Asegurado</div>
            </div>
            <div className="card text-center">
              <div className="metric-value text-indigo-600">100%</div>
              <div className="metric-label">Auditado</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wallet Completo Integrado 🚀
            </h2>
            <p className="text-lg text-gray-600">
              Todos los servicios DeFi que necesitas en un solo lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center group hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprar Tokens</h3>
              <p className="text-gray-600 text-sm mb-4">
                Compra USDC, USDT y otros tokens directamente con tarjeta o transferencia bancaria
              </p>
              <div className="text-xs text-gray-500">
                ✅ Integración con Moonpay, Transak, Coinbase Pay
              </div>
            </div>

            <div className="card text-center group hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📤</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enviar Tokens</h3>
              <p className="text-gray-600 text-sm mb-4">
                Envía tokens a cualquier dirección en Polygon de forma rápida y segura
              </p>
              <div className="text-xs text-gray-500">
                ✅ Fees bajos, confirmación rápida
              </div>
            </div>

            <div className="card text-center group hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📥</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recibir Tokens</h3>
              <p className="text-gray-600 text-sm mb-4">
                Genera códigos QR o comparte tu dirección para recibir pagos
              </p>
              <div className="text-xs text-gray-500">
                ✅ QR Code, dirección copiable, historial
              </div>
            </div>

            <div className="card text-center group hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Swap Tokens</h3>
              <p className="text-gray-600 text-sm mb-4">
                Intercambia tokens al mejor precio disponible en Polygon
              </p>
              <div className="text-xs text-gray-500">
                ✅ 1inch, Uniswap V3, 0x Protocol
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              🎯 Todo Integrado en tu Wallet
            </h3>
            <p className="text-gray-600 mb-6">
              No necesitas salir de StableLend para realizar operaciones DeFi básicas. 
              Conecta tu wallet y accede a todos los servicios.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Email Login</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Social Login</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">MetaMask</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">WalletConnect</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">Coinbase Wallet</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interface */}
      <section id="interface" className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Wallet Info Sidebar */}
            <div className="lg:col-span-1">
              <WalletInfo />
            </div>
            
            {/* Main Interface */}
            <div className="lg:col-span-2">
              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="bg-gray-100 p-1 rounded-lg">
                  <button
                    onClick={() => setActiveTab("deposit")}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      activeTab === "deposit"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    💰 Depositar
                  </button>
                  <button
                    onClick={() => setActiveTab("borrow")}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      activeTab === "borrow"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    💸 Pedir Prestado
                  </button>
                  <button
                    onClick={() => setActiveTab("swap")}
                    className={`px-6 py-2 rounded-md font-medium transition-colors ${
                      activeTab === "swap"
                        ? "bg-white text-blue-600 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    🔄 Intercambiar
                  </button>
                </div>
              </div>

              {/* Interface Content */}
              <div className="max-w-md mx-auto">
                {activeTab === "deposit" && <DepositInterface />}
                {activeTab === "borrow" && <BorrowInterface />}
                {activeTab === "swap" && <SwapInterface />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section id="transparency" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transparencia Total - Polygon Mainnet 🚀
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="card text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Total Fees Distribuidas</h3>
              <div className="metric-value text-blue-600">$0</div>
              <div className="metric-label">En tiempo real</div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Treasury</h3>
              <div className="metric-value text-green-600">60%</div>
              <div className="metric-label">Reservas del protocolo</div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Desarrollo</h3>
              <div className="metric-value text-purple-600">25%</div>
              <div className="metric-label">Mejoras continuas</div>
            </div>
            
            <div className="card text-center">
              <h3 className="text-sm font-medium text-gray-600 mb-2">Seguros</h3>
              <div className="metric-value text-orange-600">15%</div>
              <div className="metric-label">Protección + Marketing</div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contratos - NECESARIOS REDESPLEGAR EN POLYGON</h3>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 text-sm">
                ⚠️ Los contratos actuales están en Sepolia. Necesitamos redesplegarlos en Polygon Mainnet para usar tokens reales.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Tokens Reales POLYGON 🚀</span>
                <span className="text-green-600 text-sm">✅ Configurados</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">USDC (Polygon)</span>
                <a 
                  href="https://polygonscan.com/token/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-mono"
                >
                  0x2791Bca...4174 ↗
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">USDT (Polygon)</span>
                <a 
                  href="https://polygonscan.com/token/0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm font-mono"
                >
                  0xc2132D...8e8F ↗
                </a>
              </div>
              
              <hr className="my-4" />
              
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Fee Split Contract</span>
                <span className="text-red-500 text-sm">❌ Redesplegar en Polygon</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Account Factory</span>
                <span className="text-red-500 text-sm">❌ Redesplegar en Polygon</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">slUSDC Vault Token</span>
                <span className="text-red-500 text-sm">❌ Redesplegar en Polygon</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">slUSDT Vault Token</span>
                <span className="text-red-500 text-sm">❌ Redesplegar en Polygon</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Lending Pool</span>
                <span className="text-gray-400 text-sm">Pendiente de despliegue</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Componentes de interfaz
function DepositInterface() {
  const [amount, setAmount] = useState("");
  const [selectedToken, setSelectedToken] = useState("USDC");
  const { depositToVault, isLoading } = useVaultOperations();
  const { isConnected } = useWallet();
  const { allBalances, isLoading: balancesLoading } = useMultipleTokenBalances();

  const handleDeposit = async () => {
    if (!isConnected) {
      alert("Por favor conecta tu wallet primero");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert("Por favor ingresa una cantidad válida");
      return;
    }

    try {
      await depositToVault(selectedToken as "USDC" | "USDT", amount);
      alert(`¡Depósito exitoso! Recibiste ${amount} sl${selectedToken} tokens`);
      setAmount("");
    } catch (error) {
      console.error("Error en depósito:", error);
      alert("Error en el depósito. Por favor intenta de nuevo.");
    }
  };

  const currentBalance = allBalances[selectedToken as keyof typeof allBalances] || "0";

  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Depositar y Ganar en Polygon 🚀
      </h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Token (Polygon Mainnet)
          </label>
          <select 
            value={selectedToken}
            onChange={(e) => setSelectedToken(e.target.value)}
            className="input"
            disabled={isLoading}
          >
            <option value="USDC">USDC - 5.2% APY</option>
            <option value="USDT">USDT - 4.8% APY</option>
          </select>
          {isConnected && (
            <p className="text-sm text-gray-600 mt-1">
              Balance: {balancesLoading ? "Cargando..." : `${currentBalance} ${selectedToken}`}
            </p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cantidad
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="input"
            disabled={isLoading}
          />
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-sm text-gray-700">
            <div className="flex justify-between">
              <span>APY:</span>
              <span className="text-green-600 font-medium">
                {selectedToken === "USDC" ? "5.2%" : "4.8%"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Recibirás:</span>
              <span>{amount || "0.00"} sl{selectedToken}</span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleDeposit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={isLoading || !isConnected || !amount}
        >
          {isLoading ? "Procesando..." : isConnected ? "Depositar y Ganar" : "Conectar Wallet"}
        </button>
      </div>
    </div>
  );
}

function BorrowInterface() {
  const [collateralAmount, setCollateralAmount] = useState("");
  const [borrowAmount, setBorrowAmount] = useState("");
  const [selectedCollateral, setSelectedCollateral] = useState("WETH");
  const [selectedBorrow, setSelectedBorrow] = useState("USDC");
  const { isConnected } = useWallet();

  const handleBorrow = () => {
    if (!isConnected) {
      alert("Por favor conecta tu wallet primero");
      return;
    }
    alert("🚧 Función de préstamos en desarrollo. Disponible próximamente!");
  };

  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        💸 Pedir Prestado (Próximamente)
      </h3>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <p className="text-yellow-800 text-sm">
          🚧 La funcionalidad de préstamos estará disponible después del despliegue de contratos en Polygon.
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Colateral
          </label>
          <select 
            value={selectedCollateral}
            onChange={(e) => setSelectedCollateral(e.target.value)}
            className="input mb-2"
          >
            <option value="WETH">WETH - Ethereum</option>
            <option value="WMATIC">WMATIC - Polygon</option>
          </select>
          <input
            type="number"
            value={collateralAmount}
            onChange={(e) => setCollateralAmount(e.target.value)}
            placeholder="0.00"
            className="input"
            disabled
          />
        </div>
        
        <div className="text-center text-gray-400">
          ⬇️ Ratio máximo: 75% LTV
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pedir Prestado
          </label>
          <select 
            value={selectedBorrow}
            onChange={(e) => setSelectedBorrow(e.target.value)}
            className="input mb-2"
          >
            <option value="USDC">USDC - Tasa: 3.2% APR</option>
            <option value="USDT">USDT - Tasa: 3.5% APR</option>
          </select>
          <input
            type="number"
            value={borrowAmount}
            onChange={(e) => setBorrowAmount(e.target.value)}
            placeholder="0.00"
            className="input"
            disabled
          />
        </div>
        
        <button 
          onClick={handleBorrow}
          className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-lg font-medium cursor-not-allowed"
          disabled
        >
          🚧 Próximamente - Pedir Prestado
        </button>
        
        <div className="text-xs text-gray-500 text-center">
          Liquidación automática si el colateral baja del 120%
        </div>
      </div>
    </div>
  );
}

function SwapInterface() {
  const [fromToken, setFromToken] = useState("USDC");
  const [toToken, setToToken] = useState("USDT");
  const [amount, setAmount] = useState("");
  const { isConnected } = useWallet();

  const handleSwap = () => {
    if (!isConnected) {
      alert("Por favor conecta tu wallet primero");
      return;
    }
    alert("🔄 ¡Usa el botón Swap integrado en tu wallet para intercambiar tokens directamente!");
  };

  const tokens = [
    { symbol: "USDC", name: "USD Coin", fee: "0.05%" },
    { symbol: "USDT", name: "Tether USD", fee: "0.05%" },
    { symbol: "WETH", name: "Wrapped Ether", fee: "0.3%" },
    { symbol: "WMATIC", name: "Wrapped MATIC", fee: "0.05%" },
  ];

  return (
    <div className="card">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        🔄 Intercambiar Tokens
      </h3>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-blue-800 text-sm mb-2">
          💡 <strong>Consejo:</strong> Usa el botón de Swap integrado en tu wallet para mejores precios
        </p>
        <p className="text-blue-700 text-xs">
          Integración con 1inch, Uniswap V3, y 0x Protocol para el mejor precio disponible
        </p>
      </div>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Desde
          </label>
          <div className="flex space-x-2">
            <select 
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
              className="input flex-1"
            >
              {tokens.map(token => (
                <option key={token.symbol} value={token.symbol}>
                  {token.symbol} - {token.name}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="input flex-1"
            />
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => {
              const temp = fromToken;
              setFromToken(toToken);
              setToToken(temp);
            }}
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
          >
            ⇅
          </button>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hasta
          </label>
          <select 
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className="input"
          >
            {tokens.map(token => (
              <option key={token.symbol} value={token.symbol}>
                {token.symbol} - {token.name}
              </option>
            ))}
          </select>
          <div className="text-sm text-gray-500 mt-1">
            Estimado: {amount ? (parseFloat(amount) * 0.998).toFixed(4) : "0.00"} {toToken}
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Precio de intercambio:</span>
              <span>1 {fromToken} = 1.002 {toToken}</span>
            </div>
            <div className="flex justify-between">
              <span>Fee de red:</span>
              <span>{tokens.find(t => t.symbol === fromToken)?.fee || "0.05%"}</span>
            </div>
            <div className="flex justify-between">
              <span>Slippage:</span>
              <span>0.5%</span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleSwap}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
          disabled={!isConnected || !amount}
        >
          {isConnected ? "🔄 Usar Swap del Wallet" : "Conectar Wallet"}
        </button>
        
        <div className="text-xs text-gray-500 text-center">
          Mejor precio garantizado • Intercambio instantáneo
        </div>
      </div>
    </div>
  );
}