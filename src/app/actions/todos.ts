import { TodoModel } from 'app/models/TodoModel';

export namespace TodoActions {
  export enum Type {
    ADD_TODO = 'ADD_TODO',
    EDIT_TODO = 'EDIT_TODO',
    DELETE_TODO = 'DELETE_TODO',
    COMPLETE_TODO = 'COMPLETE_TODO',
    COMPLETE_ALL = 'COMPLETE_ALL',
    CLEAR_COMPLETED = 'CLEAR_COMPLETED'
  }

  export type AddTodoAction = {
    type: Type.ADD_TODO;
    text: TodoModel['text'];
  };

  export const addTodo = (payload: { text: string }): AddTodoAction => ({
    type: Type.ADD_TODO,
    text: payload.text
  });

  export type EditTodoAction = {
    type: Type.EDIT_TODO;
    id: TodoModel['id'];
    text: TodoModel['text'];
  };
  export const editTodo = (payload: { id: number; text: string }): EditTodoAction => ({
    type: Type.EDIT_TODO,
    id: payload.id,
    text: payload.text
  });

  export type DeleteTodoAction = {
    type: Type.DELETE_TODO;
    id: TodoModel['id'];
  };

  export const deleteTodo = (payload: { id: number }): DeleteTodoAction => ({
    type: Type.DELETE_TODO,
    id: payload.id
  });

  export type CompleteTodoAction = {
    type: Type.COMPLETE_TODO;
    id: TodoModel['id'];
  };

  export const completeTodo = (payload: { id: number }): CompleteTodoAction => ({
    type: Type.COMPLETE_TODO,
    id: payload.id
  });

  export type CompleteAllAction = {
    type: Type.COMPLETE_ALL;
  };

  export const completeAll = (): CompleteAllAction => ({ type: Type.COMPLETE_ALL });

  export type ClearCompletedAction = {
    type: Type.CLEAR_COMPLETED;
  };

  export const clearCompleted = (): ClearCompletedAction => ({ type: Type.CLEAR_COMPLETED });
}

export default {
  addTodo: TodoActions.addTodo,
  editTodo: TodoActions.editTodo,
  deleteTodo: TodoActions.deleteTodo,
  completeTodo: TodoActions.completeTodo,
  completeAll: TodoActions.completeAll,
  clearCompleted: TodoActions.clearCompleted
};
