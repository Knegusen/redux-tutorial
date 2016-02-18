import todosReduce from '../../src/redux/TodosReducer';

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

        expect(todosReduce(stateBefore, action)).toEqual(stateAfter);
        expect(stateBefore).toEqual([]);
        expect(action).toEqual(
            {
                type: 'ADD_TODO',
                id: 0,
                text: 'Learn Redux'
            }
        );
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
            type: 'TOGGLE_TODO',
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
        expect(todosReduce(stateBefore, action)).toEqual(stateAfter);
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
                type: 'TOGGLE_TODO',
                id: 1
            }
        );
    });
});