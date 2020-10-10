import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private loginService: LoginService, private routes: Router, private toastr: ToastrService){ }

  ngOnInit(): void {
  }

  ingresar(){
    this.loginService.inicia_sesion(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res)
        let token = res.access_token
        localStorage.setItem("token", token)
        this.toastr.success('Ingreso al sistema!', 'Correcto!');
        this.routes.navigate(['/admin/producto'])
      },
      (error) => {
        this.toastr.error('Ocurrio un error al Igresar al sistema', 'Error!');
      }
    )
  }

}
