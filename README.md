# ZYRON — tienda de comercio electrónico

**Alumna:** Arturo Eduardo Gonzalez Hoyos
**Proyecto:** variante individual de Luddo Store  
**Giro comercial:** videojuegos, consolas y accesorios gaming  
**Tecnologías:** HTML5, CSS3 y JavaScript puro (vanilla JS).

## Cómo ejecutar

1. Descomprime el ZIP.
2. Abre `index.html` en Google Chrome, Edge o Firefox.
3. Si tu navegador restringe `localStorage` al abrir archivos locales, abre la carpeta en Visual Studio Code con una extensión de servidor local, como Live Server. El proyecto sigue siendo HTML/CSS/JS puro.

## Archivos

- `index.html`: estructura principal y carga de estilos/scripts.
- `styles.css`: diseño visual y estilos responsivos.
- `app.js`: productos, navegación, carrito, usuarios, pedidos, administrador y persistencia.
- `assets/`: logotipos SVG e imágenes JPG locales.

## Funcionalidades

1. **Catálogo:** 14 productos iniciales con imágenes, precios, categorías, búsqueda, ordenamiento y vista de detalle.
2. **Carrito:** agregar, quitar, variar cantidades, calcular envío y total, y respetar existencias.
3. **Usuarios:** registro, inicio/cierre de sesión simulados y perfil editable.
4. **Pedidos:** compra académica simulada, dirección, folio, productos, total e historial por cliente.
5. **Administrador:** resumen real de los datos de prueba, alta/edición de productos, inventario, pedidos, estados y usuarios activos/inactivos.
6. **Funcionalidad diferenciadora de Luddo:** filtros para videojuegos por edad recomendada, cantidad mínima de jugadores y duración estimada en horas.
7. **Persistencia:** todas las pantallas utilizan `localStorage`. La información se conserva al recargar dentro del mismo navegador y origen.

## Cuenta de administrador para demostración

**Correo:** `admin@zyron.demo`  
**Contraseña:** `Admin123!`

Para probar como cliente, registra un usuario nuevo con datos ficticios desde **REGÍSTRATE AQUÍ**.

## Guion de demostración

1. Abrir el catálogo y mostrar las categorías y los filtros de edad/jugadores/duración.
2. Agregar un juego al carrito, aumentar la cantidad y recargar; el carrito debe conservarse.
3. Crear un usuario de prueba, cerrar sesión e iniciar sesión de nuevo.
4. Editar el teléfono del perfil y guardar; recargar y verificar.
5. Realizar una compra simulada y revisar el historial y el folio del pedido.
6. Salir e iniciar sesión como administrador.
7. Abrir **Pedidos**, ver el pedido de prueba y cambiar su estado a **CANCELADO**; verificar que se devuelve el inventario.
8. Abrir **Productos** y editar precio o existencias; recargar y volver a revisar.
9. Agregar un producto, verlo en catálogo y desactivar/reactivar un usuario de prueba.
