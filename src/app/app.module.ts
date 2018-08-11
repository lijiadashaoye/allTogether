import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import {
  HttpClientModule
} from "@angular/common/http";
/*****************************************************************/
import {
  AppComponent
} from './app.component';
import {
  LoginComponent
} from './login/login.component';
import {
  SignupComponent
} from './signup/signup.component';
import {
  ForgetComponent
} from './forget/forget.component';
import {
  CheckLogoComponent
} from './signup/check-logo/check-logo.component';

/*****************************************************************/
import {
  MainRoutingModule
} from './main.route';
import {
  HttpService,
  BASE_URL,
  urlText
} from "./http.service";
import {
  UserService
} from "./user.service";
import {
  controlLogoutService
} from './controlLogout';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    CheckLogoComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainRoutingModule,
  ],
  providers: [
    HttpService,
    UserService,
    controlLogoutService,
    {
      provide: BASE_URL,
      useValue: urlText
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
