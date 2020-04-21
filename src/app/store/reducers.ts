import { ActionReducerMap } from '@ngrx/store';
import { TodoItem } from '../models/TodoItem';
import { reducer as todosReducer } from './todos/todos.reducer';

export interface AppState {
    todos: TodoItem[];
}

export const reducers: ActionReducerMap<AppState> = {
    todos: todosReducer,
};
