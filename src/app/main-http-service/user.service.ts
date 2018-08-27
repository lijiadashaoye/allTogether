import {
  Injectable
} from '@angular/core';
import {
  HttpService
} from './http.service';

@Injectable()
export class UserService { // 用于登陆
  constructor(public http: HttpService) {}
  login(data) {
    return this.http.login(data)
  }
  signup(data) {
    return this.http.signup(data)
  }
  changeUserPassword(data) {
    return this.http.changeUserPassword(data)
  }
  
  changeUserInfo(data) {
    return this.http.changeUserInfo(data)
  }
}
