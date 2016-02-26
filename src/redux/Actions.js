const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

let nextTodoId = 0;
export const addTodo = (text) => ({
    type: ADD_TODO,
    text,
    id: nextTodoId++
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id
});

export const setVisibilityFilter = (filter) => ({
    type: SET_VISIBILITY_FILTER,
    filter
});
