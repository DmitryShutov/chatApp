import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RestangularModule } from 'ng2-restangular';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';

import { appRoutes } from './app.routes'
import {ApiService} from "./services/api/api.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    RestangularModule.forRoot(RestangularConfigFactory),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://172.30.3.179:8085');
}
