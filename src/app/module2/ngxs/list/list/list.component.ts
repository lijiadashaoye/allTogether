import { Component, OnInit } from "@angular/core";
import { ListState, ListAction } from "../list.state";
import { Store, Select, Actions } from "@ngxs/store";
import { Observable } from "rxjs";
import { FormBuilder, FormArray, FormGroup } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import {
  Navigate,
  RouterNavigation,
  RouterCancel,
  RouterError
} from "@ngxs/router-plugin";

import {
  UpdateFormDirty,
  UpdateFormValue,
  SetFormDisabled,
  SetFormEnabled
} from "@ngxs/form-plugin";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  forms: FormGroup;
  @Select(ListState.hello)
  hello$: Observable<object>;
  constructor(
    private store: Store,
    private fb: FormBuilder,
    private actions: Actions
  ) {
    this.hello$.pipe(debounceTime(200)).subscribe(val => {
      // console.log(val)
    });
  }
  ngOnInit() {
    this.forms = this.fb.group({
      // 1：定义表单
      name: "",
      age: "",
      job: ""
    });
  }
  biaodan1() {
    // 手动执行状态更新,表单绑定了ngxsForm，就不用手动执行action了
    let data = this.forms.value;
    this.store.dispatch(new ListAction(data)).subscribe(val => {
      console.log(val);
    });
  }
  biaodan2() {
    this.store.dispatch(
      // 变更表单的脏值状态
      new UpdateFormDirty({
        dirty: false,
        path: "lists.list"
      })
    );
  }
  biaodan3() {
    this.store.dispatch(
      // 为表单赋值
      new UpdateFormValue({
        value: {
          name: "33333",
          age: "333",
          job: "3333"
        },
        path: "lists.list"
      })
    );
  }
  biaodan4() {
    this.store.dispatch(
      // 将表单设置为不可用
      new SetFormDisabled("lists.list")
    );
  }
  biaodan5() {
    this.store.dispatch(
      // 将表单设置为不可用
      new SetFormEnabled("lists.list")
    );
  }
  routeTest() {
    this.store.dispatch(new Navigate(["/module2/ngxs/FormsComponent"]));
  }
}
