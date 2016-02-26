import React from 'react';
import FilterLinks from './FilterLinks';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';

export default () => (
    <div>
        <AddTodo/>
        <FilterLinks/>
        <VisibleTodoList/>
    </div>
);