package com.gelatoflow.backend.controllers;

import com.gelatoflow.backend.dto.CompraRequest;
import com.gelatoflow.backend.dto.CompraResponse;
import com.gelatoflow.backend.entities.Pedido;
import com.gelatoflow.backend.services.PedidoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pedidos")
@CrossOrigin(originPatterns = {
        "http://localhost:4200",
        "https://*.vercel.app"
})
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @PostMapping("/comprar")
    public ResponseEntity<?> comprar(@RequestBody CompraRequest request) {
        try {
            CompraResponse response = pedidoService.realizarCompra(request);
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public List<Pedido> listarPedidos() {
        return pedidoService.listarPedidos();
    }

    @GetMapping("/cliente")
    public List<Pedido> listarPorCliente(@RequestParam String email) {
        return pedidoService.listarPorCliente(email);
    }
}