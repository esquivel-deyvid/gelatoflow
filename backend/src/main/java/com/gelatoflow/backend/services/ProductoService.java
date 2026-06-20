package com.gelatoflow.backend.services;

import com.gelatoflow.backend.entities.Producto;
import com.gelatoflow.backend.repositories.ProductoEntityManagerRepository;
import com.gelatoflow.backend.repositories.ProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepository productoRepository;

    @Autowired
    private ProductoEntityManagerRepository productoEntityManagerRepository;

    // LISTAR TODOS
    @Transactional(readOnly = true)
    public List<Producto> listarTodos() {
        return productoRepository.findAll();
    }

    // BUSCAR POR ID
    @Transactional(readOnly = true)
    public Optional<Producto> buscarPorId(Long id) {
        return productoRepository.findById(id);
    }

    // PAGINACIÓN
    @Transactional(readOnly = true)
    public Page<Producto> listarPaginado(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productoRepository.findAll(pageable);
    }

    // ENTITY MANAGER
    @Transactional(readOnly = true)
    public List<Producto> buscarPorNombreEntityManager(String nombre) {
        return productoEntityManagerRepository.buscarPorNombreEntityManager(nombre);
    }

    // GUARDAR
    @Transactional(rollbackFor = Exception.class)
    public Producto guardar(Producto producto) {
        return productoRepository.save(producto);
    }

    // ACTUALIZAR
    @Transactional(rollbackFor = Exception.class)
    public Optional<Producto> actualizar(Long id, Producto productoDetalles) {
        return productoRepository.findById(id).map(productoExistente -> {
            productoExistente.setNombre(productoDetalles.getNombre());
            productoExistente.setDescripcion(productoDetalles.getDescripcion());
            productoExistente.setPrecio(productoDetalles.getPrecio());
            productoExistente.setStock(productoDetalles.getStock());
            productoExistente.setImagenUrl(productoDetalles.getImagenUrl());

            return productoRepository.save(productoExistente);
        });
    }

    // ELIMINAR
    @Transactional(rollbackFor = Exception.class)
    public boolean eliminar(Long id) {
        return productoRepository.findById(id).map(producto -> {
            productoRepository.delete(producto);
            return true;
        }).orElse(false);
    }
}