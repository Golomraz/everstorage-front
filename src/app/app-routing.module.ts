import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'storages',
    loadChildren: () => import('./pages/storages/storages.module').then(m => m.StoragesModule)
  },
  {
    path: 'transfers',
    loadChildren: () => import('./pages/transfers/transfers.module').then(m => m.TransfersModule)
  },
  {
    path: 'users',
    canActivate: [(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      const authService = inject(AuthService);
      const isAdmin = authService.user?.role === '1'
      return isAdmin}],
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
