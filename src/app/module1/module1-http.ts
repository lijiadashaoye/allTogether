import {
  HttpHeaders,
  HttpClient,
  HttpResponse,
  HttpParams
} from "@angular/common/http";

import { Injectable, Inject } from "@angular/core";

import { Observable } from "rxjs";
import {
  map,
  filter,
  switchMap,
  shareReplay,
  tap,
  debounceTime,
  retry,
  catchError
} from "rxjs/operators";

// 使用 InjectionToken 对字符串令牌进行包装，防止命名重复被覆盖
// 已在proxy.conf.json 文件内设置代理，所以不用将 主域名及端口（http://localhost:3003）写上
// 只需要写详细请求地址就好，当前软件里有多个用InjectionToken标记的url
import { InjectionToken } from "@angular/core";
export const Module1BASE_URL = new InjectionToken<string>("");
export const urlText = "/module1data";

// angular6设置请求头的方法
const HEADER = new HttpHeaders({
  "Content-Type": "application/json",
  token: "tokentokentokentoken"
});
// angular6设置get请求参数的方法，
// 等同于：http://localhost:3003/module1data?id=4&name=王五
const paramsData = new HttpParams();
paramsData.set("id", "4").set("name", "王五");

/*******************************************/
// angular的网路请求核心方法，可以只用这一个
function requestHttp() {
  let method = "GET"; // 'DELETE' | 'GET' | 'HEAD' | 'JSONP' | 'OPTIONS';
  let url = this.baseUrl; // string
  let options = {
    headers: HEADER,
    reportProgress: true,
    params: paramsData,
    responseType: "json", // 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials: true // 是否应使用传出凭据（cookie）发送此请求
  };
  return this.http.request(method, url, options);
}
/*******************************************/
@Injectable()
export class Module1HttpService {
  constructor(
    @Inject(Module1BASE_URL) private baseUrl,
    private http: HttpClient
  ) {}
  isPost(item): Observable<any> {
    let url = this.baseUrl;
    return this.http.post(`${url}`, JSON.stringify(item), { headers: HEADER });
  }
  getData(which): Observable<any> {
    let url = which;
    return this.http.get(url);
  }

  testHttpError(id): Observable<any> {
    // 用来测试http错误
    let url = this.baseUrl + id;
    return this.http.get(url);
  }
  /************************************************/
  isPut(item, id) {
    let url = this.baseUrl + `/${id}`;
    return this.http.put(`${url}`, JSON.stringify(item), { headers: HEADER });
  }

  isPatch(data, id): Observable<any> {
    let url = this.baseUrl + `/${id}`;
    let params = {
      name: data.name,
      job: data.job
    };
    return this.http.patch(url, params);
  }

  isDelete(id) {
    let url = this.baseUrl + "/" + id;
    return this.http.delete(`${url}`, { headers: HEADER });
  }

  isSearch(data): Observable<any> {
    let url = this.baseUrl;
    let params = {
      id: data.id
    };
    return this.http.get(url, {
      params
    });
  }
  /*******************************************/

  search(url): Observable<any> {
    return this.http.get(url).pipe(debounceTime(1000));
  }
}
