package com.gelatoflow.backend.dto;

import java.util.List;

public class CompraRequest {

    private String emailCliente;
    private String metodoPago;
    private List<DetalleCompraRequest> items;

    public CompraRequest() {
    }

    public String getEmailCliente() {
        return emailCliente;
    }

    public void setEmailCliente(String emailCliente) {
        this.emailCliente = emailCliente;
    }

    public String getMetodoPago() {
        return metodoPago;
    }

    public void setMetodoPago(String metodoPago) {
        this.metodoPago = metodoPago;
    }

    public List<DetalleCompraRequest> getItems() {
        return items;
    }

    public void setItems(List<DetalleCompraRequest> items) {
        this.items = items;
    }
}