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

class TodoSummaryItemComponentPage {
    component: TodoSummaryItemComponent;

    constructor(private fixture: ComponentFixture<TodoSummaryItemComponent>) {
        this.component = fixture.componentInstance;
    }

    getHTMLElement<T>(selector: string): T {
        return <T>this.fixture.nativeElement.querySelector(selector);
    }

    get titleFieldHTMLElement(): HTMLInputElement {
        return this.getHTMLElement<HTMLInputElement>('input[formControlName="title"]');
    }

    get matCheckBoxHTMLElement(): HTMLElement {
        return this.getHTMLElement<HTMLElement>('mat-checkbox .mat-checkbox-input');
    }

    get bodyFieldHTMLElement(): HTMLTextAreaElement {
        return this.getHTMLElement<HTMLTextAreaElement>('textarea[formControlName="body"]');
    }

    get submitButton(): HTMLButtonElement {
        return this.getHTMLElement<HTMLButtonElement>('button[color="accent"]');
    }
}

describe('TodoSummaryItemComponent', () => {
    let component: TodoSummaryItemComponent;
    let fixture: ComponentFixture<TodoSummaryItemComponent>;
    let store: MockStore;
    let page: TodoSummaryItemComponentPage;

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
        page = new TodoSummaryItemComponentPage(fixture);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a disabled submit button', () => {
        expect(page.submitButton.getAttribute('disabled')).toBe('true');
    });

    describe('when mandatory fields are correctly filled', () => {
        it('should enable the submit button', async(() => {
            page.titleFieldHTMLElement.value = 'a title';
            page.titleFieldHTMLElement.dispatchEvent(new Event('input'));
            page.bodyFieldHTMLElement.value = 'a brief body';
            page.bodyFieldHTMLElement.dispatchEvent(new Event('input'));
            page.matCheckBoxHTMLElement.click();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.form.valid).toBeTrue();
                expect(page.submitButton.getAttribute('disabled')).toBeFalsy();
            });
        }));
    });

    describe('when mandatory fields are incorrectly filled', () => {
        it('should disable the submit button', async(() => {
            page.titleFieldHTMLElement.value = null;
            page.titleFieldHTMLElement.dispatchEvent(new Event('input'));
            page.bodyFieldHTMLElement.value = 'a'.repeat(500);
            page.bodyFieldHTMLElement.dispatchEvent(new Event('input'));
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(component.form.invalid).toBeTrue();
                expect(page.submitButton.getAttribute('disabled')).toBe('true');
            });
        }));
    });
});
