import React from 'react';
import FilterLink from './FilterLink';

export default () => {
    const filterLinks = [
        {
            name: 'All',
            filter: 'SHOW_ALL'
        },
        {
            name: 'Active',
            filter: 'SHOW_ACTIVE'
        },
        {
            name: 'Completed',
            filter: 'SHOW_COMPLETED'
        }
    ];
    return (<p>
        {filterLinks.map((filterLink, index) => (
                <span key={index}>
                    <FilterLink
                        filter={filterLink.filter}>
                        { filterLink.name }
                    </FilterLink>{' '}
                </span>
            )
        )}
    </p>);
};