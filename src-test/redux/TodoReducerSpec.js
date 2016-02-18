import todoReduce from '../../src/redux/TodoReducer';

describe('TodoReducer', () => {
    it('works', () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = [{
            id: 0,
            text: 'Learn Redux',
            completed: false
        }];

        expect(todoReduce(stateBefore, action)).toEqual(stateAfter);
        expect(stateBefore).toEqual([]);
        expect(action).toEqual(
            {
                type: 'ADD_TODO',
                id: 0,
                text: 'Learn Redux'
            }
        )
    });
});