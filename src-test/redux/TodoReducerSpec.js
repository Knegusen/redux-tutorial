import todoReduce from '../../src/redux/TodoReducer';

describe('TodoReducer', () => {
    it('can add todo', () => {
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

    it('can toogle todo', () => {
        const stateBefore = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: false
            }
        ];
        const action = {
            type: 'TOOGLE_TODO',
            id: 1
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: true
            }
        ];
        expect(todoReduce(stateBefore, action)).toEqual(stateAfter);
        expect(stateBefore).toEqual([
                {
                    id: 0,
                    text: 'Learn Redux',
                    completed: false
                },
                {
                    id: 1,
                    text: 'Go shopping',
                    completed: false
                }
            ]
        );
        expect(action).toEqual(
            {
                type: 'TOOGLE_TODO',
                id: 1
            }
        );
    });
});