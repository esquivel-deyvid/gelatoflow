package com.gelatoflow.backend.repositories;

import com.gelatoflow.backend.entities.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

    List<Pedido> findByEmailCliente(String emailCliente);
}