import {Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {MainScreenComponent} from "./components/main-screen/main-screen.component"

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main-screen',
    component: MainScreenComponent,
  }
];
