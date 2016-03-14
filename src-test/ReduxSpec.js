import {
    counter,
    newCountReduxStore,
    newCountStore,
    addCounter,
    removeCounter,
    incrementCounter,
    toggleTodo
} from '../src/Redux';

describe('Redux', () => {
    describe('counter', () => {
        it('works', () => {
            expect(counter(0, {type: 'INCREMENT'})).toEqual(1);
            expect(counter(1, {type: 'INCREMENT'})).toEqual(2);
            expect(counter(2, {type: 'DECREMENT'})).toEqual(1);
            expect(counter(1, {type: 'DECREMENT'})).toEqual(0);
            expect(counter(1, {type: 'SOMETHING_UNKNOWN'})).toEqual(1);
            expect(counter(undefined, {type: 'SOMETHING_UNKNOWN'})).toEqual(0);
        });
    });

    describe('countReduxStore', () => {
        it('works', () => {
            const countStore = newCountReduxStore();
            expect(countStore.getState()).toBe(0);
            countStore.dispatch({type: 'INCREMENT'});
            expect(countStore.getState()).toBe(1);
        });
    });

    describe('countStore', () => {
        it('works', () => {
            const countStore = newCountStore();
            expect(countStore.getState()).toBe(0);
            countStore.dispatch({type: 'INCREMENT'});
            expect(countStore.getState()).toBe(1);
        });
    });

    describe('addCounter', () => {
        it('works', () => {
            const listBefore = [];
            const listAfter = [0];

            expect(addCounter(listBefore)).toEqual(listAfter);
            expect(listBefore).toEqual([]);
        });
    });

    describe('removeCounter', () => {
        it('works', () => {
            const listBefore = [0, 10, 20];
            const listAfter = [0, 20];

            expect(removeCounter(listBefore, 1)).toEqual(listAfter);
            expect(listBefore).toEqual([0, 10, 20]);
        });
    });

    describe('incrementCounter', () => {
        it('works', () => {
            const listBefore = [0, 10, 20];
            const listAfter = [0, 11, 20];

            expect(incrementCounter(listBefore, 1)).toEqual(listAfter);
            expect(listBefore).toEqual([0, 10, 20]);
        });
    });

    describe('toogleTodo', () => {
        it('works', () => {
            const todoBefore = {
                id: 0,
                text: 'Learn Redux',
                completed: false
            };
            const todoAfter = {
                id: 0,
                text: 'Learn Redux',
                completed: true
            };

            expect(toggleTodo(todoBefore)).toEqual(todoAfter);
            expect(todoBefore).toEqual({
                id: 0,
                text: 'Learn Redux',
                completed: false
            });
        });
    });
});