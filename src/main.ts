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
  .bootstrapModule(AppModule) // 返回一个promise，表示软件启动完成，可以执行一些操作
  .then(() => {
    // 关闭加载动画，也可以不在index.html上加动画，而是把动画，初始获取数据等一些列初始化操作，
    // 放到
    let animate = document.getElementsByClassName("preloader")[0];
    let num = 1;
    setTimeout(function() {
      let inter = setInterval(_ => {
        num -= 0.1;
        if (num < .2) {
          animate["style"]["display"] = "none";
          clearInterval(inter);
        }
        animate["style"]["opacity"] -= 0.1;
      }, 200);
    }, 3000);
  })
  .catch(err => console.log(err));
