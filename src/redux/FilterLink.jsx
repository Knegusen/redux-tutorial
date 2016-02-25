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
        const props = this.props;
        const state = props.store.getState();

        return <Link
            onLinkClick={() => {
                props.store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                });
            }}
            isActive={props.filter === state.visibilityFilter}>
            { props.children }
        </Link>;
    }
});