import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  ingresar(){
    this.loginService.inicia_sesion(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res)
        let token = res.access_token
        localStorage.setItem("token", token)
      }
    )
  }

}
