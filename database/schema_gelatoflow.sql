CREATE DATABASE IF NOT EXISTS gelatoflow_db;
USE gelatoflow_db;  


CREATE TABLE `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `sabor` varchar(50) DEFAULT NULL,
  `cantidad` float DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `direccion` text,
  PRIMARY KEY (`id`)
)

CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `rol` enum('admin','vendedor','cliente') DEFAULT 'cliente',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
)