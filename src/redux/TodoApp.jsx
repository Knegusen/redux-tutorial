import React from 'react';
import FilterLinks from './FilterLinks';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default ({onAdd, onFilterClick, onTodoClick, visibilityFilter, todos}) => (
    <div>
        <AddTodo onAdd={onAdd}/>
        <FilterLinks onFilterClick={onFilterClick} currentFilter={visibilityFilter}/>
        <TodoList todos={todos} filter={visibilityFilter} onTodoClick={onTodoClick}/>
    </div>
);