import { combineReducers } from 'redux';
import { RootState } from './state';
import { todoReducer } from './todos';
import { routerReducer, RouterState } from 'react-router-redux';

export { RootState, RouterState };

// TODO: remove the 'as any' when react-router-redux is stabilised
export const rootReducer = combineReducers<RootState>({
  todos: todoReducer as any,
  router: routerReducer as any
});
