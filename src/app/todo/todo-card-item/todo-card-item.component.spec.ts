import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCardItemComponent } from './todo-card-item.component';

describe('TodoCardItemComponent', () => {
    let component: TodoCardItemComponent;
    let fixture: ComponentFixture<TodoCardItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoCardItemComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodoCardItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
