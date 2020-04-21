import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '@app/models/TodoItem';

@Component({
    selector: 'app-todo-card-item',
    templateUrl: './todo-card-item.component.html',
    styleUrls: ['./todo-card-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoCardItemComponent {
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
