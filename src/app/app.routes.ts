import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./core/login/login.component')},
  { path: 'register', loadComponent: () => import('./core/register/register.component')},
  { path: 'todo-main', loadComponent: () => import('./features/todo-main/todo-main.component')},
  { path: '', redirectTo: 'login', pathMatch:'full'}
];
