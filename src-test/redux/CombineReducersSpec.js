import combineReducers from '../../src/redux/CombineReducers';

describe('combineReducers', () => {
    it('works', () => {
        const firstName = (state = 'dennis', action) => {
            if (action.type === 'CHANGE_NAME') {
                return action.name.firstName;
            } else {
                return state;
            }
        };
        const lastName = (state = 'axelsson', action) => {
            if (action.type === 'CHANGE_NAME') {
                return action.name.lastName;
            } else {
                return state;
            }
        };
        const reducer = combineReducers({firstName, lastName});
        expect(reducer({}, {
            type: 'CHANGE_NAME',
            name: {
                firstName: 'arne',
                lastName: 'weisse'
            }
        })).toEqual({
            firstName: 'arne',
            lastName: 'weisse'
        });
    });
});