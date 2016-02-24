import React from 'react';
import Todo from './Todo';

export default ({todos, filter, onTodoClick}) => {
    const visibleTodos = getVisibleTodos(todos, filter);

    return (<ul>
        {visibleTodos.map(todo => (
            <Todo
                key={ todo.id }
                {...todo}
                onClick={onTodoClick.bind(null, todo.id)}
            />
        ))}
    </ul>);
};

function getVisibleTodos(todos, filter) {
    if (filter === 'SHOW_ALL') {
        return todos;
    } else if (filter === 'SHOW_COMPLETED') {
        return todos.filter((todo) => todo.completed);
    } else if (filter === 'SHOW_ACTIVE') {
        return todos.filter((todo) => !todo.completed);
    }
}