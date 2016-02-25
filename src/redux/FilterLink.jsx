import React from 'react';
import Link from './Link';

export default React.createClass({

    componentDidMount(){
        this.unsubscribe = this.context.store.subscribe(() => {
            this.forceUpdate();
        });
    },

    componentWillUnMount(){
        this.unsubscribe();
    },

    contextTypes: {
        store: React.PropTypes.object
    },

    render() {
        const { store } = this.context;
        const { children, filter } = this.props;
        const state = {};

        return <Link
            onLinkClick={() => {
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                });
            }}
            isActive={filter === state.visibilityFilter}>
            { children }
        </Link>;
    }
});