import { createFeatureSelector, createSelector } from '@ngrx/store';

const getTodosState = createFeatureSelector('todos');

export const getTodosList = createSelector(getTodosState, ({ todos }) => {
    return todos;
});

export const getSelectedTodo = createSelector(getTodosState, ({ selectedTodo }) => {
    return selectedTodo;
});
