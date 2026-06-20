import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagenUrl: string;
}

export interface ProductoRequest {
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  imagenUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient);
  private apiUrl = 'https://gelatoflow-production.up.railway.app/api/productos';

  listarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  crearProducto(producto: ProductoRequest): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, producto);
  }
}