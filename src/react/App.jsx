import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../redux/TodoApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import AppReducer from '../redux/AppReducer';

const store = createStore(AppReducer, undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);

Provider.childContextTypes = {
    store: React.PropTypes.object
};

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('appContent'));
