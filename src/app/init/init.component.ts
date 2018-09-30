import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient
} from "@angular/common/http";
import {
  Router
} from '@angular/router'
import {
  interval,
  Subscription,
  forkJoin
} from 'rxjs'
import {
  delay
} from 'rxjs/operators';
@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  imgSrc = '';
  time = 3;  // 设置自动跳转时间
  sub: Subscription;
  private initData; // 用来保存软件启动前需要获取的数据
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let num = Math.floor(Math.random() * 10);
    this.imgSrc = `assets/backImg/${num}.jpg`;

    this.sub = interval(1000)
      .subscribe(val => {
        this.time --;
        if (this.time < 0) {
          this.router.navigate(['login'])
        }
      })

    let url = "/userdatas";
    let http1 = this.http.get(url);  // 设置初始化时执行的http
    let http2 = this.http.get(url);

    forkJoin([http1, http2]).subscribe(results => {
      // 可以将这些初始化数据存到一个服务里，或者sessionStorage里，作为全局的数据基础
      let post1 = results[0];
      let post2 = results[1];
      this.initData = results;
      // console.log(post1, post2);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  goto() {
    this.router.navigate(['login'])
  }
  times(){
    return this.time
  }
}
