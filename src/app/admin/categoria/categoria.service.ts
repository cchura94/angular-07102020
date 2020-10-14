import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  base_url:string = environment.servidor1
  headers: HttpHeaders;

  constructor(private http: HttpClient, private router: Router) { 
    try{
      let token = localStorage.getItem('token');
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: 'Bearer '+ token
      })

    }catch(error){
      localStorage.clear()
      this.router.navigate(['login'])
    }
  }

  listar(){
    return this.http.get(this.base_url+'categoria', {headers: this.headers});
  }

  guardar(datos){
    return this.http.post(this.base_url+'categoria', datos, {headers: this.headers});
  }

  modificar(id, datos){
    return this.http.put(this.base_url+'categoria/'+id, datos, {headers: this.headers});
  }

  eliminar(id){
    return this.http.delete(this.base_url+'categoria/'+id, {headers: this.headers});
  }
}
