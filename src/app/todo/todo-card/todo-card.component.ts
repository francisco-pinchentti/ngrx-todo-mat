import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '@app/models/TodoItem';

@Component({
    selector: 'app-todo-card',
    templateUrl: './todo-card.component.html',
    styleUrls: ['./todo-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCardComponent {
    @Input()
    todo: TodoItem;

    @Output()
    onDelete: EventEmitter<void> = new EventEmitter();

    @Output()
    onEdit: EventEmitter<void> = new EventEmitter();

    constructor() {}

    onEditClick() {
        this.onEdit.emit();
    }

    onDeleteClick() {
        this.onDelete.emit();
    }
}
