import { ofType, unionize } from 'unionize';
import { TodoItem } from '@app/models/TodoItem';

export const UserActions = unionize({
    Add: ofType<TodoItem>(),
    Remove: ofType<string>(),
}, { tag: 'type', value: 'payload' });
