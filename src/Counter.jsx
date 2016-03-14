import React from 'react';

export default ({
    value,
    onIncrement,
    onDecrement
    }) =>
    (
        <div>
            <h1>{ value }</h1>
            <button className='add' onClick={onIncrement}>+</button>
            <button className='remove' onClick={onDecrement}>-</button>
        </div>
    );