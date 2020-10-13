import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriaService } from './categoria.service';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  categorias: any[] = []
  constructor(private categoriaService: CategoriaService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.categoriaService.listar().subscribe(
      (res: any) => {
        console.log(res)
        this.categorias = res.datos
      }
    )
  }

  abrirModal(cat = null){
    if(cat == null){
      const dialogRef = this.dialog.open(FormCategoriaComponent, {
        width: '450px',
        //data: {name: this.name, animal: this.animal}
      });
    }else{
      const dialogRef = this.dialog.open(FormCategoriaComponent, {
        width: '450px',
        data: cat
      });
    }
  }

  eliminarCategoria(i, id){
    if(confirm("¿Esta seguro de eliminar la categoria?")){

      this.categoriaService.eliminar(id).subscribe(
        (res: any) =>{
          console.log("Categoria Eliminada")
          this.categorias.splice(i, 1);
        }
      )
    }
  }

}
