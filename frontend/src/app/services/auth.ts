import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register(email: string, password: string, rol: string) {
  return this.http.post(`${this.apiUrl}/register`, {
    email,
    password,
    rol
  }, {
    responseType: 'text'
  });
}


  estaLogueado(): boolean {
  return this.obtenerToken() !== null;
}

  private http = inject(HttpClient);
private apiUrl = 'https://gelatoflow-production.up.railway.app/api/auth';

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {
      email,
      password
    });
  }

  guardarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  guardarEmail(email: string): void {
  localStorage.setItem('email', email);
}

obtenerEmail(): string | null {
  return localStorage.getItem('email');
}

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

 cerrarSesion(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
}
}