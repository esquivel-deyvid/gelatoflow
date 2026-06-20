import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';
import { ProductoService, Producto } from '../../services/producto';
import { PedidoService } from '../../services/pedido';

interface ItemCarrito {
  producto: Producto;
  cantidad: number;
  subtotal: number;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  carrito: ItemCarrito[] = [];

  cantidades: { [id: number]: number } = {};

  cargando: boolean = true;
  mensajeError: string = '';
  mensajeCompra: string = '';

  metodoPago: string = 'YAPE';
  emailCliente: string = '';

  constructor(
    private authService: AuthService,
    private productoService: ProductoService,
    private pedidoService: PedidoService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.emailCliente = this.authService.obtenerEmail() || '';
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.cargando = true;

    this.productoService.listarProductos().subscribe({
      next: (data) => {
        this.productos = data;

        this.productos.forEach(producto => {
          if (!this.cantidades[producto.id]) {
            this.cantidades[producto.id] = 1;
          }
        });

        this.cargando = false;
        this.mensajeError = '';
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error al cargar productos:', error);
        this.mensajeError = 'No se pudieron cargar los productos.';
        this.cargando = false;
        this.cdr.detectChanges();
      }
    });
  }

  agregarAlCarrito(producto: Producto): void {
    this.mensajeCompra = '';

    let cantidad = Number(this.cantidades[producto.id]);

    if (!cantidad || cantidad <= 0) {
      this.mensajeCompra = 'La cantidad debe ser mayor a cero.';
      return;
    }

    if (cantidad > producto.stock) {
      this.mensajeCompra = 'No hay stock suficiente para ' + producto.nombre;
      return;
    }

    const itemExistente = this.carrito.find(
      item => item.producto.id === producto.id
    );

    if (itemExistente) {
      const nuevaCantidad = itemExistente.cantidad + cantidad;

      if (nuevaCantidad > producto.stock) {
        this.mensajeCompra = 'No puedes agregar más del stock disponible.';
        return;
      }

      itemExistente.cantidad = nuevaCantidad;
      itemExistente.subtotal = nuevaCantidad * Number(producto.precio);
    } else {
      this.carrito.push({
        producto: producto,
        cantidad: cantidad,
        subtotal: cantidad * Number(producto.precio)
      });
    }
  }

  quitarDelCarrito(productoId: number): void {
    this.carrito = this.carrito.filter(
      item => item.producto.id !== productoId
    );
  }

  calcularTotal(): number {
    return this.carrito.reduce(
      (total, item) => total + item.subtotal,
      0
    );
  }

  confirmarCompra(): void {
    this.mensajeCompra = '';

    if (!this.emailCliente) {
      this.mensajeCompra = 'No se encontró el correo del cliente.';
      return;
    }

    if (this.carrito.length === 0) {
      this.mensajeCompra = 'Debes agregar al menos un helado al carrito.';
      return;
    }

    const compra = {
      emailCliente: this.emailCliente,
      metodoPago: this.metodoPago,
      items: this.carrito.map(item => ({
        productoId: item.producto.id,
        cantidad: item.cantidad
      }))
    };

    this.pedidoService.realizarCompra(compra).subscribe({
      next: (respuesta) => {
        this.mensajeCompra =
          `Compra realizada. Pedido #${respuesta.pedidoId}. Total: S/ ${respuesta.total}. Pago: ${respuesta.metodoPago}`;

        this.carrito = [];
        this.obtenerProductos();
      },
      error: (error) => {
        console.error('Error al comprar:', error);

        if (error.error) {
          this.mensajeCompra = error.error;
        } else {
          this.mensajeCompra = 'No se pudo realizar la compra.';
        }
      }
    });
  }

  ponerImagenDefault(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = '/img/helado-default.jpg';
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}