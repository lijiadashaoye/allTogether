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
import { A404PageComponent } from "./a404-page/a404-page.component";
/*****************************************************************/
import { MainRoutingModule } from "./main.route";
import {
  HttpService,
  BASE_URL,
  urlText
} from "./main-http-service/http.service";
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
    ForgetComponent,
    A404PageComponent
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
    // 工厂函数的输入参数是依赖对象列表，输出结果是对应的依赖对象。
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
    controlLogoutService, // 这个服务是定义在跟模块中的，所以整个软件中，其他模块中都可以引入并使用
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
