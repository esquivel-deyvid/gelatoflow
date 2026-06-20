import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
  email: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private apiUrl = 'https://gelatoflow-production.up.railway.app/api/auth';

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {
      email,
      password
    });
  }

  register(email: string, password: string, rol: string) {
    return this.http.post(`${this.apiUrl}/register`, {
      email,
      password,
      rol
    }, {
      responseType: 'text'
    });
  }

  guardarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  guardarEmail(email: string): void {
    localStorage.setItem('email', email);
  }

  obtenerEmail(): string | null {
    return localStorage.getItem('email');
  }

  guardarRol(rol: string): void {
    localStorage.setItem('rol', rol);
  }

  obtenerRol(): string | null {
    return localStorage.getItem('rol');
  }

  esAdmin(): boolean {
    return this.obtenerRol() === 'ROLE_ADMIN';
  }
  estaLogueado(): boolean {
  return this.obtenerToken() !== null;
}

  cerrarSesion(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
  }
}