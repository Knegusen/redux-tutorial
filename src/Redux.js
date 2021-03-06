import { createStore } from 'redux';

export function counter(state = 0, action) {
    if (action.type == 'INCREMENT') {
        return state + 1;
    } else if (action.type === 'DECREMENT') {
        return state - 1;
    } else {
        return state;
    }
}

export function newCountReduxStore() {
    return createStore(counter);
}

export function newCountStore() {
    return newStore(counter);
}

export function addCounter(list) {
    return [...list, 0];
}

export function removeCounter(list, index) {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
}

export function incrementCounter(list, index) {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
}

export function toggleTodo(todo) {
    return {
        ...todo,
        completed: !todo.completed
    };
}

function newStore(reducer) {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    dispatch({});

    return {
        getState,
        dispatch,
        subscribe
    };
}