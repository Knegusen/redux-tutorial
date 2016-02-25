import React from 'react';
import FilterLink from '../../src/redux/FilterLink';
import Link from '../../src/redux/Link';
import { shallow } from 'enzyme';

describe('FilterLink', () => {

    let action;
    let props;

    beforeEach(() => {
        props = {
            store: {
                getState: () => ({
                    visibilityFilter: 'active filter'
                }),
                subscribe: () => () => ({}),
                dispatch: (a) => {
                    action = a;
                }
            },
            filter: 'active filter',
            children: 'children'
        };
    });

    describe('componentDidMount', () => {
        it('subscribes to store', () => {
            //TODO: implement
        });
    });

    describe('componentWillUnmount', () => {
        it('unsubscribes to store', () => {
            //TODO: implement
        });
    });

    describe('Link', () => {

        describe('onLinkClick', () => {

            it('is called as prop', () => {
                const component = shallow(<FilterLink {...props}></FilterLink>);
                const link = component.find(Link);
                expect(typeof(link.props().onLinkClick)).toBe('function');
            });

            it('is calls store dispatch', () => {
                const component = shallow(<FilterLink {...props}></FilterLink>);
                const link = component.find(Link);
                link.props().onLinkClick();
                expect(action).toEqual({
                    type: 'SET_VISIBILITY_FILTER',
                    filter: props.filter
                });
            });
        });

        describe('isActive prop', () => {
            describe('when filter is same as visibility filter', () => {
                it('is set to true', () => {
                    const component = shallow(<FilterLink {...props}></FilterLink>);
                    expect(component.find(Link).props().isActive).toBe(true);
                });
            });

            describe('when filter is not same as visibility filter', () => {
                it('is set to true', () => {
                    props.filter = 'not active filter';
                    const component = shallow(<FilterLink {...props}></FilterLink>);
                    expect(component.find(Link).props().isActive).toBe(false);
                });
            });
        });
    });
});
