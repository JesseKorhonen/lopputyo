import { Routes } from '@angular/router';
import { ReglistComponent } from './reglist/reglist.component';
import { RegformComponent } from './regform/regform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { loginGuard } from './guards/guard';
export const routes: Routes = [
  { path: 'reglist', component: ReglistComponent },
  { path: 'loginform', component: LoginformComponent },
  { path: 'regform', component: RegformComponent, canActivate: [loginGuard] },
  { path: '', redirectTo: '/reglist', pathMatch: 'full' },
];
