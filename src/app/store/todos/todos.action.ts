import { ofType, unionize } from 'unionize';
import { TodoItem } from '@app/models/TodoItem';

export const TodoActions = unionize(
    {
        Add: ofType<TodoItem>(),
        Update: ofType<TodoItem>(),
        Remove: ofType<string>(),
        Select: ofType<TodoItem>(),
    },
    { tag: 'type', value: 'payload' }
);
