# Documentacion del Proyecto GELATOFLOW

## 1. Nombre del proyecto

El proyecto se llama **GELATOFLOW**.

La idea principal fue crear una pagina web para una heladeria artesanal que no solo muestre productos, sino que tambien funcione como una primera version de sistema de gestion. Por eso el proyecto combina una parte visual para clientes con funciones basicas de administracion, pedidos, login, carrito y dashboard.

## 2. Como empezamos el proyecto

El proyecto inicio con la necesidad de construir una pagina web completa para una heladeria. La base fue una estructura sencilla usando tecnologias web fundamentales:

- **HTML** para construir la estructura de las paginas.
- **CSS** para dar diseno, colores, distribucion y adaptacion a pantallas pequenas.
- **JavaScript** para agregar interactividad.
- **LocalStorage** para guardar datos simples en el navegador.
- **Chart.js** para mostrar graficos en el dashboard.

Al inicio se penso en una pagina que pudiera presentar la marca, mostrar productos y permitir que el usuario navegue por distintas secciones. Luego la idea crecio hacia una experiencia mas funcional: login, registro de usuarios, carrito de compras, formulario de pedidos y graficos de ventas.

## 3. Bases que tuvimos

Las bases principales del proyecto fueron:

- Crear una marca llamada **GELATOFLOW**, orientada a helados artesanales y gestion de ventas.
- Usar una identidad visual llamativa, con colores como rosado, vino y celeste.
- Mostrar productos con imagenes, nombres y precios.
- Crear una navegacion clara mediante un menu lateral.
- Separar la experiencia en varias secciones: inicio, productos, promociones, contacto, sobre nosotros, empleados y dashboard.
- Agregar autenticacion basica para que el usuario primero pase por una pantalla de login.
- Crear una pagina de pedidos donde el cliente pueda completar sus datos.

## 4. Ideas principales del proyecto

La idea no fue construir solo una pagina estatica, sino una plataforma inicial para una heladeria moderna.

Las ideas principales fueron:

- Que el cliente pueda conocer la marca y sus productos.
- Que el usuario pueda registrarse e iniciar sesion.
- Que la pagina tenga un carrito para agregar productos.
- Que exista una seccion de pedidos.
- Que la empresa pueda visualizar informacion de ventas mediante graficos.
- Que el diseno sea alegre, dulce y relacionado con el mundo de los helados.
- Que el proyecto pueda crecer en el futuro hacia una web real con base de datos y pagos.

## 5. Vision del proyecto

La vision de **GELATOFLOW** es convertirse en una pagina web funcional para una heladeria artesanal, capaz de unir tres necesidades:

1. **Presencia digital:** mostrar la marca, productos, promociones y datos de contacto.
2. **Venta online:** permitir que los clientes elijan productos y realicen pedidos.
3. **Gestion interna:** ayudar a controlar empleados, ventas, pedidos e informacion del negocio.

En una version final, GELATOFLOW podria funcionar como una tienda online real para una heladeria, con usuarios, pedidos guardados, pagos, inventario, panel administrativo y reportes.

## 6. Objetivos del proyecto

### Objetivo general

Desarrollar una pagina web para una heladeria artesanal que permita mostrar productos, gestionar usuarios, simular pedidos y visualizar informacion de ventas.

### Objetivos especificos

- Crear una interfaz atractiva y facil de usar.
- Mostrar un catalogo de helados con imagenes y precios.
- Permitir que el usuario agregue productos al carrito.
- Implementar login y registro basico con `localStorage`.
- Crear una pagina para registrar pedidos.
- Mostrar promociones de la heladeria.
- Incluir informacion de contacto y ubicacion.
- Agregar una seccion de empleados.
- Crear un dashboard visual con graficos de ventas.
- Hacer que la pagina se adapte a celulares y pantallas pequenas.

## 7. Arquitectura del proyecto

Actualmente el proyecto esta organizado de la siguiente manera:

```text
proyecto gelato/
|-- index.html
|-- Login.html
|-- Registro.html
|-- css/
|   `-- estilos.css
`-- img/
    |-- CARRUSEL1.webp
    |-- HELADO BLUBERRY.webp
    |-- Helado de Cafe y Baileys.webp
    |-- Helado de Pistacho.webp
    |-- Helado de Yogurt del Bosque.webp
    `-- LOGO.png
```

## 8. Funcion de cada archivo

### `index.html`

Es la pagina principal del sistema. Contiene:

- Encabezado con logo, contacto, horario, ubicacion, carrito y boton de cerrar sesion.
- Validacion inicial para comprobar si existe una sesion activa.
- Menu lateral de navegacion.
- Seccion de servicios.
- Catalogo de productos.
- Promociones.
- Formulario de contacto.
- Informacion sobre GELATOFLOW.
- Seccion de empleados.
- Dashboard con graficos.
- Logica del carrito de compras.
- Logica para cerrar sesion.
- Graficos creados con Chart.js.

### `Login.html`

Es la pagina de autenticacion. Contiene:

- Formulario de inicio de sesion.
- Formulario de registro de cuenta.
- Cambio entre pestanas de login y registro.
- Guardado de usuarios en `localStorage`.
- Validacion de correo y contrasena.
- Activacion de sesion cuando el usuario inicia correctamente.

### `Registro.html`

Es la pagina para hacer pedidos. Contiene:

- Formulario con nombre, correo, telefono, sabor, cantidad, fecha de entrega y direccion.
- Boton para confirmar pedido.
- Enlace para regresar al inicio.

Actualmente este formulario solo captura datos visualmente, pero todavia no guarda pedidos en una base de datos.

### `css/estilos.css`

Es la hoja de estilos principal. Define:

- Diseno general.
- Encabezado fijo.
- Menu lateral.
- Galeria de productos.
- Botones.
- Formularios.
- Carrito.
- Dashboard.
- Login y registro.
- Adaptacion responsive para tablets y celulares.

### Carpeta `img`

Contiene las imagenes usadas en la web:

- Logo de GELATOFLOW.
- Imagen principal de fondo.
- Imagenes de helados para el catalogo.

## 9. Proceso que fuimos realizando

### Primera etapa: estructura principal

Se comenzo creando la estructura base de la pagina principal con HTML. Se definio el nombre de la marca, el encabezado, el menu principal y las secciones necesarias para presentar el negocio.

### Segunda etapa: identidad visual

Luego se trabajo el diseno con CSS. Se eligieron colores relacionados con una heladeria: rosado, vino, blanco y celeste. Tambien se agregaron imagenes de helados y un logo para reforzar la identidad de GELATOFLOW.

### Tercera etapa: catalogo de productos

Despues se creo la seccion de productos. Se agregaron tarjetas con imagen, nombre y precio. Tambien se separaron productos normales y productos premium.

### Cuarta etapa: navegacion y secciones

Se agrego el menu lateral para moverse rapidamente entre las secciones:

- Inicio
- Productos
- Promociones
- Contacto
- Sobre Nosotros
- Empleados
- Dashboard
- Pedidos

### Quinta etapa: formularios

Se agregaron formularios para contacto, empleados, registro de usuarios, inicio de sesion y pedidos. Estos formularios ayudan a que la pagina parezca mas completa y cercana a una aplicacion real.

### Sexta etapa: login y registro

Se creo la pagina `Login.html` para que el usuario pueda registrarse e iniciar sesion. La informacion se guarda por ahora en el navegador usando `localStorage`.

Tambien se agrego una proteccion basica en `index.html`: si no hay sesion activa, el usuario es enviado al login.

### Septima etapa: carrito de compras

Se agrego un carrito basico dentro de `index.html`. Cada producto recibe un boton de "Agregar al carrito". Cuando se agrega un producto:

- Aumenta la cantidad del carrito.
- Se muestra el producto dentro del panel.
- Se calcula el total.

### Octava etapa: dashboard

Se agrego Chart.js para mostrar graficos de ventas. El dashboard incluye:

- Ventas por dia.
- Productos mas vendidos.
- Ingresos anuales.
- Pedidos por hora.

Los datos actualmente son simulados y se actualizan visualmente cada cierto tiempo para dar sensacion de movimiento.

### Novena etapa: responsive design

Se agregaron reglas CSS con `@media` para que la pagina se vea mejor en tablets y celulares. En pantallas pequenas, el menu deja de ser lateral y pasa a mostrarse como una barra superior desplazable.

## 10. Estado actual del proyecto

Actualmente GELATOFLOW ya tiene una version visual y funcional basica.

Lo que ya funciona:

- Pagina principal con secciones completas.
- Login y registro basico.
- Proteccion simple de sesion.
- Cierre de sesion.
- Catalogo de productos.
- Carrito visual con total.
- Formulario de pedidos.
- Formulario de contacto.
- Seccion de empleados.
- Dashboard con graficos.
- Diseno responsive.

Lo que todavia es simulado:

- Los usuarios se guardan solo en el navegador.
- Los pedidos no se almacenan realmente.
- El carrito no genera una compra final.
- Los graficos usan datos de prueba.
- No existe una base de datos real.
- No hay servidor backend.
- No hay pasarela de pago.
- No hay panel administrativo real.

## 11. Que falta para que sea una pagina web 100% real y funcional

Para convertir GELATOFLOW en una pagina real y lista para usarse en produccion, falta implementar lo siguiente:

### 1. Backend real

Se necesita un servidor que procese datos reales. Puede construirse con tecnologias como:

- Node.js con Express.
- PHP.
- Python con Django o Flask.
- Java con Spring Boot.

El backend permitiria manejar usuarios, productos, pedidos, empleados, ventas y reportes de forma segura.

### 2. Base de datos

Actualmente los datos se guardan en `localStorage`, que solo funciona en el navegador del usuario. Para una pagina real se necesita una base de datos como:

- MySQL.
- PostgreSQL.
- MongoDB.
- Firebase.

La base de datos deberia guardar:

- Usuarios.
- Productos.
- Pedidos.
- Clientes.
- Empleados.
- Inventario.
- Ventas.
- Promociones.

### 3. Autenticacion segura

El login actual es solo una simulacion. Para una web real se necesita:

- Guardar contrasenas encriptadas.
- Validar usuarios desde el servidor.
- Usar sesiones seguras o tokens.
- Manejar roles, por ejemplo cliente, empleado y administrador.
- Proteger rutas privadas.

### 4. Gestion real de productos

Los productos ahora estan escritos directamente en el HTML. En una version real, deberian venir desde una base de datos.

Tambien seria necesario crear un panel para:

- Agregar productos.
- Editar precios.
- Cambiar imagenes.
- Activar o desactivar productos.
- Controlar stock.

### 5. Carrito y checkout completo

El carrito actual suma productos, pero no finaliza una compra. Falta:

- Guardar el carrito.
- Permitir cambiar cantidades.
- Eliminar productos.
- Confirmar pedido.
- Calcular envio.
- Registrar la compra.
- Enviar comprobante al cliente.

### 6. Pagos online

Para vender de verdad, se necesita integrar una pasarela de pago como:

- Mercado Pago.
- PayPal.
- Stripe.
- Culqi.
- Pago contra entrega.

### 7. Sistema real de pedidos

La pagina `Registro.html` debe conectarse con el backend para guardar los pedidos. Tambien deberia permitir:

- Ver estado del pedido.
- Asignar repartidor.
- Confirmar entrega.
- Notificar al cliente.
- Generar historial de pedidos.

### 8. Panel administrativo

Se necesita un panel para el negocio, donde el administrador pueda:

- Ver pedidos recibidos.
- Administrar productos.
- Administrar empleados.
- Revisar ventas.
- Ver clientes.
- Controlar promociones.
- Revisar estadisticas reales.

### 9. Dashboard con datos reales

Los graficos actuales usan informacion simulada. En una version real deberian mostrar datos desde la base de datos:

- Ventas reales por dia.
- Productos mas vendidos.
- Ingresos mensuales y anuales.
- Pedidos por hora.
- Clientes frecuentes.
- Rendimiento de promociones.

### 10. Validaciones y seguridad

Se deben agregar validaciones mas completas:

- Validar formularios desde el frontend y backend.
- Evitar datos incompletos.
- Proteger contra ataques comunes.
- Controlar errores.
- Evitar que un usuario vea informacion que no le corresponde.

### 11. Mejoras de experiencia de usuario

Para mejorar la experiencia faltaria:

- Mensajes de confirmacion.
- Pantallas de carga.
- Alertas visuales.
- Buscador de productos.
- Filtros por sabor, precio o categoria.
- Edicion de cantidades en el carrito.
- Confirmacion antes de cerrar sesion.
- Historial de pedidos del cliente.

### 12. Publicacion en internet

Para que la pagina sea accesible publicamente se necesita:

- Comprar o configurar un dominio.
- Contratar hosting o usar una plataforma cloud.
- Subir el frontend.
- Subir el backend.
- Configurar base de datos.
- Activar HTTPS.
- Probar la pagina en produccion.

## 12. Posible arquitectura final

Una arquitectura real podria ser:

```text
Cliente navegador
    |
    | HTML, CSS, JavaScript
    v
Frontend GELATOFLOW
    |
    | Peticiones HTTP / API REST
    v
Backend
    |
    | Consultas seguras
    v
Base de datos
```

Tambien se podria dividir por modulos:

- Modulo de usuarios.
- Modulo de productos.
- Modulo de carrito.
- Modulo de pedidos.
- Modulo de pagos.
- Modulo de empleados.
- Modulo de reportes.
- Modulo de promociones.

## 13. Conclusion

GELATOFLOW ya tiene una base importante como prototipo web. Cuenta con identidad visual, navegacion, catalogo, login, carrito, pedidos y dashboard. Esto demuestra la idea principal del proyecto y permite visualizar como seria una plataforma para una heladeria artesanal.

El siguiente gran paso es pasar de una version estatica y simulada a una version conectada con backend y base de datos. Con eso, GELATOFLOW podria convertirse en una pagina web real, funcional y preparada para recibir clientes, registrar pedidos y administrar ventas de una heladeria.
