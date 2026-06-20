package com.gelatoflow.backend.services;

import com.gelatoflow.backend.dto.CompraRequest;
import com.gelatoflow.backend.dto.CompraResponse;
import com.gelatoflow.backend.dto.DetalleCompraRequest;
import com.gelatoflow.backend.entities.DetallePedido;
import com.gelatoflow.backend.entities.Pedido;
import com.gelatoflow.backend.entities.Producto;
import com.gelatoflow.backend.repositories.PedidoRepository;
import com.gelatoflow.backend.repositories.ProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepository pedidoRepository;

    @Autowired
    private ProductoRepository productoRepository;

    @Transactional(rollbackFor = Exception.class)
    public CompraResponse realizarCompra(CompraRequest request) {

        if (request.getEmailCliente() == null || request.getEmailCliente().isBlank()) {
            throw new IllegalArgumentException("El email del cliente es obligatorio.");
        }

        if (request.getMetodoPago() == null || request.getMetodoPago().isBlank()) {
            throw new IllegalArgumentException("El método de pago es obligatorio.");
        }

        String metodoPago = request.getMetodoPago().toUpperCase();

        if (!metodoPago.equals("YAPE") && !metodoPago.equals("PLIN")) {
            throw new IllegalArgumentException("Método de pago no válido. Solo se permite YAPE o PLIN.");
        }

        if (request.getItems() == null || request.getItems().isEmpty()) {
            throw new IllegalArgumentException("Debe seleccionar al menos un helado.");
        }

        Pedido pedido = new Pedido();
        pedido.setEmailCliente(request.getEmailCliente());
        pedido.setFecha(LocalDateTime.now());
        pedido.setMetodoPago(metodoPago);
        pedido.setEstado("PAGADO");

        BigDecimal total = BigDecimal.ZERO;

        for (DetalleCompraRequest item : request.getItems()) {

            if (item.getCantidad() == null || item.getCantidad() <= 0) {
                throw new IllegalArgumentException("La cantidad debe ser mayor a cero.");
            }

            Producto producto = productoRepository.findById(item.getProductoId())
                    .orElseThrow(() -> new IllegalArgumentException("Producto no encontrado con ID: " + item.getProductoId()));

            if (producto.getStock() < item.getCantidad()) {
                throw new IllegalArgumentException("Stock insuficiente para: " + producto.getNombre());
            }

            BigDecimal precioUnitario = producto.getPrecio();
            BigDecimal subtotal = precioUnitario.multiply(BigDecimal.valueOf(item.getCantidad()));

            producto.setStock(producto.getStock() - item.getCantidad());
            productoRepository.save(producto);

            DetallePedido detalle = new DetallePedido();
            detalle.setProducto(producto);
            detalle.setCantidad(item.getCantidad());
            detalle.setPrecioUnitario(precioUnitario);
            detalle.setSubtotal(subtotal);

            pedido.agregarDetalle(detalle);

            total = total.add(subtotal);
        }

        pedido.setTotal(total);

        Pedido pedidoGuardado = pedidoRepository.save(pedido);

        return new CompraResponse(
                pedidoGuardado.getId(),
                pedidoGuardado.getEmailCliente(),
                pedidoGuardado.getTotal(),
                pedidoGuardado.getMetodoPago(),
                pedidoGuardado.getEstado()
        );
    }

    @Transactional(readOnly = true)
    public List<Pedido> listarPedidos() {
        return pedidoRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Pedido> listarPorCliente(String emailCliente) {
        return pedidoRepository.findByEmailCliente(emailCliente);
    }
}