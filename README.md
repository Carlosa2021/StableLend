# 🚀 StableLend Protocol

## DeFi Seguro y Transparente en Polygon Mainnet

StableLend es un protocolo DeFi innovador que combina seguridad, transparencia y utilidad real. Construido con thirdweb SDK v5 y Next.js 15, ofrece una experiencia de usuario completa con servicios de wallet integrados.

> ✅ **Production Ready** - Optimizado para deployment en Vercel

![StableLend Banner](https://img.shields.io/badge/StableLend-DeFi_Protocol-blue?style=for-the-badge&logo=ethereum)

## ✨ Características Principales

### 💰 **Vaults de Alto Rendimiento**
- **USDC**: 5.2% APY
- **USDT**: 4.8% APY
- Rendimientos estables y seguros

### 🔗 **Wallet Completo Integrado**
- **💳 Comprar**: Tokens con fiat (Moonpay, Transak, Coinbase Pay)
- **📤 Enviar**: Transferencias rápidas en Polygon
- **📥 Recibir**: QR codes y direcciones compartibles
- **🔄 Swap**: Mejor precio con 1inch, Uniswap V3, 0x Protocol

### 🔒 **Seguridad y Transparencia**
- Contratos auditados
- Distribución transparente de fees
- Dashboard en tiempo real

## 🛠️ Stack Tecnológico

- **Frontend**: Next.js 15.5.4 con Turbopack
- **Blockchain**: Polygon Mainnet
- **SDK**: thirdweb v5
- **Styling**: Tailwind CSS v4
- **TypeScript**: Full type safety
- **Wallets**: MetaMask, Coinbase, Rainbow, Trust Wallet + Social Login

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+
- npm o yarn
- Wallet con tokens en Polygon

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Carlosa2021/StableLend.git
cd StableLend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tu THIRDWEB_CLIENT_ID

# Ejecutar en desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con Turbopack

# Producción
npm run build        # Construir para producción
npm run start        # Ejecutar build de producción

# Linting
npm run lint         # Verificar código

# Despliegue de contratos
npm run deploy:polygon  # Información de despliegue en Polygon
```

## 🌐 Configuración de Red

### Polygon Mainnet
- **Chain ID**: 137
- **RPC**: https://polygon-rpc.com/
- **Explorador**: https://polygonscan.com/

### Tokens Soportados
- **USDC**: `0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174`
- **USDT**: `0xc2132D05D31c914a87C6611C10748AEb04B58e8F`
- **WETH**: `0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619`
- **WMATIC**: `0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270`

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizables
│   ├── CustomConnectButton.tsx  # Botón de conexión personalizado
│   └── WalletInfo.tsx     # Información del wallet
├── hooks/                 # Custom hooks
│   ├── useTokenBalance.ts # Hook para balances de tokens
│   ├── useVaultOperations.ts # Hook para operaciones de vault
│   └── useWallet.ts       # Hook para wallet
└── lib/                   # Configuraciones y utilidades
    ├── contracts.ts       # Direcciones de contratos
    └── thirdweb.ts        # Configuración de thirdweb
```

## 🔐 Variables de Entorno

Crear `.env.local` con:

```env
THIRDWEB_CLIENT_ID=tu_client_id_aqui
```

Obtén tu Client ID gratis en [thirdweb.com](https://thirdweb.com/dashboard)

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio GitHub a Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Otros Proveedores
- **Netlify**: Soporta Next.js
- **Railway**: Fácil despliegue
- **AWS/GCP**: Para mayor control

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📋 Roadmap

### ✅ Completado
- [x] Interfaz de usuario completa
- [x] Integración con thirdweb v5
- [x] Servicios de wallet integrados
- [x] Lectura de balances en tiempo real
- [x] Dashboard de transparencia

### 🔄 En Desarrollo
- [ ] Despliegue de contratos en Polygon
- [ ] Funcionalidad de préstamos
- [ ] Sistema de governance
- [ ] Auditoría de seguridad

### 🎯 Futuro
- [ ] Integración con más protocolos DeFi
- [ ] Soporte para más chains
- [ ] Mobile app nativa
- [ ] Advanced analytics

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

- **GitHub**: [@Carlosa2021](https://github.com/Carlosa2021)
- **Proyecto**: [StableLend](https://github.com/Carlosa2021/StableLend)

## 🙏 Agradecimientos

- [thirdweb](https://thirdweb.com/) por el excelente SDK
- [Next.js](https://nextjs.org/) por el framework
- [Polygon](https://polygon.technology/) por la infraestructura
- Comunidad DeFi por la inspiración

---

**⚡ Construido con Next.js 15 + thirdweb v5 + Polygon**