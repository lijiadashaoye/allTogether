import {
    HttpHeaders,
    HttpClient,
    HttpResponse,
  } from '@angular/common/http';
  
  import {
    Injectable,
    Inject
  } from '@angular/core';
  
  import {
    Observable,
  } from 'rxjs';
  import {
    map,
    filter,
    switchMap,
    shareReplay,
    tap,
    debounceTime,
    retry,
    catchError,
  } from 'rxjs/operators';
  import { throwError } from 'rxjs'
  
  // 使用 InjectionToken 对字符串令牌进行包装，防止命名重复被覆盖
  import {
    InjectionToken
  } from '@angular/core';
  export const Module1BASE_URL = new InjectionToken<string>('');
  export const urlText = '/module1data';
  
  const HEADER = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      token: 'tokentokentokentoken'
    })
  };
  const homeUrl = 'http://localhost:3000/'
  
  @Injectable()
  export class Module1HttpService {
    constructor(
      @Inject(Module1BASE_URL) private baseUrl,
      private http: HttpClient
    ) { }
    login(data): Observable<any> {
      let url = this.baseUrl;
      let params = {
        name: data.name
      }
      return this.http.get(url, {
        params
      })
    }
  
    signup(item): Observable<any> {
      let url = this.baseUrl;
      return this.http.post(`${url}`, JSON.stringify(item), HEADER)
    }
    getData(id): Observable<any> {
      let url = homeUrl + id;
      return this.http.get(url)
    }
    testHttpError(id): Observable<any> {  // 用来测试http错误
      let url = homeUrl + id;
      return this.http.get(url)
    }
    /************************************************/
    isPut(item, id) {
      let url = this.baseUrl + `/${id}`;
      return this.http.put(`${url}`, JSON.stringify(item), HEADER)
    }
  
    isPatch(data, id): Observable<any> {
      let url = this.baseUrl + `/${id}`;
      let params = {
        name: data.name,
        job: data.job
      }
      return this.http.patch(url, params)
    }
  
    isDelete(id) {
      let url = this.baseUrl + '/' + id;
      return this.http.delete(`${url}`, HEADER)
    }
  
    isSearch(data): Observable<any> {
      let url = this.baseUrl;
      let params = {
        id: data.id
      }
      return this.http.get(url, {
        params
      })
    }
    /*******************************************/
  
    search(url): Observable<any> {
      return this.http.get(url).pipe(
        debounceTime(1000)
      )
    }
  
  }