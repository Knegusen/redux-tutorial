import visibilityFilterReduce from '../src/VisibilityFilterReducer';

describe('VisibilityFilterReducer', () => {

    it('defaults to SHOW_ALL', () => {
        expect(visibilityFilterReduce(undefined, {})).toEqual('SHOW_ALL');
    });

    it('works', () => {
        const stateBefore = 'SHOW_ALL';
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED'
        };
        const stateAfter = 'SHOW_COMPLETED';
        expect(visibilityFilterReduce(stateBefore, action)).toEqual(stateAfter);
        expect(stateBefore).toEqual('SHOW_ALL');
        expect(action).toEqual({
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED'
        });
    });
});