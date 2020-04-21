import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSummaryItemComponent } from './todo-summary-item.component';

describe('TodoSummaryItemComponent', () => {
    let component: TodoSummaryItemComponent;
    let fixture: ComponentFixture<TodoSummaryItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoSummaryItemComponent],
        }).compileComponents();
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
