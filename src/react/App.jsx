import React from 'react';
import ReactDOM from 'react-dom';
import { newCountReduxStore } from '../redux/Redux';
import Counter from '../redux/Counter';

const store = newCountReduxStore();

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => {
                store.dispatch({
                    type: 'INCREMENT'
                });
                }}
            onDecrement={() => {
                store.dispatch({
                    type: 'DECREMENT'
                });
                }}
        />
        , document.getElementById('appContent'));
};

store.subscribe(render);
render();