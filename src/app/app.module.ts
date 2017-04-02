import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {LoginComponent} from './components/login/login.component';

import { appRoutes } from './app.routes'
import {ApiService} from "./services/api/api.service";
import {ReactiveFormsModule} from "@angular/forms";
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import {UserService} from './services/user.service';
import {UserDataService} from './services/user-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainScreenComponent,
    ContactsListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [ApiService, UserDataService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
