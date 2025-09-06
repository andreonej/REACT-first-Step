# Proyecto de Entrenamiento React con TypeScript
## Descripción
Este proyecto representa mi viaje de aprendizaje con React y TypeScript, enfocado en la creación de una aplicación de carrito de compras. Desarrollado con Vite y React 19, este proyecto me ha permitido explorar conceptos fundamentales y avanzados del desarrollo frontend moderno.

## Lo que aprendí
### Fundamentos de React
- Creación y estructura de componentes funcionales
- Uso de JSX/TSX para combinar HTML y JavaScript/TypeScript
- Renderizado condicional y manejo de listas con map
- Implementación de múltiples componentes en una aplicación
### TypeScript en React
- Tipado estático para mejorar la calidad del código
- Creación de interfaces para definir la estructura de props y estado
- Uso de tipos genéricos con hooks como useState
- Tipado de funciones y callbacks
### Gestión de Estado
- Uso del hook useState para manejar estado local
- Paso de estado y funciones entre componentes
- Actualización inmutable del estado
- Implementación de callbacks para comunicación entre componentes
### Estilos y CSS
- Implementación de CSS Modules para estilos encapsulados
- Uso de CSS tradicional y estilos en línea
- Aplicación de estilos condicionales basados en el estado
- Diseño responsivo con CSS moderno
### Testing
- Configuración de pruebas unitarias con Vitest y React Testing Library
- Creación de mocks para componentes y funciones
- Pruebas de renderizado y comportamiento de componentes
- Verificación de props y estado en componentes
### Herramientas de Desarrollo
- Configuración y uso de Vite como bundler y servidor de desarrollo
- Implementación de ESLint para análisis estático de código
- Uso de TypeScript para verificación de tipos
- Generación de informes de cobertura de pruebas
## Componentes Principales
### FirstStepsApp
Componente principal que implementa un carrito de compras con:

- Lista de productos
- Contador de artículos
- Cálculo de precio total
- Gestión de estado para productos
### ItemCounter
Componente reutilizable que permite:

- Incrementar/decrementar cantidades
- Establecer límites mínimos y máximos
- Comunicar cambios al componente padre
- Mostrar feedback visual basado en el estado
### MyAwesomeApp
Componente que muestra información de usuario con:

- Datos personales
- Listas de elementos favoritos
- Renderizado condicional
- Estilos dinámicos
## Próximos Pasos
- Implementar persistencia de datos con localStorage o una API
- Añadir enrutamiento con React Router
- Implementar gestión de estado global con Context API o Redux
- Mejorar la accesibilidad y el soporte para dispositivos móviles
## Comandos Disponibles
```
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar pruebas
npm test

# Ejecutar pruebas con interfaz visual
npm run test:ui

# Generar informe de cobertura
npm run coverage
```
