import { connect } from 'react-redux';
import React from 'react';

let input;
let nextTodoId = 0;

const AddTodo = ({ dispatch }) => (
    <div>
        <input ref={(node) => input = node}/>
        <button
            className='add'
            onClick={() => {
                    dispatch({
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

export default connect()(AddTodo);