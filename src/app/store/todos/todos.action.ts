import { ofType, unionize } from 'unionize';
import { TodoItem } from '@app/models/TodoItem';

export const TodoActions = unionize(
    {
        Add: ofType<TodoItem>(),
        Remove: ofType<string>(),
    },
    { tag: 'type', value: 'payload' }
);
