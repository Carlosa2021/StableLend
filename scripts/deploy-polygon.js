#!/usr/bin/env node

// Script de despliegue para Polygon Mainnet
// Ejecutar con: npm run deploy:polygon

console.log('🚀 DESPLEGANDO CONTRATOS EN POLYGON MAINNET\n');

const contracts = [
  {
    name: 'Split Contract (Fee Distribution)',
    command: 'npx thirdweb deploy --name StableLendFeeSplit --contractType split',
    purpose: 'Distribuir fees: 60% Treasury, 25% Desarrollo, 15% Seguros'
  },
  {
    name: 'Account Factory (Smart Wallets)',
    command: 'npx thirdweb deploy --name StableLendAccountFactory --contractType account-factory',
    purpose: 'Crear smart wallets para usuarios'
  },
  {
    name: 'slUSDC Vault Token',
    command: 'npx thirdweb deploy --name slUSDC --contractType token-drop --symbol slUSDC',
    purpose: 'Vault token para depósitos USDC'
  },
  {
    name: 'slUSDT Vault Token',
    command: 'npx thirdweb deploy --name slUSDT --contractType token-drop --symbol slUSDT',
    purpose: 'Vault token para depósitos USDT'
  }
];

console.log('INSTRUCCIONES IMPORTANTES:\n');
console.log('1. Asegúrate de tener MATIC en tu wallet para pagar gas fees');
console.log('2. Selecciona Polygon (ID: 137) al desplegar cada contrato');
console.log('3. Guarda las direcciones de los contratos desplegados');
console.log('4. Actualiza src/lib/contracts.ts con las nuevas direcciones\n');

console.log('CONFIGURACIÓN DE RED:');
console.log('- Red: Polygon Mainnet');
console.log('- Chain ID: 137');
console.log('- RPC: https://polygon-rpc.com/');
console.log('- Explorador: https://polygonscan.com/\n');

console.log('TOKENS REALES CONFIGURADOS:');
console.log('- USDC: 0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174');
console.log('- USDT: 0xc2132D05D31c914a87C6611C10748AEb04B58e8F');
console.log('- WETH: 0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619');
console.log('- WMATIC: 0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270\n');

contracts.forEach((contract, index) => {
  console.log(`${index + 1}. ${contract.name}`);
  console.log(`   Propósito: ${contract.purpose}`);
  console.log(`   Comando: ${contract.command}\n`);
});

console.log('DESPUÉS DEL DESPLIEGUE:');
console.log('1. Actualizar CONTRACT_ADDRESSES en src/lib/contracts.ts');
console.log('2. Verificar contratos en PolygonScan');
console.log('3. Probar funcionalidad con tokens reales');
console.log('4. Configurar permisos y roles necesarios\n');

console.log('💡 NOTA: Los contratos se desplegarán uno por uno.');
console.log('   Después de cada despliegue, guarda la dirección antes de continuar.\n');

console.log('¿Listo para comenzar? Ejecuta:');
console.log('npm run deploy:polygon\n');