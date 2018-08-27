import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
/*****************************************************************/
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgetComponent } from "./forget/forget.component";
import { CheckLogoComponent } from "./signup/check-logo/check-logo.component";

/*****************************************************************/
import { MainRoutingModule } from "./main.route";
import { HttpService, BASE_URL, urlText } from "./main-http-service/http.service";
import { UserService } from "./main-http-service/user.service";
import { controlLogoutService } from "./controlLogout";
/*****************************************************************/
// 软件初始化方法
import { AppInitService } from "./main-http-service/appInit.service";
import { APP_INITIALIZER } from "@angular/core";
export function appInitServiceFactory(provider: AppInitService) {
  return provider.load();
}

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
    MainRoutingModule
  ],
  providers: [
    /********************************************/
    // 软件初始化
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInitServiceFactory,
      deps: [AppInitService],
      multi: true
    },
    /********************************************/
    HttpService,
    UserService,
    controlLogoutService,
    /********************************************/
    // 定义http主域名端口，通过urlText定义其他路由位置
    {
      provide: BASE_URL,
      useValue: urlText
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
