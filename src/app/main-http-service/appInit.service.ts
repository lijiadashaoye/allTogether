import { Injectable, Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable()
export class AppInitService {
  private initData; // 用来保存软件启动前需要获取的数据
  constructor(private http: HttpClient, private injector: Injector) {}
  public getJoke() {
    return this.initData;
  }

  // load() 返回值必须是 Promise 类型。
  // 若需要路由跳转，尽可能采用 this.injector.get(Router) 方式来获取路由实例，不然很容易引起循环依赖BUG。

  load() {
    // 使用 APP_INITIALIZER 来配置系统初始化，比如获取当前用户数据，从而针对性的渲染页面
    return (): Promise<any> => {
      let url = "/userdatas";
      return new Promise((resolve, reject) => {
        this.http.get(url).subscribe(res => {
          this.initData = res;
          resolve(true);
          /********************************************************************************/
          // console.log(this.initData);
          let route = this.injector.get(Router);
          // console.log(route);
          route.navigate(["404", { data: "404" }]);
          /********************************************************************************/
        });
      });
    };
  }
}
