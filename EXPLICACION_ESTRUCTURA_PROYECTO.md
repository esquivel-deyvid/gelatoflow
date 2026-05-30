# Explicacion de la Estructura del Proyecto GELATOFLOW

## 1. Objetivo de este documento

Este documento explica como esta construido el proyecto **GELATOFLOW** por dentro. La idea es entender para que sirve cada archivo, cada parte importante del HTML, como se conecta con el CSS, como funciona JavaScript y por que se usaron etiquetas como `div`, `section`, `form`, `link`, `script`, `class` e `id`.

El proyecto esta hecho con tecnologias web basicas:

- **HTML:** estructura y contenido.
- **CSS:** diseno visual.
- **JavaScript:** interactividad.
- **Chart.js:** graficos del dashboard.
- **LocalStorage:** almacenamiento temporal en el navegador.

## 2. Estructura general de carpetas

```text
proyecto gelato/
|-- index.html
|-- Login.html
|-- Registro.html
|-- DOCUMENTACION_PROYECTO.md
|-- EXPLICACION_ESTRUCTURA_PROYECTO.md
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

Esta estructura separa el proyecto por responsabilidades:

- Los archivos `.html` contienen las paginas.
- La carpeta `css` contiene los estilos.
- La carpeta `img` contiene las imagenes.
- Los archivos `.md` contienen documentacion.

Separar los archivos ayuda a que el proyecto sea mas ordenado, facil de mantener y facil de explicar.

## 3. Como se conecta HTML con CSS

En los archivos HTML se usa esta linea:

```html
<link rel="stylesheet" href="css/estilos.css">
```

Esta etiqueta se coloca dentro de `<head>` y sirve para conectar la pagina HTML con la hoja de estilos.

### Para que sirve

Sin esta linea, la pagina se veria sin diseno: texto simple, imagenes sin orden, formularios basicos y sin colores personalizados.

### Como funciona

- `link` indica que vamos a enlazar un archivo externo.
- `rel="stylesheet"` dice que el archivo enlazado es una hoja de estilos.
- `href="css/estilos.css"` indica la ruta donde esta el archivo CSS.

Gracias a esta conexion, todos los elementos con clases como `.encabezado`, `.menu`, `.producto`, `.seccion` o `.auth-body` reciben estilos visuales.

## 4. Estructura base de los HTML

Los archivos HTML del proyecto siguen una estructura parecida:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GELATOFLOW</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    Contenido visible de la pagina
</body>
</html>
```

### `<!DOCTYPE html>`

Indica que el documento usa HTML5. Es importante porque le dice al navegador como interpretar la pagina.

### `<html>`

Es la raiz del documento. Todo el contenido HTML va dentro de esta etiqueta.

### `<head>`

Contiene informacion que no se muestra directamente en la pagina, pero que el navegador necesita.

Dentro del `head` usamos:

- `meta charset="UTF-8"` para aceptar caracteres especiales.
- `meta viewport` para que la pagina se adapte a celulares.
- `title` para definir el titulo de la pestana del navegador.
- `link` para conectar el CSS.
- `script` cuando necesitamos ejecutar JavaScript antes de mostrar la pagina.

### `<body>`

Contiene todo lo que el usuario ve: encabezado, menu, productos, formularios, botones, imagenes y secciones.

## 5. Uso de `script` en el encabezado de `index.html`

En `index.html` se usa este codigo dentro del `head`:

```html
<script>
    if (localStorage.getItem('gelatoflowSesionActiva') !== 'true') {
        window.location.href = 'Login.html';
    }
</script>
```

### Para que sirve

Sirve para proteger la pagina principal. Si el usuario no ha iniciado sesion, el sistema lo envia automaticamente a `Login.html`.

### Por que esta en el encabezado

Se coloca en el `head` para que se ejecute antes de cargar toda la pagina. Asi evitamos que una persona vea el contenido principal si no tiene una sesion activa.

### Como funciona

- `localStorage.getItem('gelatoflowSesionActiva')` revisa si existe una sesion guardada.
- Si el valor no es `'true'`, significa que no hay sesion.
- `window.location.href = 'Login.html'` redirige al login.

## 6. Uso de Chart.js

En `index.html` tambien se usa:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

### Para que sirve

Esta linea conecta el proyecto con la libreria **Chart.js**, que permite crear graficos en el dashboard.

### Como se veria sin esto

Sin Chart.js, los elementos `<canvas>` del dashboard aparecerian vacios, porque no habria libreria para dibujar los graficos.

## 7. Estructura de `index.html`

`index.html` es la pagina principal del proyecto. Es la pagina mas completa porque contiene la mayoria de secciones.

Sus partes principales son:

- Encabezado.
- Menu lateral.
- Contenido de inicio.
- Productos.
- Promociones.
- Contacto.
- Sobre nosotros.
- Empleados.
- Dashboard.
- JavaScript del carrito, graficos y sesion.

## 8. Encabezado principal

El encabezado se construye con:

```html
<div class="encabezado">
```

### Para que usamos `div`

`div` es una etiqueta contenedora. No tiene significado visual por si sola, pero sirve para agrupar elementos y aplicarles estilos con CSS.

En este caso, `.encabezado` agrupa:

- Logo.
- Nombre de la marca.
- Contacto.
- Horario.
- Ubicacion.
- Carrito.
- Boton de cerrar sesion.

### Como se ve

Se ve como una franja superior fija, blanca, con el logo a la izquierda y la informacion del negocio a la derecha.

## 9. Uso de `class`

Ejemplo:

```html
<div class="encabezado-derecha">
```

### Para que sirve `class`

`class` permite identificar uno o varios elementos para aplicarles estilos desde CSS.

Por ejemplo, en CSS existe:

```css
.encabezado-derecha {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
}
```

Esto hace que los elementos del lado derecho del encabezado se acomoden en fila, separados y alineados.

### Diferencia entre `class` e `id`

- `class` se puede repetir en varios elementos.
- `id` debe ser unico en la pagina.

Ejemplo de clase repetida:

```html
<div class="producto">
```

Hay muchos productos y todos comparten el mismo estilo.

Ejemplo de id unico:

```html
<span id="carritoCantidad">0</span>
```

Solo existe un contador del carrito.

## 10. Logo e imagenes

El logo se agrega asi:

```html
<img src="img/LOGO.png?v=2" alt="Logo GELATOFLOW" class="logo">
```

### Para que sirve

Muestra el logo de la marca en el encabezado.

### Partes importantes

- `src` indica la ruta de la imagen.
- `alt` describe la imagen si no carga o para accesibilidad.
- `class="logo"` permite darle tamano desde CSS.
- `?v=2` ayuda a que el navegador cargue una version actualizada de la imagen.

## 11. Iconos en el encabezado

En el encabezado se usan simbolos visuales como iconos de telefono, reloj y ubicacion:

```html
[icono telefono] Contacto
[icono reloj] Horario
[icono ubicacion] Ubicacion
```

### Para que sirven

Sirven como iconos rapidos para que el usuario identifique informacion importante sin leer demasiado.

### Como se verian

Se ven al lado del texto de contacto, horario y ubicacion. Ayudan a que el encabezado sea mas visual.

## 12. Carrito de compras

El carrito usa varios elementos:

```html
<button type="button" class="carrito-boton" id="carritoBoton">
    Carrito <span id="carritoCantidad">0</span>
</button>
```

### Para que sirve

Es el boton que abre y cierra el panel del carrito.

### Elementos importantes

- `button` crea un boton.
- `class="carrito-boton"` permite darle estilo.
- `id="carritoBoton"` permite encontrarlo con JavaScript.
- `span id="carritoCantidad"` muestra la cantidad de productos.

El panel del carrito se crea con:

```html
<div class="carrito-panel" id="carritoPanel">
```

Este panel esta oculto al inicio. Cuando el usuario hace clic, JavaScript agrega o quita la clase `activo`, y el CSS muestra el panel.

## 13. Menu lateral

El menu se construye con:

```html
<div class="menu">
    <h2>Menu Principal</h2>
    <a href="#inicio">Inicio</a>
    <a href="#productos">Productos</a>
</div>
```

### Para que sirve

Permite navegar por las secciones de la misma pagina.

### Como funciona

Los enlaces usan `href="#productos"` para moverse hacia una seccion con ese `id`.

Ejemplo:

```html
<section id="productos" class="seccion">
```

Cuando el usuario hace clic en "Productos", el navegador baja automaticamente hasta esa seccion.

### Como se ve

En escritorio se ve como una barra lateral izquierda de color vino. En celular cambia a una barra horizontal para que sea mas comoda.

## 14. Secciones con `section`

Ejemplo:

```html
<section id="productos" class="seccion">
```

### Para que sirve `section`

`section` se usa para dividir el contenido en bloques importantes. Es mas semantico que un `div`, porque indica que esa parte es una seccion del documento.

En el proyecto usamos secciones para:

- Productos.
- Promociones.
- Contacto.
- Sobre nosotros.
- Empleados.
- Dashboard.

### Por que usamos `id`

El `id` permite enlazar desde el menu.

Ejemplo:

- Menu: `<a href="#productos">Productos</a>`
- Seccion: `<section id="productos">`

## 15. Galeria de productos

Los productos estan dentro de:

```html
<div class="productos-galeria">
```

Cada producto usa:

```html
<div class="producto">
    <img src="..." alt="..." class="producto-img">
    <h3>Helado de Pistacho</h3>
    <p><strong>$4.80</strong></p>
</div>
```

### Para que sirve

Sirve para mostrar cada helado como una tarjeta con imagen, nombre y precio.

### Como se ve

En computadora se ven varios productos en filas y columnas. En pantallas pequenas se acomodan en menos columnas hasta quedar uno por fila.

### Por que usamos la misma clase `.producto`

Porque todos los productos necesitan el mismo diseno: fondo blanco, borde redondeado, sombra, imagen y boton de carrito.

## 16. Botones agregados con JavaScript

En el HTML los productos no tienen escrito manualmente el boton "Agregar al carrito". El JavaScript lo crea automaticamente:

```javascript
document.querySelectorAll('.producto').forEach((producto) => {
    const boton = document.createElement('button');
    boton.textContent = 'Agregar al carrito';
    producto.appendChild(boton);
});
```

### Para que sirve

Sirve para evitar repetir el mismo boton en cada producto. JavaScript busca todos los elementos con clase `.producto` y les agrega un boton.

### Como se ve

Debajo de cada producto aparece un boton vino que dice "Agregar al carrito".

## 17. Formularios

El proyecto usa formularios en varias partes:

- Contacto.
- Empleados.
- Login.
- Registro.
- Pedido.

Ejemplo:

```html
<form>
    <label>Nombre:</label>
    <input type="text" required>
    <input type="submit" value="Enviar Mensaje">
</form>
```

### Para que sirve `form`

Agrupa campos que el usuario debe completar.

### Para que sirve `label`

Indica el nombre o descripcion del campo.

### Para que sirve `input`

Permite que el usuario escriba informacion.

### Para que sirve `required`

Obliga a completar el campo antes de enviar el formulario.

## 18. Dashboard y `canvas`

En la seccion dashboard se usan elementos como:

```html
<canvas id="ventasDias"></canvas>
```

### Para que sirve `canvas`

`canvas` es un espacio donde JavaScript puede dibujar graficos, figuras o elementos visuales.

En este proyecto Chart.js usa esos `canvas` para mostrar:

- Grafico de barras.
- Grafico circular.
- Graficos de linea.

### Como se ve

Se ve como un panel de reportes con graficos de ventas y pedidos.

## 19. JavaScript del dashboard

El dashboard crea graficos con codigo como:

```javascript
const ventasDias = new Chart(document.getElementById('ventasDias'), {
    type: 'bar',
    data: {
        labels: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'],
        datasets: [{
            label: 'Ventas ($)',
            data: [620, 780, 690, 910, 1250, 1480, 1320]
        }]
    }
});
```

### Para que sirve

Crea un grafico de barras con ventas de lunes a domingo.

### Por que usamos datos simulados

Porque todavia no existe base de datos. Los datos se escriben manualmente para mostrar como se veria el dashboard real.

## 20. JavaScript del carrito

El carrito usa un arreglo:

```javascript
const carrito = [];
```

### Para que sirve

Guarda temporalmente los productos que el usuario agrega.

Cuando el usuario hace clic en "Agregar al carrito":

- Se obtiene el nombre del producto.
- Se obtiene el precio.
- Se agrega al arreglo `carrito`.
- Se actualiza el contador.
- Se calcula el total.
- Se muestra el panel del carrito.

### Como se ve

El usuario ve el numero del carrito subir y una lista con los productos agregados.

## 21. Cierre de sesion

El boton de cerrar sesion usa JavaScript:

```javascript
cerrarSesion.addEventListener('click', () => {
    localStorage.removeItem('gelatoflowSesionActiva');
    localStorage.removeItem('gelatoflowUsuarioActual');
    window.location.href = 'Login.html';
});
```

### Para que sirve

Elimina la sesion guardada y envia al usuario al login.

### Como se ve

El usuario hace clic en "Cerrar sesion" y vuelve a la pantalla de inicio de sesion.

## 22. Estructura de `Login.html`

`Login.html` tiene dos formularios dentro de un mismo panel:

- Iniciar sesion.
- Crear cuenta.

Se usan botones tipo pestana:

```html
<button type="button" class="auth-tab activo" id="tabLogin">Iniciar sesion</button>
<button type="button" class="auth-tab" id="tabRegistro">Crear cuenta</button>
```

### Para que sirven

Permiten cambiar entre el formulario de login y el formulario de registro.

### Como funciona

JavaScript agrega o quita la clase `activo`. En CSS, solo se muestra el formulario que tiene esa clase.

## 23. LocalStorage en `Login.html`

Se usan funciones como:

```javascript
function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('gelatoflowUsuarios')) || [];
}
```

### Para que sirve

Obtiene los usuarios guardados en el navegador.

Cuando alguien se registra, se guarda su nombre, correo y contrasena en `localStorage`.

### Importante

Esto sirve como practica o prototipo, pero no es seguro para una pagina real. En una web real, los usuarios deben guardarse en una base de datos y las contrasenas deben estar encriptadas.

## 24. Estructura de `Registro.html`

`Registro.html` es la pagina para hacer pedidos.

Contiene un formulario con:

- Nombre.
- Correo.
- Telefono.
- Sabor preferido.
- Cantidad.
- Fecha de entrega.
- Direccion.

Ejemplo:

```html
<select name="sabor" required>
    <option>Vainilla</option>
    <option>Chocolate</option>
    <option>Fresa</option>
</select>
```

### Para que sirve `select`

Permite elegir una opcion de una lista.

### Como se ve

Se ve como una caja desplegable donde el usuario selecciona el sabor del helado.

## 25. Explicacion general del CSS

El archivo `css/estilos.css` define como se ve todo el proyecto.

CSS trabaja con selectores:

```css
.producto {
    background-color: white;
    padding: 15px;
    border-radius: 10px;
}
```

### Para que sirve

Este codigo hace que cada producto se vea como una tarjeta.

## 26. Reset basico

Al inicio del CSS se usa:

```css
body {
    margin: 0;
    font-family: Arial, sans-serif;
}

* {
    box-sizing: border-box;
}
```

### Para que sirve

- `margin: 0` elimina el margen automatico del navegador.
- `font-family` define la fuente principal.
- `box-sizing: border-box` hace mas facil controlar tamanos, padding y bordes.

## 27. Estilos del encabezado

```css
.encabezado {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
}
```

### Para que sirve

Hace que el encabezado:

- Se vea en fila.
- Tenga el logo a un lado y la informacion al otro.
- Quede fijo arriba aunque el usuario baje por la pagina.

### Como se ve

Como una barra superior permanente.

## 28. Estilos del menu

```css
.menu {
    width: 250px;
    background-color: #9b004d;
    position: fixed;
}
```

### Para que sirve

Crea el menu lateral izquierdo.

### Como se ve

Una columna de color vino con enlaces blancos.

## 29. Uso de Flexbox

El proyecto usa `display: flex` en varias partes.

### Para que sirve

Flexbox ayuda a acomodar elementos en fila o columna de manera ordenada.

Ejemplo:

```css
.logo-nombre {
    display: flex;
    align-items: center;
    gap: 15px;
}
```

Esto coloca el logo y el nombre GELATOFLOW uno al lado del otro.

## 30. Uso de Grid

El proyecto usa `display: grid` para productos y dashboard.

Ejemplo:

```css
.productos-galeria {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
}
```

### Para que sirve

Organiza los productos en columnas iguales.

### Como se ve

En computadora se muestran 4 productos por fila.

## 31. Colores del proyecto

Los colores principales son:

- `#9b004d`: vino, usado para marca, menu y botones.
- `#FF69B4`: rosado, usado para titulos y botones.
- `#00BFFF`: celeste, usado para hover y contraste.
- `#ffffff`: blanco, usado para tarjetas y fondos.
- `#333`: gris oscuro, usado para texto.

### Por que se eligieron

Porque transmiten una sensacion dulce, moderna y relacionada con una heladeria artesanal.

## 32. Hover y transiciones

Ejemplo:

```css
.agregar-carrito:hover {
    background-color: #00BFFF;
    transform: translateY(-2px);
}
```

### Para que sirve

Hace que los botones reaccionen cuando el usuario pasa el mouse encima.

### Como se ve

El boton cambia de color y sube ligeramente, dando una sensacion interactiva.

## 33. Responsive design

El CSS usa:

```css
@media (max-width: 900px) {
    .menu {
        position: static;
        width: 100%;
    }
}
```

### Para que sirve

Permite que la pagina se adapte a pantallas pequenas.

### Como cambia la pagina

En computadora:

- Encabezado fijo.
- Menu lateral.
- Productos en 4 columnas.
- Dashboard en 2 columnas.

En celular:

- Encabezado en columna.
- Menu horizontal.
- Productos en 1 o 2 columnas.
- Dashboard en una sola columna.

## 34. Por que usamos varias paginas HTML

El proyecto usa:

- `index.html` para la pagina principal.
- `Login.html` para acceso y registro de usuarios.
- `Registro.html` para pedidos.

### Por que se separo asi

Porque cada pagina tiene una funcion diferente. Esto hace que el proyecto sea mas ordenado:

- El login no se mezcla con el catalogo.
- El formulario de pedido esta separado.
- La pagina principal concentra la experiencia general.

## 35. Como se veria el flujo del usuario

El flujo actual es:

1. El usuario abre `index.html`.
2. Si no tiene sesion, es enviado a `Login.html`.
3. En `Login.html` puede registrarse o iniciar sesion.
4. Si inicia sesion correctamente, entra a `index.html`.
5. Puede navegar por productos, promociones, contacto y dashboard.
6. Puede agregar productos al carrito.
7. Puede ir a `Registro.html` para hacer un pedido.
8. Puede cerrar sesion y volver al login.

## 36. Que partes son reales y que partes son prototipo

### Partes funcionales

- Navegacion interna.
- Login basico.
- Registro basico.
- Carrito visual.
- Dashboard visual.
- Formularios.
- Responsive design.

### Partes prototipo

- No hay base de datos real.
- No hay backend.
- No hay pagos.
- No se guardan pedidos reales.
- Los graficos usan datos simulados.
- Los empleados estan escritos directamente en HTML.

## 37. Conclusiones tecnicas

GELATOFLOW esta construido como un prototipo web funcional usando HTML, CSS y JavaScript. La estructura actual permite entender como se arma una pagina web real:

- HTML crea las partes visibles.
- CSS define como se ven.
- JavaScript agrega comportamiento.
- LocalStorage simula almacenamiento.
- Chart.js permite mostrar reportes visuales.

El proyecto ya tiene una base clara para crecer. El siguiente paso tecnico seria conectar los formularios, productos, usuarios, carrito y dashboard con un backend y una base de datos real.
