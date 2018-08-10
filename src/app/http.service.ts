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
// 使用 InjectionToken 对字符串令牌进行包装，防止命名重复被覆盖
import {
  InjectionToken
} from '@angular/core';
export const BASE_URL = new InjectionToken < string > ('');
export const urlText = '/datas';
/**************************************************************/
const HEADER = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    token: 'tokentokentokentoken'
  })
};
const homeUrl = 'http://localhost:3000/'
/**************************************************************/
@Injectable()
export class HttpService {
  constructor(
    @Inject(BASE_URL) private baseUrl,
    private http: HttpClient
  ) {}

  login(data): Observable < any > {
    let url = this.baseUrl;
    let params = {
      name: data.name
    }
    return this.http.get(url, {
      params
    })
  }
  signup(item): Observable < any > {
    let url = this.baseUrl;
    return this.http.post(`${url}`, JSON.stringify(item), HEADER)
  }
  changeUserPassword(data): Observable < any > {
    let url = this.baseUrl + `/${data.id}`;
    let params = {
      password: data.password
    }
    return this.http.patch(url, params)
  }
  changeUserInfo(data): Observable < any > {
    let url = this.baseUrl + `/${data.id}`;
    let params = {
      name: data.name,
      password: data.password,
      email: data.email,
      job: data.job,
      logo: data.logo,
    }
    return this.http.patch(url, params)
  }
}
