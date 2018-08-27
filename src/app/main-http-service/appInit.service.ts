import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppInitService {
  private initData; // 用来保存软件启动前需要获取的数据
  constructor(private http: HttpClient) {}
  public getJoke() {
    return this.initData;
  }
  load() {
    // 使用 APP_INITIALIZER 来做软件初始化，比如获取当前用户数据，从而针对性的渲染页面
    return (): Promise<any> => {
      let url = "/userdatas";
      return new Promise((resolve, reject) => {
        this.http.get(url).subscribe(res => {
          this.initData = res;
          console.log(this.initData);
          resolve(true);
        });
      });
    };
  }
}
