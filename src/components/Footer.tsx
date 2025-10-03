"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* StableLend Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">StableLend Protocol</h3>
                <p className="text-slate-400 text-sm">DeFi Seguro y Transparente</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Protocolo DeFi innovador en Polygon Mainnet con servicios completos de wallet, 
              transacciones gasless y máxima seguridad para tus activos digitales.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/Carlosa2021/StableLend" target="_blank" 
                    className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Protocol Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Protocolo</h4>
            <ul className="space-y-2">
              <li><Link href="#vaults" className="text-slate-400 hover:text-white transition-colors">Vaults</Link></li>
              <li><Link href="#prestamos" className="text-slate-400 hover:text-white transition-colors">Préstamos</Link></li>
              <li><Link href="#swap" className="text-slate-400 hover:text-white transition-colors">Swap</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Documentación</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Auditorías</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><Link href="https://polygon.technology" target="_blank" className="text-slate-400 hover:text-white transition-colors">Polygon Network</Link></li>
              <li><Link href="https://thirdweb.com" target="_blank" className="text-slate-400 hover:text-white transition-colors">Thirdweb SDK</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Términos de Uso</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white transition-colors">Soporte</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Copyright Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="text-slate-400 text-sm">
                © {currentYear} StableLend Protocol. Todos los derechos reservados.
              </div>
            </div>
            
            {/* ChainX Brand */}
            <div className="flex items-center space-x-3">
              <span className="text-slate-400 text-sm">Desarrollado por</span>
              <div className="flex items-center space-x-2 px-3 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CX</span>
                </div>
                <div className="text-right">
                  <div className="text-white font-semibold text-sm">ChainX</div>
                  <div className="text-slate-400 text-xs">Basel, Switzerland 🇨🇭</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-500">
              <span>Powered by:</span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Polygon Mainnet</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>thirdweb v5</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                <span>Next.js 15</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>TypeScript</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span>Tailwind CSS</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                <span>Vercel</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}