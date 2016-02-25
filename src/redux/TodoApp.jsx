import React from 'react';
import FilterLinks from './FilterLinks';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';

export default ({store}) => (
    <div>
        <AddTodo store={store}/>
        <FilterLinks store={store}/>
        <VisibleTodoList store={store}/>
    </div>
);