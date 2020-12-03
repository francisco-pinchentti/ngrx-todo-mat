import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';

import { TodoListComponent } from './todo-list.component';
import { TodoItem } from '@app/models/TodoItem';

const initialState = {
    todos: {
        todos: [],
        selectedTodo: null,
    }
};

/**
 * Mock child components
 */
@Component({
    selector: 'app-todo-form',
    template: '<div></div>',
})
class MockedTodoFormComponent {}

@Component({
    selector: 'app-todo-card',
    template: '<div class="app-todo-card"></div>'
})
class MockedTodoCardComponent {
    @Input() todo?: any;
}

/**
 * Testing the list
 */
describe('TodoListComponent', () => {
    let component: TodoListComponent;
    let fixture: ComponentFixture<TodoListComponent>;
    let store: MockStore;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TodoListComponent,
                MockedTodoFormComponent,
                MockedTodoCardComponent
            ],
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

    it('should have an empty list initially', () => {
        const listWrapperDivs: NodeList = fixture.nativeElement.querySelectorAll('section>div.cc');
        expect(listWrapperDivs.length).toBe(0);
    });

    /**
     * MockStore doesn't writes state with dispatch,
     * but you can use store.setState(...)
     * 
     * {@link https://ngrx.io/guide/store/testing#using-a-mock-store}
     */
    describe('when there is an item in the store', () => {
        it('should have a list with a length of 1', () => {
            const item = new TodoItem('unit test', '', false, 'ut001');
            store.setState({
                todos: {
                    todos: [item],
                    selectedTodo: null
                }
            });
            fixture.detectChanges();
            const listWrapperDivs: NodeList = fixture.nativeElement.querySelectorAll('section>div.cc');
            expect(listWrapperDivs.length).toBe(1);
        });
    });

});
