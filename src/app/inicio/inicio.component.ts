import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  lista_post:any[] = []

  constructor(private inicioService: InicioService) { }

  ngOnInit(): void {
    this.inicioService.getListaPost().subscribe(
      (res:any) =>{
        console.log(res);
        this.lista_post = res
      }
    )
  }

}
