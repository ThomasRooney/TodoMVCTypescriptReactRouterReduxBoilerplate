import {List} from 'immutable';
import { TodoModel } from 'app/models/TodoModel';
import { RouterState } from 'react-router-redux';

export interface RootState {
  todos: RootState.TodoState;
  router: RouterState;
}

export namespace RootState {
  export type TodoState = List<TodoModel>;
}
