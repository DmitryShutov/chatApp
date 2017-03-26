import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {LoginComponent} from './login/login.component';

import { appRoutes } from './app.routes'
import {RestangularModule} from "../../node_modules/ng2-restangular/dist/esm/src/ng2-restangular.module";

import { RestangularConfigFactory } from './services/restangular/restangularConf';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    RestangularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
