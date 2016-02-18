import React from 'react';

export default React.createClass({
    render() {
        return (
            <div>
                <input ref={(c) => this._input = c}/>
                <button className='add' onClick={this.onAdd}>Add todo</button>
                <ul>
                    {this.getTodos()}
                </ul>
            </div>
        );
    },

    getTodos(){
        return this.props.todos.map(todo => (
            <li key={ todo.id }
                onClick={this.onTodoClick.bind(this, todo.id)}
                style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            >
                { todo.text }
            </li>
        ));
    },

    onAdd() {
        const text = this.props.onAdd(this._input.value);
        this._input.value = '';
        return text;
    },

    onTodoClick(id) {
        this.props.onTodoClick({id});
    }
});