import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {SignUpPageComponent} from "./components/pages/sign-up-page/sign-up-page.component";
import {LandingPageComponent} from "./components/pages/landing-page/landing-page.component";

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignUpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
