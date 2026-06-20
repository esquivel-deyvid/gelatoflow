import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class RegistroComponent {

  email: string = '';
  password: string = '';
  confirmarPassword: string = '';

  mensaje: string = '';
  error: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  registrar(): void {
    this.mensaje = '';
    this.error = '';

    if (!this.email || !this.password || !this.confirmarPassword) {
      this.error = 'Completa todos los campos.';
      return;
    }

    if (this.password !== this.confirmarPassword) {
      this.error = 'Las contraseñas no coinciden.';
      return;
    }

    this.authService.register(this.email, this.password, 'ROLE_CLIENTE').subscribe({
      next: () => {
        this.mensaje = 'Cliente registrado correctamente. Ahora puedes iniciar sesión.';

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);
      },
      error: (err) => {
        console.error(err);

        if (err.error) {
          this.error = err.error;
        } else {
          this.error = 'No se pudo registrar el cliente.';
        }
      }
    });
  }

  volverLogin(): void {
    this.router.navigate(['/login']);
  }
}