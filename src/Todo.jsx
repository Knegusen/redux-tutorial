import React from 'react';

export default ({text, completed, onClick}) => (
    <li onClick={onClick} style={{textDecoration: completed ? 'line-through' : 'none'}}>
        { text }
    </li>
);