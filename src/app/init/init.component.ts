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
  Subscription
} from 'rxjs'
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  imgSrc = '';
  time = 7;
  sub: Subscription;
  private initData; // 用来保存软件启动前需要获取的数据
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    let num = Math.floor(Math.random() * 10);
    this.imgSrc = `assets/backImg/${num}.jpg`;

    this.sub = interval(1000)
    .subscribe(val => {
      this.time = 7 - val;
      if (this.time <= 0) {
        this.router.navigate(['login'])
      }
    })

    let url = "/userdatas";
    this.http.get(url).subscribe(res => {
      this.initData = res; // 可以将这些初始化数据存到一个服务里，或者sessionStorage里，作为全局的数据基础
      // console.log(this.initData)
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
