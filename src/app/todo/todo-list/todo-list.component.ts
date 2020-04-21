import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store/reducers';
import { getTodosList } from '@app/store/todos/todos.selectors';
import { TodoItem } from '@app/models/TodoItem';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
    public todos: TodoItem[] = [];
    public isEditExpanded = false;
    public editing: TodoItem;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        this.store.select(getTodosList).subscribe((todos) => (this.todos = todos));
    }

    onCardSelected(t: TodoItem): void {
        if (!this.isEditExpanded) {
            this.editing = t;
            this.isEditExpanded = true;
        }
    }

    onEditAccept(t: TodoItem): void {
        this.isEditExpanded = false;
        this.editing = null;
    }
}
