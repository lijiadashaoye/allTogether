import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Injectable, Inject } from "@angular/core";

import { Observable } from "rxjs";
// 使用 InjectionToken 对字符串令牌进行包装，防止命名重复被覆盖
import { InjectionToken } from "@angular/core";
export const BASE_URL = new InjectionToken<string>("kk");
export const urlText = "/userdatas";
/**************************************************************/
const HEADER = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    token: "tokentokentokentoken"
  })
};
/**************************************************************/
@Injectable()
export class HttpService {
  constructor(@Inject(BASE_URL) private baseUrl, private http: HttpClient) {}
  login(data): Observable<any> {
    // 登陆
    let url = this.baseUrl;
    let params = {
      name: data.name
    };
    return this.http.get(url, {
      params
    });
  }
  signup(item): Observable<any> {
    // 注册
    let url = this.baseUrl;
    return this.http.post(`${url}`, JSON.stringify(item), HEADER);
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
