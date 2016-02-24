import React from 'react';
import Todo from '../../src/redux/Todo';
import { shallow } from 'enzyme';

describe('Todo', () => {

    describe('style', () => {
        describe('when prop completed is true', () => {
            it('is rendered with text decoration line-through', () => {
                const props = {
                    completed: true
                };
                const component = shallow(<Todo {...props}/>);
                expect(component.props().style).toEqual({textDecoration: 'line-through'});
            });
        });

        describe('when prop is completed is false', () => {
            it('is rendered with  text decoration none', () => {
                const props = {
                    completed: false
                };
                const component = shallow(<Todo {...props}/>);
                expect(component.props().style).toEqual({textDecoration: 'none'});
            });
        });
    });

    describe('text', () => {
        it('is rendered from prop', () => {
            const text = 'todo text';
            const props = {
                text
            };
            const component = shallow(<Todo {...props}/>);
            expect(component.props().children).toBe(text);
        });
    });

    describe('onClick', () => {
        it('calls prop onClick', () => {
            const props = {
                onClick: () => ({})
            };
            spyOn(props, 'onClick');
            const component = shallow(<Todo {...props} />);
            component.simulate('click');
            expect(props.onClick).toHaveBeenCalled();
        });
    });
});