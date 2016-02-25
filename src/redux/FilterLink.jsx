import React from 'react';
import Link from './Link';

export default React.createClass({

    componentDidMount(){
        this.unsubscribe = this.props.store.subscribe(() => {
            this.forceUpdate();
        });
    },

    componentWillUnMount(){
        this.unsubscribe();
    },

    render() {
        const { children, filter, store } = this.props;
        const state = store.getState();

        return <Link
            onLinkClick={() => {
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: filter
                });
            }}
            isActive={filter === state.visibilityFilter}>
            { children }
        </Link>;
    }
});