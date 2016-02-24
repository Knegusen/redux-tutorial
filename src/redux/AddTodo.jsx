import React from 'react';

export default ({onAdd}) => {

    let input;

    return (
        <div>
            <input ref={(node) => input = node}/>
            <button
                className='add'
                onClick={() => {
                    onAdd(input.value);
                    input.value = '';
                }}>
                Add todo
            </button>
        </div>
    );
};