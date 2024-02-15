import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {Page404Component} from "./components/page404/page404.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {UserPageComponent} from "./components/user-page/user-page.component";
import {AdminGuard} from "./gards/admin.guard";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path : 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminPageComponent
    , canActivate: [AdminGuard]
  },
  { path: 'user', component: UserPageComponent },

  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
