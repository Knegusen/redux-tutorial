import { connect } from 'react-redux';
import React from 'react';
import { addTodo } from './Actions';

let input;

const AddTodo = ({ dispatch }) => (
    <div>
        <input ref={(node) => input = node}/>
        <button
            className='add'
            onClick={() => {
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}>
            Add todo
        </button>
    </div>
);

export default connect()(AddTodo);