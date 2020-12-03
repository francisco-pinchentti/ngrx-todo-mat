import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getTodosList, getSelectedTodo } from '@app/store/todos/todos.selectors';
import { TodoItem } from '@app/models/TodoItem';
import { TodoActions } from '@app/store/todos/todos.action';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
    public isEditExpanded = false;

    constructor(private store: Store<AppState>) {}

    get todos$() {
        return this.store.select(getTodosList);
    }

    get panelTitle$(): Observable<string> {
        return this.store.select(getSelectedTodo).pipe(
            map((t) => {
                if (t) {
                    return 'Update item';
                } else {
                    return 'Add new Item';
                }
            })
        );
    }

    onEdit(t: TodoItem): void {
        if (!this.isEditExpanded) {
            this.isEditExpanded = true;
            this.store.dispatch(TodoActions.Select(t));
        }
    }

    onEditAccept(t: TodoItem): void {
        this.isEditExpanded = false;
    }

    onDelete(t: TodoItem): void {
        if (!this.isEditExpanded) {
            this.store.dispatch(TodoActions.Remove(t.id));
        }
    }

    onPanelClosed() {
        this.store.dispatch(TodoActions.Select(null));
        this.isEditExpanded = false;
    }
}
