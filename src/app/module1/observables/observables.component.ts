import { Component, OnInit } from "@angular/core";
import {
  Observable,
  of,
  BehaviorSubject,
  timer,
  zip,
  interval,
  fromEvent,
  Subscription,
  Subject,
  ReplaySubject,
  defer,
  merge,
  concat,
  combineLatest,
  forkJoin
} from "rxjs";
import {
  find,
  map,
  take,
  tap,
  delay,
  switchMap,
  filter,
  mergeMap,
  catchError,
  finalize,
  last,
  startWith,
  debounceTime,
  distinctUntilChanged,
  mapTo,
  first,
  share,
  takeUntil,
  scan,
  concatMap,
  exhaustMap,
  retry,
  findIndex
} from "rxjs/operators";
import { Module1HttpService } from "../module1-http";
import { ajax } from "rxjs/ajax";
@Component({
  selector: "app-observables",
  templateUrl: "./observables.component.html",
  styleUrls: ["./observables.component.css"]
})
export class ObservablesComponent implements OnInit {
  creatObservable; // 创建自定义Observable 事件
  constructor(public http: Module1HttpService) {}

  ngOnInit() {}
  /****************************************************/
  creatObservableFn() {
    // 创建Observable，并指定最后发出的值
    this.creatObservable = new Observable(observer => {
      // 在这里写执行函数
      let num = (Math.random() * 10).toFixed(3);
      // 最后指定发出什么值
      observer.next(num);
    });
  }
  subscribeObservableFn() {
    this.creatObservableFn();
    this.creatObservable.subscribe(val => {
      console.log(val);
    });
  }
  /****************************************************/
  subscribeObservableFn2() {
    const observable$ = Observable.create(observer => {
      observer.next("Semlinker");
      observer.next("Lolo");
    });

    observable$.subscribe(value => {
      // 执行订阅操作
      console.log(value);
    });
  }
  /****************************************************/
  ngAfterViewInit() {
    this.inputKuang();
    this.fromEventTest();
  }
  delayTest() {
    const source = of("delay test").pipe(delay(3000));
    source.subscribe(val => console.log(val));
  }
  ajaxTest() {
    ajax("/module1data")
      .pipe(
        map(res => {
          return res.response;
        })
      )
      .subscribe({
        next(x) {
          console.log(x);
        }
      });
  }
  ajaxErrorTest() {
    ajax("/module1datax")
      .pipe(
        map(res => {
          return res.response;
        }),
        catchError(err => of("这是ajax的请求错误！", err))
      )
      .subscribe({
        next(x) {
          console.log(x);
        }
      });
  }
  filerTest() {
    of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n),
        scan((acc, x) => acc + x, 0)
      )
      .subscribe(x => console.log(x));
  }
  distinctUntilChangedTest() {
    let subscription: Subscription;
    let arr = [];
    subscription = of(1, 1, 2, 2, 1, 1, 2, 3, 3, 4)
      .pipe(distinctUntilChanged())
      .subscribe(x => arr.push(x));
    subscription.unsubscribe();
    console.log(arr);
  }
  inputKuang() {
    const searchBox = document.getElementById("search-box");
    const typeahead = fromEvent(searchBox, "input").pipe(
      map((e: KeyboardEvent) => e.target["value"]),
      filter(text => text.length > 2),
      debounceTime(800),
      // 当前值与上一个值不同时才发出值
      distinctUntilChanged(),
      switchMap(val => of(val))
    );
    typeahead.subscribe(data => {
      console.log(data);
    });
  }
  intervalTest() {
    interval(1000)
      .pipe(
        // startWith 会在整个数据序列最开始添加上数据，从而导致后边take(2)之后值得到一共3个值，最后一个是1
        startWith("添加了 startWith"),
        take(3),
        tap(val => console.log(`${val} tap过，tap 就是 do`))
      )
      .subscribe(n => console.log(n));
    timer(3000, 1000)
      .pipe(take(3))
      .subscribe(val => {
        console.log("等待三秒后输出值，然后执行每一秒输出值", val);
      });
  }

  mouseData = "监听mousemove事件";
  tips;
  fromEventTest() {
    const el = document.getElementById("my-element");
    const mouseMoves = fromEvent(el, "mousemove");
    const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
      this.mouseData = `offsetX：${evt.offsetX}   offsetY：${evt.offsetY}`;
      if (evt.offsetX < 40 && evt.offsetY < 30) {
        this.mouseData = "取消订阅了，5秒后恢复";
        this.tips = 1;
        subscription.unsubscribe();
        let inter = interval(1000).pipe(take(5));
        inter.subscribe(val => {
          this.tips = val + 1;
          if (val == 4) {
            this.tips = null;
            this.mouseData = "";
            this.fromEventTest();
          }
        });
      }
    });
  }
  subjectTest() {
    // https://segmentfault.com/a/1190000008886598#articleHeader11
    let subject = new Subject<any>();
    // 用了asObservable()，则无法使用next()发出值
    let spinnerState = subject.asObservable();
    subject.subscribe(val => {
      console.log(val);
      // subject.unsubscribe();  // 如果不取消订阅，下边的所有next都会执行
    });
    subject.next("Subject");
    // 如果取消了订阅，从这里开始就不执行了，会报错
    subject.next("Subject1");
    subject.next("Subject2");
    subject.next("Subject3");
    subject.next("Subject4");

    setTimeout(() => {
      // 2秒后订阅，没有返回值，这说明Subject不会保存状态，执行完就完了
      subject.subscribe(val => console.log(val));
    }, 2000);
    /**************************************************************************/
    let replaysubject = new ReplaySubject<any>(2); // 参数是2，所以只取最后执行两次next的值
    replaysubject.next("ReplaySubject1");
    replaysubject.next("ReplaySubject2");
    replaysubject.next("ReplaySubject3");
    replaysubject.next("ReplaySubject4");
    replaysubject.next("ReplaySubject5");
    replaysubject.next("ReplaySubject6");

    replaysubject.subscribe(val => {
      console.log(val);
    });

    setTimeout(() => {
      // 3秒后订阅,返回最后一个值，这说明ReplaySubject可以根据初始化参数n，永久保存最后n个值
      replaysubject.subscribe(val => console.log(val));
    }, 3000);

    /**************************************************************************/
    // BehaviorSubject 跟 Subject 最大的不同就是 BehaviorSubject 是用来保存当前最新的值，
    // 而不是单纯的发送事件。BehaviorSubject 会记住最近一次发送的值，并把该值作为当前值保存在内部的属性中。
    let behaviorsubject = new BehaviorSubject(0); // 设定初始值
    behaviorsubject.next(1);
    behaviorsubject.next(2);
    behaviorsubject.next(3);
    behaviorsubject.next(4);
    behaviorsubject.next(5);
    behaviorsubject.subscribe(val => console.log(val));
    setTimeout(() => {
      // 4秒后订阅,返回最后一个值，这说明BehaviorSubject可以永久保存最后一个值
      behaviorsubject.subscribe(val => console.log(val));
    }, 4000);
  }
  finalizeFn() {
    console.log("finalizeFn");
  }
  finalizeTest() {
    let goodUrl = "module1data"; // 正常流程
    this.http
      .getData(goodUrl)
      .pipe(
        finalize(() => this.finalizeFn()) // 在整套订阅终止时调用，排在subscribe后边
      )
      .subscribe(data => console.log(data));
  }
  testHttpError() {
    // 用来测试  catchError
    let catchBadResponse = (err: any, source: Observable<any>) => {
      console.log("err", err);
      // console.log('source',source)  // 没多大用
      return of("错误处理函数返回的数据"); // 返回一个Observable，让后边的subscribe可以订阅，发生错误时返回这个数据
    };
    this.http
      .getData("module1datax")
      .pipe(
        retry(3), // 规定发生错误后尝试再次请求次数
        catchError(catchBadResponse)
      )
      .subscribe(
        data => console.log(data)
        // err => console.log('err7',err)     // 如果加了catchError，就不会再执行这个
      );
  }
  switchMapTest() {
    let obs1 = interval(1100).pipe(
      take(3),
      tap(val => console.log(val)),
      // 外侧发出一个值，就执行内侧switchMap一次，如果内侧switchMap没有执行完，外侧又发出一次值，则立即
      //  停止进行中的内侧switchMap，并重新执行内侧switchMap
      switchMap(val => interval(600).pipe(take(2)))
    );
    obs1.subscribe(val => console.log(val + "**"));
  }

  /**********************************************************/
  // forkJoin 是 RxJS 版本的 Promise.all()，即表示等到所有的 Observable 对象都完成后，才一次性返回值。
  // 处理多个并发Http请求
  forkJoinTest() {
    let goodUrl = "module1data"; // 正常流程
    let post1$ = this.http.getData(goodUrl);
    let post2$ = this.http.getData(goodUrl);
    let post1 = "";
    let post2 = "";

    forkJoin([post1$, post2$]).subscribe(results => {
      post1 = results[0];
      post2 = results[1];
      console.log(post1, post2);
    });
  }
  deferTest() {
    // defer：惰性创建 Observable, 也就是说, 当且仅当它被订阅的时候才创建。
    let arr = [1, 2, 3, 4, 5, 6];
    const clicksOrInterval = defer(() => {
      return of(arr);
    });
    clicksOrInterval.subscribe(x => console.log(x));
  }
  concatTest() {
    let obs1 = interval(1000).pipe(
      take(3),
      map(val => `obs1-${val}`)
    );
    let obs2 = interval(700).pipe(
      take(3),
      map(val => `obs2-${val}`)
    );
    let obs3 = interval(600).pipe(
      take(3),
      map(val => `obs3-${val}`)
    );

    // concat 是顺序执行
    concat(obs1, obs2, obs3).subscribe(val => console.log(val));
  }
  concatMapTest() {
    let obs1 = interval(1000).pipe(
      take(3),
      map(val => `obs1-${val}`)
    );
    let obs2 = interval(700).pipe(
      take(3),
      map(val => `obs2-${val}`)
    );
    let obs3 = interval(600).pipe(
      take(3),
      map(val => `obs3-${val}`)
    );

    // concatMap 是顺序执行外侧，然后外侧的每一个值都触发一次内侧的执行，再根据外侧值得顺序输出值
    obs2
      .pipe(concatMap(_ => interval(500).pipe(take(4))))
      .subscribe(val => console.log(val));
  }
  combineLatestTest() {
    let obs1 = interval(1000).pipe(
      take(3),
      map(val => `obs1-${val}`)
    );
    let obs2 = interval(700).pipe(
      take(3),
      map(val => `obs2-${val}`)
    );
    let obs3 = interval(600).pipe(
      take(3),
      map(val => `obs3-${val}`)
    );

    // 第一种用法，用来监听很多个Observable，并实时更新数据组，返回相应顺序的数组
    // combineLatest(obs1, obs2, obs3)
    //   .subscribe(val => console.log(val));

    // 第二种用法，将数据经过固定的combineLatest函数进行处理，返回处理结果
    combineLatest(obs1, obs2)
      .pipe(
        map(([data1, data2]) => {
          console.log(data1);
          console.log(data2);
          return 3;
        })
      )
      .subscribe(val => console.log(val));
  }
  zipTest() {
    // zip会等待每一个Observable都发出index对应的值，才会发出值组成的数组
    let obs1 = interval(1000).pipe(
      take(3),
      map(val => `obs1-${val}`)
    );
    let obs2 = interval(700).pipe(
      take(3),
      map(val => `obs2-${val}`)
    );
    let obs3 = interval(600).pipe(
      take(3),
      map(val => `obs3-${val}`)
    );

    zip(obs1, obs3, obs2).subscribe(val => console.log(val));
  }
  exhaustMapTest() {
    // 外侧每次发出的值，都会触发内侧的执行，但内侧会完整的执行一边，在执行过程中会忽略外侧的值
    // 等内侧执行完毕后，如果外侧又发出新值，就会触发内侧再次完整的执行一次
    let obs3 = interval(600).pipe(take(5));
    obs3
      .pipe(
        tap(val => console.log(val)),
        exhaustMap(_ =>
          interval(500).pipe(
            take(2),
            map(val => `obs3-${val}`)
          )
        )
      )
      .subscribe(val => console.log(val));
  }
  shareTest() {
    // 它可以多播（共享）原始的Observable。只要至少有一个订阅者，此Observable将被订阅并发送数据
    // multicast(() => new Subject()), refCount() 的别名,无论什么时候订阅的obs1，得到的val都市当下最新值
    let obs1 = interval(1000).pipe(
      take(6),
      share()
    );
    setTimeout(_ => obs1.subscribe(val => console.log(val + "**800ms")), 800);
    setTimeout(_ => obs1.subscribe(val => console.log(val + "**1200ms")), 1200);
    setTimeout(_ => obs1.subscribe(val => console.log(val + "**2100ms")), 2100);
  }
  takeUntilTest() {
    // obs2一直执行着，直到obs1发出值才停止
    let obs1 = interval(3000).pipe(take(1));
    let obs2 = interval(700).pipe(map(val => `obs2-${val}`));
    obs2.pipe(takeUntil(obs1)).subscribe(val => console.log(val));
  }
  mergeMapTest() {
    // 内侧的每一个值，都会与外侧的所有值过一遍
    const letters = of("a", "b", "c");
    const result = letters.pipe(
      mergeMap(x =>
        interval(1000).pipe(
          take(3),
          map(i => x + i)
        )
      )
    );
    result.subscribe(x => console.log(x));
  }
  mergeTest() {
    //  与 combineLatest 类似，但发出的值时一个值，任何一个Observable发出值，都会触发merge
    let obs1 = interval(1000).pipe(
      take(3),
      map(val => `obs1-${val}`)
    );
    let obs2 = interval(700).pipe(
      take(3),
      map(val => `obs2-${val}`)
    );
    let obs3 = interval(600).pipe(
      take(3),
      map(val => `obs3-${val}`)
    );

    merge(obs1, obs3, obs2).subscribe(val => console.log(val));
  }
  testFind() {
    // 仅发出满足某些条件的源Observable发出的第一个值。
    of("a", "s", "d", "f", "g", "h")
      .pipe(
        find(val => {
          return val == "f";
        })
      )
      .subscribe(val => {
        console.log(val);
      });
    // 仅发出满足某些条件的源Observable发出的第一个值的index。
    of("a", "s", "d", "f", "g", "h")
      .pipe(
        findIndex(val => {
          return val == "f";
        })
      )
      .subscribe(val => {
        console.log(val);
      });
  }
}
