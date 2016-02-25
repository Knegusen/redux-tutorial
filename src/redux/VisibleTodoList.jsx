import React from 'react';
import TodoList from './TodoList';

export default React.createClass({

    componentDidMount(){
        this.unsubscribe = this.context.store.subscribe(() => {
            this.forceUpdate();
        });
    },

    componentWillUnMount(){
        this.unsubscribe();
    },

    contextTypes: {
        store: React.PropTypes.object
    },

    render() {
        const { store } = this.context;
        const state = store.getState();
        const todos = this.getVisibleTodos(state.todos, state.visibilityFilter);
        const todoListProps = {
            todos,
            onTodoClick: (id) => {
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                });
            }
        };

        return <TodoList {...todoListProps} />;
    },

    getVisibleTodos(todos, filter) {
        if (filter === 'SHOW_ALL') {
            return todos;
        } else if (filter === 'SHOW_COMPLETED') {
            return todos.filter((todo) => todo.completed);
        } else if (filter === 'SHOW_ACTIVE') {
            return todos.filter((todo) => !todo.completed);
        } else {
            return todos;
        }
    }
});