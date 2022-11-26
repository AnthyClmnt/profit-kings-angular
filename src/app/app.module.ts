import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NavBarComponent} from "./components/nav-bar/nav-bar-component";
import { AppRoutingModule } from './app-routing.module';
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {SignUpPageComponent} from "./components/pages/sign-up-page/sign-up-page.component";
import {LandingPageComponent} from "./components/pages/landing-page/landing-page.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    SignUpPageComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
