import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  public showPassword: boolean = false;
  email = new FormControl('',[Validators.required, Validators.email]);
  user='1';

  loginForm!: FormGroup;

  constructor(private login:FormBuilder) { }

  ngOnInit(): void {
    localStorage.setItem('SessionUser',this.user)
    this.loginForm = this.login.group({
      email: [null, Validators.required],
      pass:[null, Validators.required]
  });
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