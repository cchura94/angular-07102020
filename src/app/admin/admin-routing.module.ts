import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    component:AdminComponent,
    children: [
      {
        path: 'producto',
        component:ProductoComponent
      },
    
      {
        path: 'categoria',
        component:CategoriaComponent
      },
    
      {
        path: 'proveedor',
        component:ProveedorComponent
      },
    
      {
        path: 'usuario',
        component:UsuarioComponent
      },
    ]
  },
  
    
]



@NgModule({
  declarations: [],
  
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
