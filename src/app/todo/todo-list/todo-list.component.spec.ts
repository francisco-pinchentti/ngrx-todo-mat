import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';

import { TodoListComponent } from './todo-list.component';

const initialState = {
    todos: [],
    selectedTodo: null,
};

// mock a child component:
@Component({
    selector: 'app-todo-summary-item',
    template: '<div></div>',
})
class MockedTodoSummaryItemComponent {}

describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;
    let store: MockStore;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoListComponent, MockedTodoSummaryItemComponent],
            imports: [NoopAnimationsModule, MatExpansionModule, MatDividerModule, MatBadgeModule],
            providers: [provideMockStore({ initialState })],
        }).compileComponents();
        store = TestBed.inject(MockStore);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
