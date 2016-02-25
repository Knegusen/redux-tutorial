import React from 'react';

export default ({store}) => {

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