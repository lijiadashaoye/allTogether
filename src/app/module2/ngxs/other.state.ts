import {
  State,
  Action,
  StateContext,
  Selector,
  ofAction,
  ofActionDispatched,
  ofActionSuccessful
} from "@ngxs/store";

import { tap } from "rxjs/operators";

// ofAction：当发生以下任何生命周期事件时触发
// ofActionDispatched：在调度操作时触发
// ofActionSuccessful：成功完成操作时触发
// ofActionCanceled：取消操作时触发

/*************************
 * 测试 setState
 * ********************************/
export class useSetStateAction {
  static type = "[useSetState] useSetState";
  constructor(public readonly payload: string) {}
}
@State({
  name: "useSetState",
  defaults: []
})
export class UseSetState {
  @Selector()
  static testFn(state) {
    return state;
  }
  @Action(useSetStateAction)
  testSetState(
    { dispatch, getState, setState }: StateContext<string>,
    { payload }: useSetStateAction
  ) {
    let state = getState();
    setState(payload); // 变更状态方法，为字符串或者数字时
    // dispatch(new OtherStateAction('33333')) // 可用来发出另外的action
  }
}
/***************************
 * 将一个状态作为子状态添加到另外的状态里
 * ******************************/
import { httpService } from "./http.service";

export class OtherStateAction {
  static type = "[other] other";
  constructor(public readonly payload: string) {}
}
export class lifeTimeAction {
  static type = "[other] lifeTime";
  constructor(public readonly payload: string) {}
}
@State({
  name: "other",
  defaults: []
})
export class OtherState {
  constructor(private http: httpService) {}

  @Selector()
  static testFn(state) {
    return state;
  }
  @Action(OtherStateAction, { cancelUncompleted: true })
  testSetState(
    { getState, setState }: StateContext<string>,
    { payload }: OtherStateAction
  ) {
    return this.http.getData().pipe(
      // 可使用注入，做http请求
      tap(val => {
        let state = getState();
        setState(payload); // 变更状态方法

        // 也可以发起另外一个action
        // map(() => context.dispatch(new GetUsers()))
      })
    );
  }

  @Action(lifeTimeAction)
  lifeTimeAction(ctx: StateContext<string>, data: lifeTimeAction) {
    ctx.setState(data.payload);
  }
}
/*****************************
 * 另外一套状态，与todo同级
 * ****************************/

export class OneAction {
  static type = "[myState] oneAction";
  constructor(public readonly payload: object) {}
}
export class TwoAction {
  static type = "[myState] twoAction";
  constructor(public readonly payload: string[]) {}
}
export class TwoActionRemove {
  static type = "[myState] twoActionRemove";
  constructor(public readonly payload: number) {}
}

export interface StateDataModel {
  one: string[];
  two: {
    name: any;
    age: number;
  };
  other: [""];
}
@State<StateDataModel>({
  // 定义初始状态
    // 状态对象属性二：myState，与todos同级
  name: "myState",
  defaults: {
    one: [],
    two: {
      name: "ffbvbssdadfasdfasdf",
      age: 53
    },
    other: [""]
  },
  children: [UseSetState, OtherState] //  给定状态的子状态,到时候会将children中定义的各个作为myState的属性添加进去
})
export class OneState {
  @Selector() // 这个是为了方便在组件里获取想要的数据，其实可以不写
  static selectorFn(state: StateDataModel) {
    return state;
  }
  // 定义，当组件内执行this.store.dispatch(new OneAction(data))时的执行函数，同时把data作为payload数据参数
  // 如果要修改的状态不是字符串或数字，要用patchState，字符串或数字用 setState
  @Action(OneAction)
  OneAction1(
    { getState, setState, patchState }: StateContext<any>,
    { payload }: OneAction
  ) {
    let state = getState();
    let metaData = state.two;
    patchState({
      two: { ...metaData, ...payload }
    });
  }
  @Action(TwoAction)
  TwoAction(
    { getState, setState, patchState }: StateContext<any>,
    { payload }: TwoAction
  ) {
    patchState({
      one: [...getState().one, ...payload]
    });
  }
  @Action(TwoActionRemove)
  twoActionRemove(
    { getState, setState, patchState }: StateContext<any>,
    { payload }: TwoActionRemove
  ) {
    let oneData = getState().one;
    let removeData = oneData[payload];
    patchState({
      one: [...oneData.filter(data => data !== removeData)] // 移除时采用的方法
    });
  }
}

/*********************************************************************/

// 定义整个软件的总的state
export const statesOther = [OneState, UseSetState, OtherState];
