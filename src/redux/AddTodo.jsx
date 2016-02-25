import React from 'react';

const AddTodo = (props, { store }) => {

    let input;
    let nextTodoId = 0;

    return (
        <div>
            <input ref={(node) => input = node}/>
            <button
                className='add'
                onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: input.value,
                        id: nextTodoId++
                    });
                    input.value = '';
                }}>
                Add todo
            </button>
        </div>
    );
};

AddTodo.contextTypes = {
    store: React.PropTypes.object
};

export default AddTodo;