import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { ProductoComponent } from './producto/producto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormCategoriaComponent } from './categoria/form-categoria/form-categoria.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [AdminComponent, ProductoComponent, CategoriaComponent, ProveedorComponent, UsuarioComponent, NavbarComponent, FormCategoriaComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule
  ]
})
export class AdminModule { }
