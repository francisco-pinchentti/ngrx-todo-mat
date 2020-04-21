import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// ngrx
import { provideMockStore, MockStore } from '@ngrx/store/testing';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

// component
import { TodoSummaryItemComponent } from './todo-summary-item.component';

// mocks store
const initialState = {
    todos: [],
    selectedTodo: null,
};

describe('TodoSummaryItemComponent', () => {
    let component: TodoSummaryItemComponent;
    let fixture: ComponentFixture<TodoSummaryItemComponent>;
    let store: MockStore;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoSummaryItemComponent],
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                MatButtonModule,
                MatFormFieldModule,
                MatInputModule,
                MatCheckboxModule,
            ],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();

        store = TestBed.inject(MockStore);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoSummaryItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
