import { counter, newCountReduxStore} from '../src/Redux';

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
});