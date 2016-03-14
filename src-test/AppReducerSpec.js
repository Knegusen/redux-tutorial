import appReduce from '../src/AppReducer';

describe('AppReducer', () => {
    it('works for todos', () => {
        const stateBefore = {
            todos: [],
            visibilityFilter: ''
        };
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = {
            todos: [{
                id: 0,
                text: 'Learn Redux',
                completed: false
            }],
            visibilityFilter: ''
        };
        expect(appReduce(stateBefore, action)).toEqual(stateAfter);
        expect(stateBefore).toEqual({
            todos: [],
            visibilityFilter: ''
        });
        expect(action).toEqual({
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        });
    });

    it('works for visibility filter', () => {
        const stateBefore = {
            todos: [],
            visibilityFilter: ''
        };
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'NEW_FILTER'
        };
        const stateAfter = {
            todos: [],
            visibilityFilter: 'NEW_FILTER'
        };
        expect(appReduce(stateBefore, action)).toEqual(stateAfter);
        expect(stateBefore).toEqual({
            todos: [],
            visibilityFilter: ''
        });
        expect(action).toEqual({
            type: 'SET_VISIBILITY_FILTER',
            filter: 'NEW_FILTER'
        });
    });
});