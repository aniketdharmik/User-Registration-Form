import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LoginFormComponent } from './login-form.component';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';


describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, FormsModule,ReactiveFormsModule, MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
      declarations: [ LoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('email input invalid when empty', () => {
    expect(component.email.valid).toBeFalsy();
  });

  it('Password input field is visible when clicked on password visble icon', () =>{
      expect(component.showPasswordVisibility).toBeTruthy();
  });

  it('Check if Mat Icon button clicked is called in LoginFormComponent', fakeAsync(() => {
    spyOn(component, 'showPasswordVisibility');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.showPasswordVisibility).toHaveBeenCalled();
  }));
  
});
