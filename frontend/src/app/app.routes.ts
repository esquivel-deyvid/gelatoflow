import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { ProductosComponent } from './components/productos/productos';
import { RegistroComponent } from './components/registro/registro';
import { AdminProductosComponent } from './components/admin-productos/admin-productos';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productos', component: ProductosComponent, canActivate: [authGuard] },
  { path: 'admin-productos', component: AdminProductosComponent, canActivate: [authGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];