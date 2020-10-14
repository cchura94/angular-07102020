import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlbase:string = environment.servidor1

  constructor(private http: HttpClient) { }

  inicia_sesion(datos){
    return this.http.post(this.urlbase+"auth/login ", datos);
  }
}
