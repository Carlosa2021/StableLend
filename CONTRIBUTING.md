# Contribuir a StableLend Protocol

¡Gracias por tu interés en contribuir a StableLend! Este documento proporciona pautas y información sobre cómo contribuir al proyecto.

## 🚀 Formas de Contribuir

### 🐛 Reportar Bugs
- Usa las [GitHub Issues](https://github.com/Carlosa2021/StableLend/issues)
- Incluye pasos para reproducir el bug
- Proporciona información del entorno (OS, browser, etc.)

### 💡 Sugerir Features
- Abre un issue con la etiqueta "enhancement"
- Describe claramente la funcionalidad propuesta
- Explica por qué sería útil para el proyecto

### 📝 Mejorar Documentación
- Corrige errores tipográficos
- Mejora explicaciones existentes
- Agrega ejemplos de uso

### 💻 Contribuir Código
- Fork el repositorio
- Crea una rama para tu feature
- Haz commits descriptivos
- Abre un Pull Request

## 🛠️ Configuración de Desarrollo

### Prerrequisitos
- Node.js 18+
- npm o yarn
- Git

### Setup Local
```bash
# 1. Fork y clona el repositorio
git clone https://github.com/tu-usuario/StableLend.git
cd StableLend

# 2. Instala dependencias
npm install

# 3. Configura variables de entorno
cp .env.example .env.local
# Edita .env.local con tu THIRDWEB_CLIENT_ID

# 4. Ejecuta en desarrollo
npm run dev
```

## 📋 Proceso de Pull Request

### Antes de Enviar
1. ✅ Asegúrate que el código compile sin errores
2. ✅ Verifica que no haya errores de linting
3. ✅ Prueba la funcionalidad en desarrollo
4. ✅ Escribe commits descriptivos

### Formato de Commits
Usamos el formato:
```
tipo: descripción breve

Descripción más detallada si es necesario
```

Tipos:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formato, sin cambios de código
- `refactor`: Refactoring de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplo de Commit
```
feat: add token swap functionality

- Implement swap interface with token selection
- Add price estimation with slippage calculation
- Integrate with thirdweb swap services
- Add loading states and error handling
```

## 🎯 Áreas de Contribución

### 🔥 High Priority
- [ ] Implementación de contratos de préstamos
- [ ] Tests unitarios y de integración
- [ ] Auditoría de seguridad
- [ ] Optimización de gas fees

### 🔧 Medium Priority
- [ ] Soporte para más tokens
- [ ] Integración con más DEX protocols
- [ ] Mejoras de UX/UI
- [ ] Dashboard analytics avanzado

### 💡 Ideas para el Futuro
- [ ] Mobile app nativa
- [ ] Soporte multi-chain
- [ ] Sistema de governance
- [ ] Yield farming strategies

## 🧪 Testing

### Ejecutar Tests
```bash
# Tests unitarios (cuando estén implementados)
npm run test

# Tests e2e (cuando estén implementados)
npm run test:e2e

# Linting
npm run lint
```

### Agregar Tests
- Coloca tests en `__tests__/` o junto al archivo como `.test.ts`
- Usa Jest para tests unitarios
- Usa Playwright o Cypress para tests e2e

## 📖 Estilo de Código

### TypeScript
- Usa TypeScript estricto
- Define tipos explícitos cuando sea útil
- Evita `any`, usa tipos específicos

### React/Next.js
- Usa componentes funcionales con hooks
- Implementa error boundaries donde sea apropiado
- Optimiza re-renders con `memo`, `useMemo`, `useCallback`

### Naming Conventions
- **Componentes**: PascalCase (`CustomConnectButton`)
- **Hooks**: camelCase con prefijo `use` (`useTokenBalance`)
- **Archivos**: kebab-case para archivos, PascalCase para componentes
- **Variables**: camelCase

## 🔒 Seguridad

### Reportar Vulnerabilidades
- **NO** abras issues públicos para vulnerabilidades de seguridad
- Envía email a: [security@stablelend.protocol] (si está disponible)
- O crea un issue privado en GitHub

### Mejores Prácticas
- Nunca hardcodees private keys o secrets
- Valida inputs del usuario
- Usa bibliotecas actualizadas
- Revisa dependencias por vulnerabilidades

## 🏆 Reconocimientos

Los contribuidores serán reconocidos en:
- README del proyecto
- Release notes
- Hall of Fame (cuando esté implementado)

## ❓ Preguntas

¿Tienes preguntas? Puedes:
- Abrir un issue con la etiqueta "question"
- Revisar issues existentes
- Contactar a los maintainers

## 📞 Contacto

- **GitHub**: [@Carlosa2021](https://github.com/Carlosa2021)
- **Proyecto**: [StableLend Issues](https://github.com/Carlosa2021/StableLend/issues)

---

¡Gracias por contribuir a StableLend Protocol! 🚀