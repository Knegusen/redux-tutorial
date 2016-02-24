import React from 'react';

export default ({ children, filter, currentFilter, onClick }) => {
    if (filter === currentFilter) {
        return <span>{children}</span>;
    } else {
        return <a href='#' onClick={onClick.bind(null, filter)}>{ children}</a>;
    }
};