import { reducer, initialState } from './todos.reducer';
import { TodoItem } from '@app/models/TodoItem';

const mockedState = {
    todos: [
        {
            id: '1',
            title: 'test',
            body: '',
            isDone: false,
        },
    ],
    selectedTodo: null,
};

const item2 = new TodoItem('item2', '');

describe('TodosReducer', () => {
    it('should be defined', () => {
        expect(reducer).toBeDefined();
    });

    it('should be a function', () => {
        expect(reducer).toEqual(jasmine.any(Function));
    });

    it('should return initial state when there is no previous state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should return the same state when giving an unknown action', () => {
        expect(reducer(mockedState, { type: 'any' })).toEqual(mockedState);
    });

    describe('Add action', () => {
        it('should append the given item', () => {
            const expected = {
                todos: [item2],
                selectedTodo: null,
            };
            expect(reducer(initialState, { type: 'Add', payload: item2 })).toEqual(expected);
        });
    });

    describe('Remove action', () => {
        it("should remove an item given it's id", () => {
            const expected = {
                todos: [],
                selectedTodo: null,
            };
            expect(reducer(initialState, { type: 'Remove', payload: item2.id })).toEqual(expected);
        });

        it('should return previous state if given item id doesn\t exists', () => {
            expect(reducer(mockedState, { type: 'Remove', payload: '9999' })).toEqual(mockedState);
        });
    });

    describe('Update action', () => {
        it('should update the given item', () => {
            const updatedItem2: TodoItem = new TodoItem('updated title', 'updated body', item2.isDone, item2.id);
            const expected = {
                todos: [updatedItem2],
                selectedTodo: null,
            };
            expect(reducer(initialState, { type: 'Update', payload: updatedItem2 })).toEqual(expected);
        });
    });

    describe('Select action', () => {
        it('should hold internally the given item', () => {
            const expected = {
                todos: mockedState.todos,
                selectedTodo: mockedState.todos[0],
            };
            expect(reducer(mockedState, { type: 'Select', payload: mockedState.todos[0] })).toEqual(expected);
        });
    });
});
