package com.gelatoflow.backend.controllers;

import com.gelatoflow.backend.entities.Producto;
import com.gelatoflow.backend.services.ProductoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(originPatterns = {
        "http://localhost:4200",
        "https://*.vercel.app"
})
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public List<Producto> listar() {
        return productoService.listarTodos();
    }

    @GetMapping("/pagina")
    public Page<Producto> listarPaginado(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size
    ) {
        return productoService.listarPaginado(page, size);
    }

    @GetMapping("/buscar-em")
    public List<Producto> buscarPorNombreEntityManager(@RequestParam String nombre) {
        return productoService.buscarPorNombreEntityManager(nombre);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> show(@PathVariable Long id) {
        return productoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Producto create(@RequestBody Producto producto) {
        return productoService.guardar(producto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> update(
            @PathVariable Long id,
            @RequestBody Producto productoDetalles
    ) {
        return productoService.actualizar(id, productoDetalles)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (productoService.eliminar(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}