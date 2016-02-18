const todoReduce = (state, action) => {
    if (action.type === 'ADD_TODO') {
        return {
            id: action.id,
            text: action.text,
            completed: false
        };
    } else if (action.type === 'TOGGLE_TODO') {
        if (state.id !== action.id) {
            return state;
        } else {
            return {
                ...state,
                completed: !state.completed
            };
        }
    } else {
        return state;
    }
};

export default function (state = [], action) {
    if (action.type === 'ADD_TODO') {
        return [
            ...state,
            todoReduce(undefined, action)
        ];
    } else if (action.type === 'TOGGLE_TODO') {
        return state.map((todo) => todoReduce(todo, action));
    } else {
        return state;
    }
}