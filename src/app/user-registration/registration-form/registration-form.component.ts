import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public showPassword: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showPasswordVisibility(){
    this.showPassword = !this.showPassword;
  }

}
