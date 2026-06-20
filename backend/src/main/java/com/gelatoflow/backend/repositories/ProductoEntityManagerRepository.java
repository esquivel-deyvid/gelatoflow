package com.gelatoflow.backend.repositories;

import com.gelatoflow.backend.entities.Producto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductoEntityManagerRepository {

    @PersistenceContext
    private EntityManager entityManager;

    public List<Producto> buscarPorNombreEntityManager(String nombre) {
        return entityManager
                .createQuery(
                        "SELECT p FROM Producto p WHERE LOWER(p.nombre) LIKE LOWER(CONCAT('%', :nombre, '%'))",
                        Producto.class
                )
                .setParameter("nombre", nombre)
                .getResultList();
    }
}