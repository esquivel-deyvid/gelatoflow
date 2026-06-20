package com.gelatoflow.backend.dto;

import java.math.BigDecimal;

public class CompraResponse {

    private Long pedidoId;
    private String emailCliente;
    private BigDecimal total;
    private String metodoPago;
    private String estado;

    public CompraResponse() {
    }

    public CompraResponse(Long pedidoId, String emailCliente, BigDecimal total, String metodoPago, String estado) {
        this.pedidoId = pedidoId;
        this.emailCliente = emailCliente;
        this.total = total;
        this.metodoPago = metodoPago;
        this.estado = estado;
    }

    public Long getPedidoId() {
        return pedidoId;
    }

    public void setPedidoId(Long pedidoId) {
        this.pedidoId = pedidoId;
    }

    public String getEmailCliente() {
        return emailCliente;
    }

    public void setEmailCliente(String emailCliente) {
        this.emailCliente = emailCliente;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public String getMetodoPago() {
        return metodoPago;
    }

    public void setMetodoPago(String metodoPago) {
        this.metodoPago = metodoPago;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}