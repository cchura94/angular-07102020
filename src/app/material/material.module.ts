import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

const material_components = [
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [material_components]
})
export class MaterialModule { }
