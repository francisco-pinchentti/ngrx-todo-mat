import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
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

    constructor() {}
}
