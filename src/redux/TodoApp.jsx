import React from 'react';
import FilterLinks from './FilterLinks';
import TodoList from './TodoList';

export default React.createClass({

    render() {
        return (
            <div>
                <input ref={(c) => this._input = c}/>
                <button className='add' onClick={this.onAdd}>Add todo</button>
                { this.getFilterLinks() }
                { this.getTodos() }
            </div>
        );
    },

    getTodos(){
        const props = {
            todos: this.props.todos,
            filter: this.props.visibilityFilter,
            onTodoClick: this.props.onTodoClick
        };
        return <TodoList {...props}/>;
    },

    getFilterLinks(){
        const props = {
            onFilterClick: this.props.onFilterClick,
            currentFilter: this.props.visibilityFilter
        };
        return <FilterLinks {...props}/>;
    },

    onAdd() {
        const text = this.props.onAdd(this._input.value);
        this._input.value = '';
        return text;
    }
});