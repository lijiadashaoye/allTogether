import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

// echarts主题
import "echarts/theme/macarons.js";
import "echarts/dist/extension/bmap.min.js";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule) // 返回一个promise，表示页面启动完成，可以执行一些操作

  .then(() => {
    // 关闭加载动画，并来个路由跳转
    let animate = document.getElementsByClassName("preloader")[0];
    let num = 1;
    setTimeout(function() {
      let inter = setInterval(_ => {
        animate["style"]["opacity"] -= 0.1;
        num -= 0.1;
        if (num < 0) {
          animate["style"]["display"] = "none";
          clearInterval(inter);
        }
      }, 200);
    }, 3000);
  })
  .catch(err => console.log(err));
