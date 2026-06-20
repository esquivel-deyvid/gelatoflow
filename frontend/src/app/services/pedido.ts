import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ItemCompra {
  productoId: number;
  cantidad: number;
}

export interface CompraRequest {
  emailCliente: string;
  metodoPago: string;
  items: ItemCompra[];
}

export interface CompraResponse {
  pedidoId: number;
  emailCliente: string;
  total: number;
  metodoPago: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private http = inject(HttpClient);
  private apiUrl = 'https://gelatoflow-production.up.railway.app/api/pedidos';

  realizarCompra(compra: CompraRequest): Observable<CompraResponse> {
    return this.http.post<CompraResponse>(`${this.apiUrl}/comprar`, compra);
  }
}