import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductoService, ProductoRequest } from '../../services/producto';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-admin-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.css'
})
export class AdminProductosComponent {

  nombre: string = '';
  descripcion: string = '';
  precio: number = 0;
  stock: number = 0;
  imagenUrl: string = '';

  mensaje: string = '';
  error: string = '';

  constructor(
    private productoService: ProductoService,
    private authService: AuthService,
    private router: Router
  ) {}

  guardarProducto(): void {
    this.mensaje = '';
    this.error = '';

    if (!this.nombre || !this.descripcion || !this.imagenUrl) {
      this.error = 'Completa todos los campos.';
      return;
    }

    if (this.precio <= 0) {
      this.error = 'El precio debe ser mayor a cero.';
      return;
    }

    if (this.stock < 0) {
      this.error = 'El stock no puede ser negativo.';
      return;
    }

    const producto: ProductoRequest = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio,
      stock: this.stock,
      imagenUrl: this.imagenUrl
    };

    this.productoService.crearProducto(producto).subscribe({
      next: () => {
        this.mensaje = 'Helado agregado correctamente.';

        this.nombre = '';
        this.descripcion = '';
        this.precio = 0;
        this.stock = 0;
        this.imagenUrl = '';
      },
      error: (err) => {
        console.error(err);
        this.error = 'No se pudo agregar el helado.';
      }
    });
  }

  volverCatalogo(): void {
    this.router.navigate(['/productos']);
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}