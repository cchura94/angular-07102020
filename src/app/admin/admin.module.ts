import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AdminComponent, ProductoComponent, CategoriaComponent, ProveedorComponent, UsuarioComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
