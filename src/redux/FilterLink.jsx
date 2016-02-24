import React from 'react';

export default ({ children, filter, currentFilter, onLinkClick }) => {
    if (filter === currentFilter) {
        return <span>{children}</span>;
    } else {
        return <a href='#' onClick={() => {onLinkClick(filter);}}>{ children}</a>;
    }
};