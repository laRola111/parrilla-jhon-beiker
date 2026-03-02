---
name: Definición de Menús Digitales y Landing Pages
description: Patrones avanzados y directrices de UI/UX para estructurar landings de menú de restaurantes (Digital Menus).
---

# 📖 Digital Menu & Restaurant Landings Skill

Esta habilidad define las mejores prácticas arquitectónicas, de diseño y experiencia de usuario (UX) para crear menús digitales (tanto PWA, páginas web o landings) orientados a captura de clientes y pedidos rápidos.

## 1. Arquitectura de Navegación (Sticky & Scroll-Spy)

- **Categorización Visible**: En menús extensos, la navegación de categorías (Desayunos, Entradas, Platos Fuertes, Bebidas) DEBE ser "sticky" (pegajosa) en el top (o en un sidebar en Desktop).
- **Tab/Pill Navigation**: Emplea "pills" horizontales desplazables en dispositivos móviles para las clasificaciones.
- **Scroll-Spy**: Al scrollear por el menú, la pestaña activa debe hacer un "highlight" dinámicamente basándose en la sección visible de la pantalla.

## 2. Jerarquía Visual y Tarjetas de Producto (Menu Items)

- **Título & Precio**: El nombre del plato debe ser claro y apetitoso (fuente de display). El precio visualmente alineado a la derecha o resaltado (con color primario o acento).
- **Descripciones Cortas**: La descripción (ingredientes) debe usar color gris/secundario con tamaño menor (`text-sm text-gray-400`).
- **Fotografías (Opcional pero recomendado)**: Si el cliente posee fotografías, se deben usar en las secciones principales o en los platillos "Signature"/"Especiales", con layout `bento-grid`.
- **Badges y Etiquetas**: Usa etiquetas para distinguir características ("Nuevo", "Picante 🌶️", "Vegano", "Recomendando", "Fines de Semana").

## 3. Experiencia de Compra (CTAs & Carts)

- **Action Buttons**: Al lado de cada plato (especialmente los destacados), ubica un botón sutil (ej. "Agregar", un ícono `+` o `add_shopping_cart`) para dar el estímulo de ordenar.
- **Sidebar Cart / Floating FAB**: En "Desktop", mantener una barra lateral visible del pedido. En "Móvil", usar un "Floating Action Button" (FAB) que muestre el subtotal y abra un offcanvas modal.
- **WhatsApp Integration**: Si es una landing sencilla, el "Confirmar Pedido" o "Reservar Mesa" debe concatenar los artículos y abrir la API de WhatsApp (`wa.me`) con el texto precargado para agilizar la venta.

## 4. Estética de la Marca

- **Dark Elegance vs Light Clean**: Según la pauta (ej. _Rustic Grill, Smoke, Prime_ = Fondos oscuros, textos brillantes/dorados). (_Vegan, Day-cafe_ = Fondos blancos/cremas, tipografía script).
- **Tipografía Mixta**: Combina una tipografía Sans-Serif geométrica/limpia para el cuerpo del menú (ej. `Work Sans`, `Inter`) con una tipografía Slab o Display imponente para títulos (ej. `Patua One`, `Playfair Display`).

## 5. Rendimiento (Performance)

- **Lazy Loading**: Agrega un skeleton loader o utiliza `loading="lazy"` para las galerías pesadas u optimización global con `next/image`.
- **Accesibilidad**: Mantén un alto contraste para quienes leen el menú desde exteriores asoleados, y asegúrate de que toda interacción táctil (tap targets) tenga un mínimo de 44x44px.
