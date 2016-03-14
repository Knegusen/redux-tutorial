import {
    addTodo, toggleTodo, setVisibilityFilter,
    ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER
} from '../src/Actions';

describe('Actions', () => {
    describe('add todo', () => {
        it('returns correct type', () => {
            expect(addTodo().type).toBe(ADD_TODO);
        });

        it('returns correct text', () => {
            const text = 'text';
            expect(addTodo(text).text).toBe(text);
        });

        it('increment id', () => {
            const id = addTodo().id;
            expect(addTodo().id).toBe(id + 1);
        });
    });

    describe('toggle todo', () => {
        it('returns correct type', () => {
            expect(toggleTodo().type).toBe(TOGGLE_TODO);
        });

        it('returns correct id', () => {
            const id = 'id';
            expect(toggleTodo(id).id).toBe(id);
        });
    });

    describe('set visibility filter', () => {
        it('returns correct type', () => {
            expect(setVisibilityFilter().type).toBe(SET_VISIBILITY_FILTER);
        });
        it('returns correct filter', () => {
            const filter = 'filter';
            expect(setVisibilityFilter(filter).filter).toBe(filter);
        });
    });
});