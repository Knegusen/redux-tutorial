import React from 'react';
import FilterLink from './FilterLink';

export default ({store}) => {
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
                        store={store}
                        filter={filterLink.filter}>
                        { filterLink.name }
                    </FilterLink>{' '}
                </span>
            )
        )}
    </p>);
};