import {
  Injectable
} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
  CanLoad,
  Route
} from '@angular/router';
import {
  Observable
} from 'rxjs';
import {
  UserService
} from './user.service'
/*******************************************************************/
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
/*******************************************************************/

// 一旦惰性加载模块被加载过，这个守卫就不再执行了
@Injectable() //  异步导航到某特性模块的情况
export class canLoadGuard implements CanLoad {
  canLoad(
    route: Route
  ): Observable < boolean > | Promise < boolean > | boolean {
    return confirm('CanLoad three')
  }
}
