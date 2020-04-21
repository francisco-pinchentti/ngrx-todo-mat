import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TodoItem } from '@app/models/TodoItem';
import { AppState } from '@app/store/reducers';
import { Store } from '@ngrx/store';
import { TodoActions } from '@app/store/todos/todos.action';

@Component({
    selector: 'app-todo-summary-item',
    templateUrl: './todo-summary-item.component.html',
    styleUrls: ['./todo-summary-item.component.scss'],
})
export class TodoSummaryItemComponent implements OnInit {
    form: FormGroup;
    isDone = new FormControl(false);

    @Output()
    onAccept: EventEmitter<TodoItem> = new EventEmitter();

    constructor(private fb: FormBuilder, private store: Store<AppState>) {
        this.form = this.fb.group({
            title: ['', Validators.required],
            body: ['', Validators.maxLength(255)],
        });
    }

    ngOnInit(): void {}

    public onSubmit(): void {
        const raw = this.form.getRawValue();
        const newItem = new TodoItem(raw.title, raw.body, this.isDone.value);
        this.onAccept.emit(newItem);
        this.store.dispatch(TodoActions.Add(newItem));
        this.form.reset();
        this.isDone.setValue(false);
    }
}
