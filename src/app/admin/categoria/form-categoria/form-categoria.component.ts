import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit {

  categoriaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl('')
  })
  estado: boolean = false

  constructor(private categoriaService: CategoriaService,
     private toastr: ToastrService, 
     public dialogRef: MatDialogRef<FormCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      console.log(data)
      if(data == null){
        this.categoriaForm = new FormGroup({
          nombre: new FormControl('', [Validators.required]),
          descripcion: new FormControl('')
        })
      }else{
        this.estado = true
        this.categoriaForm = new FormGroup({
          nombre: new FormControl(data.nombre, [Validators.required]),
          descripcion: new FormControl(data.descripcion)
        })
      }

     
    }

  ngOnInit(): void {
  }

  guardarCategoria(){
    this.categoriaService.guardar(this.categoriaForm.value).subscribe(
      (res: any) => {
        console.log(res)
        this.toastr.success('Categoria registrada correctamente', 'Correcto!');
      }, (error: any) => {
        console.log("error");
        this.toastr.error('La Categoria no se ha registrado', 'Error!');
      }
    )
  }
  ModificarCategoria(){
    this.categoriaService.modificar(this.data.id, this.categoriaForm.value).subscribe(
      (res: any) => {
        console.log(res)
        this.toastr.success('Categoria modificada correctamente', 'Correcto!');
      }
    )
  }

}
