import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  public showPassword: boolean = false;
  email = new FormControl('',[Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  public showPasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

  validateEmail(){
    if(this.email.hasError('required')){
      return 'Enter your email address';
    }
    return this.email.hasError('email') ? 'Enter valid email address' : '';
  }
}
