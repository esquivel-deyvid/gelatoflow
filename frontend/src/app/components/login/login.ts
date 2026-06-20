import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  iniciarSesion(): void {
    this.mensajeError = '';

    this.authService.login(this.email, this.password).subscribe({
      next: (respuesta) => {
        console.log('RESPUESTA LOGIN:', respuesta);

        this.authService.guardarToken(respuesta.token);
        this.authService.guardarEmail(respuesta.email);
        this.authService.guardarRol(respuesta.rol);

        this.router.navigate(['/productos']);
      },
      error: () => {
        this.mensajeError = 'Correo o contraseña incorrectos';
      }
    });
  }
}