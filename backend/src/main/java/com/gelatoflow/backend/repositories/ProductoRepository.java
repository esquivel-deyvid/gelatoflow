package com.gelatoflow.backend.repositories;

import com.gelatoflow.backend.entities.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

    // JPQL con Named Parameter
@Query("SELECT p FROM Producto p WHERE p.nombre = :nombre")
List<Producto> buscarPorNombre(@Param("nombre") String nombre);


}