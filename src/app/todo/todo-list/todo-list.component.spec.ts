import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';

import { TodoListComponent } from './todo-list.component';

// transitive dependencies:
import { TodoSummaryItemComponent } from '../todo-summary-item/todo-summary-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

// store state:
const initialState = {
    todos: [],
    selectedTodo: null,
};

describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;
    let store: MockStore;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoListComponent, TodoSummaryItemComponent],
            imports: [NoopAnimationsModule, MatExpansionModule, MatDividerModule, MatBadgeModule, ReactiveFormsModule,
                MatButtonModule,
                MatFormFieldModule,
                MatInputModule,
                MatCheckboxModule,],
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
