import { List } from 'immutable';
import { RootState } from './state';
import { TodoActions } from 'app/actions/todos';

const initialState: RootState.TodoState = List([
  {
    id: 1,
    text: 'Use Redux',
    completed: false
  }
]);

export const todoReducer = (
  state: RootState.TodoState = initialState,
  action:
    | TodoActions.AddTodoAction
    | TodoActions.EditTodoAction
    | TodoActions.DeleteTodoAction
    | TodoActions.CompleteTodoAction
    | TodoActions.CompleteAllAction
    | TodoActions.ClearCompletedAction
) => {
  switch (action.type) {
    case TodoActions.Type.ADD_TODO:
      return state.push({
        id: state.reduce((max, todo) => Math.max(todo.id || 1, max), 0) + 1,
        completed: false,
        text: action.text
      });
    case TodoActions.Type.EDIT_TODO:
      return state.map((todo) => (todo.id === action.id ? { ...todo, text: action.text } : todo));
    case TodoActions.Type.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TodoActions.Type.COMPLETE_TODO:
      return state.map((todo) => (todo.id === action.id ? { ...todo, completed: true } : todo));
    case TodoActions.Type.COMPLETE_ALL:
      return state.map((todo) => ({ ...todo, completed: true }));
    case TodoActions.Type.CLEAR_COMPLETED:
      return state.filter((todo) => todo.completed === false);
    default:
      return state;
  }
};
