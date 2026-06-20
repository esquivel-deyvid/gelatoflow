import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';
import { ProductoService, Producto } from '../../services/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];
  cargando: boolean = true;
  mensajeError: string = '';

  constructor(
    private authService: AuthService,
    private productoService: ProductoService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.cargando = true;

    this.productoService.listarProductos().subscribe({
      next: (data) => {
        console.log('Productos recibidos:', data);

        this.productos = data;
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

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.router.navigate(['/login']);
  }
}