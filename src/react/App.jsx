import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../redux/TodoApp';
import { createStore } from 'redux';
import AppReducer from '../redux/AppReducer';

const store = createStore(AppReducer, undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);

let nextTodoId = 0;
const onAdd = (text) => {
    store.dispatch({
        type: 'ADD_TODO',
        text,
        id: nextTodoId++
    });
};

const render = () => {
    ReactDOM.render(
        <TodoApp
            todos={store.getState().todos}
            onAdd={onAdd}
        />, document.getElementById('appContent'));
};

store.subscribe(render);
render();