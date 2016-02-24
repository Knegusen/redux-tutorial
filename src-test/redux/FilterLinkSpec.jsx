import React from 'react';
import FilterLink from '../../src/redux/FilterLink';
import { shallow } from 'enzyme';

describe('Filterlink', () => {

    describe('when currentFilter is the same as filter', () => {
        it('renders span with children', () => {
            const text = 'children text';
            const props = {
                currentFilter: 'show_all',
                filter: 'show_all'
            };
            const component = shallow(<FilterLink {...props} >{text}</FilterLink>);
            expect(component.contains(<span>{text}</span>)).toBe(true);
        });
    });

    describe('when currentFilter is not the same as filter', () => {
        describe('link', () => {
            it('renders link text', () => {
                const text = 'children text';
                const props = {
                    currentFilter: 'show_all',
                    filter: 'show_completed',
                    onClick: () => ({})
                };
                const component = shallow(<FilterLink {...props}>{text}</FilterLink>);
                expect(component.find('a').text()).toBe(text);
            });

            describe('when clicked', () => {
                it('calls prop onClick', () => {
                    const props = {
                        currentFilter: 'show_all',
                        filter: 'show_completed',
                        onClick: () => ({})
                    };
                    spyOn(props, 'onClick');
                    const component = shallow(<FilterLink {...props} />);
                    component.find('a').simulate('click');
                    expect(props.onClick).toHaveBeenCalledWith(props.filter);
                });
            });
            it('is rendered with href #', () => {
                const props = {
                    currentFilter: 'show_all',
                    filter: 'show_completed',
                    onClick: () => ({})
                };
                const component = shallow(<FilterLink {...props} />);
                expect(component.props().href).toBe('#');
            });
        });
    });
});