import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './user-registration/registration-form/registration-form.component';
import { UserProfileComponent } from './user-registration/user-profile/user-profile.component';
import { LoginFormComponent } from './user-registration/login-form/login-form.component';

const routes: Routes = [
  {path:'', component:LoginFormComponent},
  {path:'RegistrationForm', component:RegistrationFormComponent},
  {path:'UserProfile', component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
