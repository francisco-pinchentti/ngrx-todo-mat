import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';
import { TodoActions } from '@app/store/todos/todos.action';
import { TodoItem } from '@app/models/TodoItem';

export const initialState = {
    todos: [],
    selectedTodo: null,
};

export const producer = (draft, action) =>
    TodoActions.match(action, {
        Add: (t: TodoItem) => {
            draft.todos.push({ ...t, id: uuidv4() });
        },
        Remove: (id: string) => {
            draft.todos = draft.todos.filter((t) => t.id !== id);
        },
        Select: (t: TodoItem) => {
            draft.selectedTodo = t;
        },
        Update: (t: TodoItem) => {
            draft.todos = draft.todos.filter((td) => td.id !== t.id).concat(t);
            draft.selectedTodo = null;
        },
        default: () => {},
    });

export const reducerProducer = produce(producer, initialState);

export function reducer(state, action) {
    return reducerProducer(state, action);
}
