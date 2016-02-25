import React from 'react';
import FilterLinks from './FilterLinks';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default ({onAdd, store, onTodoClick, visibilityFilter, todos}) => (
    <div>
        <AddTodo onAdd={onAdd}/>
        <FilterLinks store={store}/>
        <TodoList todos={todos} filter={visibilityFilter} onTodoClick={onTodoClick}/>
    </div>
);