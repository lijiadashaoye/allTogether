import {
  State,
  Selector,
  Action,
  StateContext
} from '@ngxs/store';

export class ListAction {
  static type = "list"
  constructor(public readonly payload: object[]) { }
}
@State({    // 定义子状态
  name: 'lists',
  defaults: {
    list: {
      model: undefined,
      dirty: false,
      status: "",
      errors: {}
    }
  }
})
export class ListState {
  @Selector()
  static hello(state) {
    return state
  }
  @Action(ListAction)
  OneAction1(ctx: StateContext<any>, action: ListAction) {
    let state = ctx.getState().list.model;
    ctx.patchState({
      list: {
        model: { ...state, ...action.payload }
      }
    })
  }

}
