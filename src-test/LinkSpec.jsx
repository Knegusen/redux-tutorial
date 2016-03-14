import React from 'react';
import FilterLink from '../src/Link';
import { shallow } from 'enzyme';

describe('Filterlink', () => {

    describe('when link is active', () => {
        it('renders span with children', () => {
            const text = 'children text';
            const component = shallow(<FilterLink isActive={true}>{text}</FilterLink>);
            expect(component.contains(<span>{text}</span>)).toBe(true);
        });
    });

    describe('when link is not active', () => {
        describe('link', () => {
            it('renders link text', () => {
                const text = 'children text';
                const component = shallow(<FilterLink isActive={false}>{text}</FilterLink>);
                expect(component.find('a').text()).toBe(text);
            });

            describe('when clicked', () => {
                it('calls prop onClick', () => {
                    const props = {
                        onLinkClick: () => ({})
                    };
                    spyOn(props, 'onLinkClick');
                    const component = shallow(<FilterLink {...props} />);
                    component.find('a').simulate('click');
                    expect(props.onLinkClick).toHaveBeenCalled();
                });
            });

            it('is rendered with href #', () => {
                const component = shallow(<FilterLink />);
                expect(component.props().href).toBe('#');
            });
        });
    });
});