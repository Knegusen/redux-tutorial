import React from 'react';

export default ({ children, isActive, onLinkClick }) => {
    if (isActive) {
        return <span>{children}</span>;
    } else {
        return <a href='#' onClick={() => {onLinkClick();}}>{ children}</a>;
    }
};