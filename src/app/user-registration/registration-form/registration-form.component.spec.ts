import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { RegistrationFormComponent } from './registration-form.component';


describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, FormsModule,ReactiveFormsModule, MatFormFieldModule, MatInputModule,BrowserAnimationsModule],
      declarations: [ RegistrationFormComponent ]
    })

    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('email input invalid when empty', () => {
    expect(component.email.valid).toBeFalsy();
  });

  it('Check if Mat Icon button clicked is called in RegistrationFormComponent', fakeAsync(() => {
    spyOn(component, 'showPasswordVisibility');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.showPasswordVisibility).toHaveBeenCalled();
  }));

});
