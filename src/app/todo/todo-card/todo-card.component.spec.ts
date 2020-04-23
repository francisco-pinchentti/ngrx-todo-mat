import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// material dependencies
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// component
import { TodoCardComponent } from './todo-card.component';

// model
import { TodoItem } from '@app/models/TodoItem';

// mocks:
const MOCKED_ITEM = new TodoItem('a test', 'sample body', false, '1');

class TodoCardComponentPage {
    component: TodoCardComponent;

    constructor(private fixture: ComponentFixture<TodoCardComponent>) {
        this.component = fixture.componentInstance;
    }

    getHTMLElement<T>(selector: string): T {
        return <T>this.fixture.nativeElement.querySelector(selector);
    }
}

describe('TodoCardComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoCardComponent],
            imports: [MatCardModule, MatIconModule],
        }).compileComponents();
    }));

    describe('when no input is given', () => {
        let component: TodoCardComponent;
        let fixture: ComponentFixture<TodoCardComponent>;
        let page: TodoCardComponentPage;

        beforeEach(() => {
            fixture = TestBed.createComponent(TodoCardComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            page = new TodoCardComponentPage(fixture);
        });

        it('should exist', () => {
            expect(component).toBeTruthy();
        });

        it('should have an empty header', () => {
            expect(page.getHTMLElement<HTMLElement>('mat-card-title').textContent).toBeFalsy();
        });

        it('should have an empty body', () => {
            expect(page.getHTMLElement<HTMLElement>('mat-card-content').textContent).toBeFalsy();
        });
    });

    describe('when input is given', () => {
        let component: TodoCardComponent;
        let fixture: ComponentFixture<TodoCardComponent>;
        let page: TodoCardComponentPage;

        beforeEach(() => {
            fixture = TestBed.createComponent(TodoCardComponent);
            component = fixture.componentInstance;
            component.todo = MOCKED_ITEM;
            fixture.detectChanges();
            page = new TodoCardComponentPage(fixture);
        });

        it('should exist', () => {
            expect(component).toBeTruthy();
        });

        it('should display "a test" as header', () => {
            expect(page.getHTMLElement<HTMLElement>('mat-card-title').textContent).toBe('a test');
        });

        it('should display "sample body" as body', () => {
            expect(page.getHTMLElement<HTMLElement>('mat-card-content').textContent).toBe('sample body');
        });
    });
});
