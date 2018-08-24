import { State, Action, StateContext, Selector } from "@ngxs/store";
import { of } from "rxjs";
import { tap } from "rxjs/operators";

// 创建action
export class AddTodo {
  static type = "[todo] AddTodo";
  constructor(public readonly payload: string) {}
}

export class RemoveTodo {
  static type = "[todo] RemoveTodo";
  constructor(public readonly payload: number) {}
}

@State({
  name: "todo",
  defaults: []
})
export class TodoState {
  @Selector()
  static pandas(state: string[]) {
    return state.filter(s => s.indexOf("panda") > -1);
  }
  @Action(AddTodo)
  addTodo(
    {
      // 函数名可以随便取，后边会调用
      getState, // 初始状态
      setState // 要变的状态
    }: StateContext<string[]>,
    {
      payload // 附加数据
    }: AddTodo
  ) {
    setState([...getState(), payload]); // 变更状态方法，不要删除之前的数据，始终是往里添加
  }

  @Action(RemoveTodo)
  removeTodo(
    { getState, setState }: StateContext<string[]>,
    { payload }: RemoveTodo
  ) {
    setState(
      getState().filter((_, i) => {
        return i !== payload;
      })
    );
  }
}
/*******************************************************/

// 1：定义action
export class SetPrefix {
  static type = "[todos] SetPrefix"; // 命名时要在前边标上属于哪个state
}

export class LoadData {
  static type = "[todos] LoadData";
}

export class TodoStateModel {
  todo: string[];
  pizza: {
    model: any;
  };
}

// 2：定义不同action触发的state
@State<TodoStateModel>({
  // 状态对象属性一：todos
  // 可以规定state的数据结构
  name: "todos", // name用来标识来自哪里，这个字段是必须被赋值并且不可重复的
  defaults: {
    // defaults用来定义state数据结构
    todo: [],
    pizza: {
      model: undefined
    }
  },
  children: [TodoState] //  给定状态的子状态
})
export class TodosState {
  @Selector()
  static pizza(state: TodoStateModel) {
    return state.pizza;
  }
  @Action(SetPrefix)
  setPrefix({ getState, setState, patchState }) {
    const state = getState();
    const pizza1 = state.pizza.model.toppings;
    patchState({
      pizza: {
        model: {
          toppings: "Mr. " + pizza1
        }
      }
    });
  }

  @Action(LoadData)
  loadData({ patchState }) {
    const data = {
      toppings: "pineapple",
      crust: "medium",
      extras: [false, false, true]
    };
    return of(data).pipe(
      tap((vals: any) => {
        patchState({
          pizza: {
            model: {
              ...vals
            }
          }
        });
      })
    );
  }
}

// 定义根目录级别的state
export const appStates = [
  TodosState, // 第一个
  TodoState // 第二个
];
