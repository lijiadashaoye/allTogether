import {
  Injectable
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  UserService
} from './user.service'

@Injectable() // 用来定义怎么resolve数据的服务
export class resolveService {
  name = '';
  constructor(public userService: UserService) {}
  getData() {
    let data = {
      name: this.name
    }
    return this.userService.login(data)
  }
}

@Injectable() // 用来定义resolve服务
export class ResolveGuard implements Resolve < resolveService > {
  constructor(private resol: resolveService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable < any > | Promise < any > | any {
    // console.log(route)
    // console.log(state.root)
    // state.root与route内容相同
    return this.resol.getData()

  }
}
