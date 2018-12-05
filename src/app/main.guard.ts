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
} from './main-http-service/user.service'
/*******************************************************************/
// 注册在 NgModule 下的 service 都无法被 tree-shaking 掉
// service 是组册在根 NgModules 下
// @Injectable({
//   providedIn: 'root' 
// })
// 新的设定方法可以被 tree-shaking 掉了，这对于最后产生出來的 bundle 大小，会有很大的帮助
// service 是注册在某一個 NgModules 下
// @Injectable({
//   providedIn: HeroModule
// })
// resolve方法会在路由开始，页面还未加载时，提前进行一些行为，但如果是执行http，会阻碍
// 页面的加载，出现一点时间的空白
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

// 如果resolve是一个需要长时间才完成的任务，如http，会停滞路由跳转，出现长时间的页面空白
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
    return true
  }
}
