import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";

import { Injectable, Inject, Optional } from "@angular/core";

import { Observable } from "rxjs";
// 使用 InjectionToken 对字符串令牌进行包装，防止命名重复被覆盖
import { InjectionToken } from "@angular/core";
export const BASE_URL = new InjectionToken<string>("kk");
export const urlText = "/userdatas";
/**************************************************************/

import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";

/**************************************************************/
@Injectable()
export class HttpService {
  constructor(@Inject(BASE_URL) private baseUrl, private http: HttpClient) {}
  login(data): Observable<any> {
    // 登陆
    let url = this.baseUrl;
    // get 携带查询参数
    // 写法一：
    // let params = {
    //   name: data.name
    // };
    // return this.http.get(url, {
    //   params
    // });
    // 写法二：
    const params = new HttpParams();
    params.set("name", data.name); // 多个参数需要链式set
    return this.http.get(url, {
      params
    });
  }
  signup(item): Observable<any> {
    // 注册
    let url = this.baseUrl;
    return this.http.post(`${url}`, JSON.stringify(item));
  }
  changeUserPassword(data): Observable<any> {
    // 修改密码
    let url = this.baseUrl + `/${data.id}`;
    let params = {
      password: data.password
    };
    return this.http.patch(url, params);
  }
  changeUserInfo(data): Observable<any> {
    // 修改个人信息
    let url = this.baseUrl + `/${data.id}`;
    let params = {
      name: data.name,
      password: data.password,
      email: data.email,
      job: data.job,
      logo: data.logo
    };
    return this.http.patch(url, params);
  }
}
/*****************************************************************/
// 拦截器一定要写到http代码后
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  // @Optional()
  // 表示依赖是可选的，如果依赖不存在不会报错，返回null,用于设置token时用户还未登录，所以没有token
  constructor(
    @Optional()
    @Inject("getTokenHttpService")
    public http: any
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const HEADER = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        token: "tokentokentokentoken"
      })
    };
    const reqOptions = {
      // 向拦截器里添加更多有关http的数据
      ...HEADER,
      withCredentials: true
    };
    const authReq = req.clone(reqOptions); //发送新请求头的http请求;
    return next.handle(authReq);
  }
}
