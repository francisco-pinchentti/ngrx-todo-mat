import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// material dependencies
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

// component
import { TodoCardItemComponent } from './todo-card-item.component';

// model
import { TodoItem } from '@app/models/TodoItem';

// mocks:
const MOCKED_ITEM = new TodoItem('1', 'a test', 'sample body', false);

class TodoCardItemComponentPage {
    component: TodoCardItemComponent;

    constructor(private fixture: ComponentFixture<TodoCardItemComponent>) {
        this.component = fixture.componentInstance;
    }

    private getDebugElement<T>(selector: string): T {
        const debugElement = this.fixture.debugElement.query(By.css(selector));
        return !!debugElement ? <T>debugElement.componentInstance : null;
    }

    getHTMLElement<T>(selector: string): T {
        return <T>this.fixture.nativeElement.querySelector(selector);
    }
}

describe('TodoCardItemComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodoCardItemComponent],
            imports: [MatCardModule, MatIconModule],
        }).compileComponents();
    }));

    describe('when no input is given', () => {
        let component: TodoCardItemComponent;
        let fixture: ComponentFixture<TodoCardItemComponent>;
        let page: TodoCardItemComponentPage;

        beforeEach(() => {
            fixture = TestBed.createComponent(TodoCardItemComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
            page = new TodoCardItemComponentPage(fixture);
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
        let component: TodoCardItemComponent;
        let fixture: ComponentFixture<TodoCardItemComponent>;
        let page: TodoCardItemComponentPage;

        beforeEach(() => {
            fixture = TestBed.createComponent(TodoCardItemComponent);
            component = fixture.componentInstance;
            component.todo = MOCKED_ITEM;
            fixture.detectChanges();
            page = new TodoCardItemComponentPage(fixture);
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
