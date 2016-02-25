import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../redux/TodoApp';
import { createStore } from 'redux';
import AppReducer from '../redux/AppReducer';

const store = createStore(AppReducer, undefined, window.devToolsExtension ? window.devToolsExtension() : undefined);

const Provider = React.createClass({

    getChildContext(){
        return {
            store: this.props.store
        };
    },

    render(){
        return this.props.children;
    }
});

Provider.childContextTypes = {
    store: React.PropTypes.object
};

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('appContent'));
