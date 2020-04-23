import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TodoItem } from '@app/models/TodoItem';
import { AppState } from '@app/store/reducers';
import { Store } from '@ngrx/store';
import { TodoActions } from '@app/store/todos/todos.action';
import { getSelectedTodo } from '@app/store/todos/todos.selectors';

@Component({
    selector: 'app-todo-form',
    templateUrl: './todo-form.component.html',
    styleUrls: ['./todo-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent implements OnInit {
    form: FormGroup;
    isDone = new FormControl(false);

    @Output()
    onAccept: EventEmitter<TodoItem> = new EventEmitter();

    constructor(private fb: FormBuilder, private store: Store<AppState>) {
        this.form = this.fb.group({
            id: [null],
            title: ['', Validators.required],
            body: ['', Validators.maxLength(255)],
        });
    }

    ngOnInit(): void {
        this.store.select(getSelectedTodo).subscribe((t) => {
            if (t) {
                this.isDone.setValue(t.isDone);
                this.form.get('id').setValue(t.id);
                this.form.get('title').setValue(t.title);
                this.form.get('body').setValue(t.body);
            } else {
                this.isDone.setValue(false);
                this.form.get('id').setValue(null);
                this.form.get('title').setValue('');
                this.form.get('body').setValue('');
            }
        });
    }

    public onSubmit(): void {
        const raw = this.form.getRawValue();
        const item = new TodoItem(raw.title, raw.body, this.isDone.value, raw.id);
        if (raw.id) {
            this.store.dispatch(TodoActions.Update(item));
        } else {
            this.store.dispatch(TodoActions.Add(item));
        }
        this.onAccept.emit(item);
        this.form.reset();
        this.isDone.setValue(false);
    }
}
