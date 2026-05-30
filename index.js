const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'gelatoflow_db',
    waitForConnections: true,
    connectionLimit: 10
});

const preciosProductos = {
    'Helado de Cafe y Baileys': 4.50,
    'Helado de Blueberry': 4.00,
    'Helado de Pistacho': 4.80,
    'Helado de Yogurt del Bosque': 4.20,
    'Helado de Vainilla': 3.50,
    'Helado de Fresa': 3.80,
    'Helado de Chocolate': 4.00,
    'Helado de Menta': 3.70,
    'Helado de Caramelo': 4.10,
    'Helado de Mora': 3.90,
    'Helado de Almendras': 4.60,
    'Helado Frutos del Bosque': 4.30,
    'Premium Cafe': 5.20,
    'Premium Blueberry': 5.00,
    'Premium Pistacho': 5.50,
    'Premium Bosque': 5.30,
    'Premium Vainilla': 4.90,
    'Premium Fresa': 5.10
};

app.post('/register', async (req, res) => {
    try {
        const { nombre, correo, password } = req.body;

        await db.execute(
            'INSERT INTO usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)',
            [nombre, correo, password, 'cliente']
        );

        res.json({ success: true });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ success: false, message: 'Error al registrar usuario' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { correo, password } = req.body;
        const [usuarios] = await db.execute(
            'SELECT id, nombre, email, rol FROM usuarios WHERE email = ? AND password = ?',
            [correo, password]
        );

        if (usuarios.length === 0) {
            return res.json({ success: false, message: 'Usuario o contrasena incorrectos' });
        }

        res.json({
            success: true,
            role: usuarios[0].rol || 'cliente',
            email: usuarios[0].email,
            nombre: usuarios[0].nombre
        });
    } catch (error) {
        console.error('Error al iniciar sesion:', error);
        res.status(500).json({ success: false, message: 'Error de servidor' });
    }
});

app.post('/guardar-pedido', async (req, res) => {
    let conexion;

    try {
        conexion = await db.getConnection();
        const { nombre, correo, telefono, fecha, direccion, items } = req.body;

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ success: false, message: 'El carrito esta vacio' });
        }

        await conexion.beginTransaction();

        const sql = `
            INSERT INTO pedidos (nombre, email, telefono, sabor, cantidad, fecha_entrega, direccion)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        for (const item of items) {
            const cantidad = Number(item.cantidad) > 0 ? Number(item.cantidad) : 1;
            await conexion.execute(sql, [
                nombre,
                correo,
                telefono,
                item.nombre,
                cantidad,
                fecha,
                direccion
            ]);
        }

        await conexion.commit();
        res.json({ success: true });
    } catch (error) {
        if (conexion) await conexion.rollback();
        console.error('Error al guardar pedido:', error);
        res.status(500).json({ success: false, message: 'Error en la base de datos' });
    } finally {
        if (conexion) conexion.release();
    }
});

app.get('/mis-pedidos', async (req, res) => {
    try {
        const email = req.query.email;
        const [pedidos] = await db.execute(
            'SELECT * FROM pedidos WHERE email = ? ORDER BY fecha_entrega DESC',
            [email]
        );

        res.json({ success: true, pedidos });
    } catch (error) {
        console.error('Error al obtener pedidos:', error);
        res.status(500).json({ success: false, message: 'Error de base de datos' });
    }
});

app.get('/dashboard', async (req, res) => {
    try {
        const rol = req.query.rol || 'cliente';
        const [productosVendidos] = await db.execute(`
            SELECT sabor AS producto, SUM(cantidad) AS unidades
            FROM pedidos
            GROUP BY sabor
            ORDER BY unidades DESC
            LIMIT 5
        `);

        if (rol !== 'admin') {
            return res.json({ success: true, productosVendidos });
        }

        const [ventasPorDia] = await db.execute(`
            SELECT DAYNAME(fecha_entrega) AS dia, COUNT(*) AS pedidos
            FROM pedidos
            GROUP BY DAYOFWEEK(fecha_entrega), DAYNAME(fecha_entrega)
            ORDER BY DAYOFWEEK(fecha_entrega)
        `);

        const [pedidosPorHora] = await db.execute(`
            SELECT '12:00' AS hora, COUNT(*) AS pedidos
            FROM pedidos
        `);

        const ingresosPorProducto = productosVendidos.map((item) => ({
            producto: item.producto,
            ingresos: Number(item.unidades) * (preciosProductos[item.producto] || 0)
        }));

        res.json({
            success: true,
            productosVendidos,
            ventasPorDia,
            pedidosPorHora,
            ingresosPorProducto
        });
    } catch (error) {
        console.error('Error al cargar dashboard:', error);
        res.status(500).json({ success: false, message: 'Error al cargar dashboard' });
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
