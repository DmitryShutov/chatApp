import {Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {MainScreenComponent} from "./components/main-screen/main-screen.component"
import { LoginGuardService } from './services/login-guard.service';

export const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main-screen',
    component: MainScreenComponent,
    canActivate: [LoginGuardService],
  }
];
