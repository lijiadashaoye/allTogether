import { Component, Renderer2, ElementRef } from "@angular/core";
import { Router } from "@angular/router";
import { fromEvent } from "rxjs";
import { debounceTime } from "rxjs/operators";
import {
  Store,
  Select,
  Actions,
  ofAction,
  ofActionDispatched,
  ofActionSuccessful
} from "@ngxs/store";
import { Observable } from "rxjs";
import { FormBuilder, FormArray, FormGroup } from "@angular/forms";
import {
  AddTodo,
  RemoveTodo,
  TodoState,
  SetPrefix,
  TodosState,
  LoadData
} from "../todo.state";

// import {
//   SendWebSocketMessage,
//   ConnectWebSocket
// } from '@ngxs/websocket-plugin';​

import {
  Navigate,
  RouterNavigation,
  RouterCancel,
  RouterError
} from "@ngxs/router-plugin";

import {
  OneState,
  OneAction,
  TwoAction,
  useSetStateAction,
  UseSetState,
  OtherStateAction,
  OtherState,
  lifeTimeAction,
  TwoActionRemove
} from "../other.state";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class NgxsFormsTemplateComponent {

  todos$: Observable<string[]>;
  @Select(TodoState.pandas)
  pandas$: Observable<string[]>;
  @Select(TodosState.pizza)
  pizza$: Observable<any>;

  @Select(OneState.selectorFn)
  data$: Observable<any>; // 获取state定义文件内Selector函数的返回值
  @Select(UseSetState.testFn)
  test$: Observable<any>; // 获取state定义文件内Selector函数的返回值
  @Select(OtherState.testFn)
  other$: Observable<any>; // 获取state定义文件内Selector函数的返回值

  pizzaForm: FormGroup;
  allExtras = [
    {
      name: "cheese",
      selected: false
    },
    {
      name: "mushrooms",
      selected: false
    },
    {
      name: "olives",
      selected: false
    }
  ];
  animals$: Observable<string[]>;
  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private actions: Actions
  ) {
    // 另外一种订阅action的写法，等同于：
    // @Select(TodoState)
    // todos$: Observable<string[]>;
    this.todos$ = store.select(TodoState)

    // 状态变化可以实时监听
    // this.todos$.subscribe(val => {
    //   console.log(val)
    // })
    // this.data$.subscribe(val => {
    //   console.log(val)
    // })
    // this.test$.subscribe(val => {
    //   console.log(val)
    // })
    // 第一种监听state的方法
    // this.other$.subscribe(val => {
    //   let token = this.store.selectSnapshot(OtherState.name);
    //   console.log(token)
    //   console.log(val)
    // })
    // // 第二种监听state的方法
    // this.store.select(state => state).pipe(debounceTime(200))
    //   .subscribe(val => console.log(val))

    // 每个页面都有状态，如果路由离开再回来，会发现状态打印两次
    this.actions // action的生命周期
      .pipe(
        ofActionDispatched(lifeTimeAction) // 在调度lifeTimeAction操作时触发
      )
      .subscribe(val => {
        console.log("ofActionDispatched", val);
      });
    this.actions
      .pipe(
        ofAction(lifeTimeAction) // 全周期，只要触发lifeTimeAction，就会执行
      )
      .subscribe(val => {
        console.log("ofAction", val);
      });
    this.actions
      .pipe(
        ofActionSuccessful(lifeTimeAction) // 成功完成操作时触发
      )
      .subscribe(val => {
        console.log("ofActionSuccessful", val);
      });
  }
  ngOnInit(): void {
    // this.store.dispatch(new ConnectWebSocket(  // 建立连接
    // url: 'ws://localhost:4200/websock'     // 在这里写url，则表示在此才需要建立连接
    // ));
    this.pizzaForm = this.formBuilder.group({
      toppings: [""],
      crust: [
        {
          value: "thin",
          disabled: true
        }
      ],
      extras: this.createExtras()
    });
  }

  addTodo(todo: string) {
    this.store.dispatch(new AddTodo(todo));
  }

  removeTodo(index: number) {
    this.store.dispatch(new RemoveTodo(index)).subscribe(() => {
      console.log("Removed!");
    });
  }

  createExtras() {
    const arr = this.allExtras.map(extra => {
      return this.formBuilder.control(extra.selected);
    });
    return this.formBuilder.array(arr);
  }

  get extras() {
    const ctl: FormArray = <FormArray>this.pizzaForm.get("extras");
    return ctl.controls;
  }

  onSubmit() {
    this.pizzaForm.patchValue({
      toppings: "olives"
    });
  }

  onPrefix() {
    this.store.dispatch(new SetPrefix());
  }

  onLoadData() {
    this.store.dispatch(new LoadData());
  }
  // onStocket(){   // 发送消息
  //   this.store.dispatch(new SendWebSocketMessage({ foo: true }));
  // }
  routeTest() {
    this.store.dispatch(new Navigate(["/module2/ngxs/list"]));
  }
  oneData = "";
  OneAction1() {
    let data = {
      name: "243234234",
      age: 2344234234
    };
    this.store.dispatch(new OneAction(data)).subscribe(val => {
      this.oneData = val.myState.one;
    });
  }
  listData = [];
  TwoAction() {
    let random = parseInt((Math.random() * 10).toString()).toString();
    let str = random + random + random;
    let data = [str];
    this.store.dispatch(new TwoAction(data)).subscribe(val => {
      this.listData = val.myState.one;
    });
  }
  TwoActionRemove() {
    let random = parseInt((Math.random() * this.listData.length).toString());
    this.store.dispatch(new TwoActionRemove(random)).subscribe(val => {
      this.listData = val.myState.one;
    });
  }
  useSetState() {
    this.store.dispatch(new useSetStateAction("test")).subscribe(val => {
      console.log(val);
    });
  }
  otherStateAction() {
    this.store
      .dispatch(new OtherStateAction("OtherStateAction"))
      .subscribe(val => {
        console.log(val);
      });
  }
  lifetime() {
    this.store.dispatch(new lifeTimeAction("lifeTime")).subscribe(val => {
      console.log(val);
    });
  }
}
