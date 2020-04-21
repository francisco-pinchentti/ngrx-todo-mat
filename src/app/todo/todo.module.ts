import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

// app
import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoCardItemComponent } from './todo-card-item/todo-card-item.component';
import { TodoSummaryItemComponent } from './todo-summary-item/todo-summary-item.component';

@NgModule({
    declarations: [TodoListComponent, TodoCardItemComponent, TodoSummaryItemComponent],
    imports: [
        CommonModule,
        TodoRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatCardModule,
        MatExpansionModule,
        MatDividerModule,
        MatBadgeModule,
        MatIconModule,
    ],
})
export class TodoModule {}
