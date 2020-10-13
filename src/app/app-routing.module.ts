import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AuthGuard } from './guards/auth.guard';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      {
        path: '',
        component: InicioComponent,
      },
      {
        path: 'contacto',
        component: ContactoComponent,
      },
      {
        path: 'ventas',
        component: VentasComponent,
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
    
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
      canActivate: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
