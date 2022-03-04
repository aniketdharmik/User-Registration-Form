import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationFormComponent } from './user-registration/registration-form/registration-form.component';
import { UserProfileComponent } from './user-registration/user-profile/user-profile.component';

const routes: Routes = [
  {path:'RegistrationForm', component:RegistrationFormComponent},
  {path:'UserProfile', component:UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
