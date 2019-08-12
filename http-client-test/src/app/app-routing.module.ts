import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/page/home/home.component';
import { UsersComponent } from '../app/page/users/users.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: 'home', pathMatch: 'full' 
  },
  /*ezeket még létre kell hozni: 
  
  {
    path: "edit-user/:id",
    component: UserEditComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  }, */
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }