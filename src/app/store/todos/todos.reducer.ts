import produce from 'immer';
import { TodoActions } from '@app/store/todos/todos.action';
import { TodoItem } from '@app/models/TodoItem';

export const initialState = {
    todos: [],
};

export const producer = (draft, action) =>
    TodoActions.match(action, {
        Add: (t: TodoItem) => {
            draft.todos.push(t);
        },
        Remove: (id: string) => {
            draft.todos = draft.todos.filter((t) => t.id !== id);
        },
        default: () => {},
    });

export const reducerProducer = produce(producer, initialState);

export function reducer(state, action) {
    return reducerProducer(state, action);
}
