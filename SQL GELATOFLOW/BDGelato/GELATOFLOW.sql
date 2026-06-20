	CREATE DATABASE gelatoflow_db;
	USE gelatoflow_db;

	CREATE TABLE usuarios (
		id INT AUTO_INCREMENT PRIMARY KEY,
		nombre VARCHAR(100),
		email VARCHAR(100) UNIQUE,
		password VARCHAR(255),
		rol ENUM('admin', 'cliente') DEFAULT 'cliente'
	);
	USE gelatoflow_db;
	ALTER TABLE usuarios MODIFY COLUMN rol ENUM('admin', 'cliente') DEFAULT 'cliente';
ALTER TABLE usuarios MODIFY COLUMN rol ENUM('admin', 'vendedor', 'cliente') DEFAULT 'cliente';
	INSERT INTO usuarios (nombre, email, password, rol) 
	VALUES ('Administrador', 'admin@gelatoflow.com', 'admin123', 'admin');
	CREATE TABLE pedidos (
		id INT AUTO_INCREMENT PRIMARY KEY,
		nombre VARCHAR(100),
		email VARCHAR(100),
		sabor VARCHAR(50),
		cantidad FLOAT
	);
    ALTER TABLE pedidos 
ADD COLUMN telefono VARCHAR(20),
ADD COLUMN fecha_entrega DATE,
ADD COLUMN direccion TEXT;

SELECT * FROM usuarios;
SELECT * FROM pedidos;