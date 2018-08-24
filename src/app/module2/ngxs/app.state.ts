import {
  TodoStateModel,
  appStates
} from './todo.state';
import { statesOther } from './other.state'

// 定义根目录级别的state
export const states = [
  ...appStates,
  ...statesOther
];
