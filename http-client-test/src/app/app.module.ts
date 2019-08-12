import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '../app/page/home/home.component';
import { UsersComponent } from '../app/page/users/users.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { UserService } from './service/user.service';


const appRoutes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    AppRoutingModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }