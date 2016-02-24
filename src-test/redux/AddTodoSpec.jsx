import React from 'react';
import AddTodo from '../../src/redux/AddTodo';
import { mount, shallow } from 'enzyme';

describe('AddTodo', () => {
    describe('button', () => {

        it('is rendered with add label', () => {
            const component = shallow(<AddTodo />);
            expect(component.find('.add').text()).toBe('Add todo');
        });

        describe('when clicked', () => {
            it('calls prop onAdd', () => {
                const funcs = {
                    onAdd: () => ({})
                };
                spyOn(funcs, 'onAdd');
                const component = mount(<AddTodo onAdd={funcs.onAdd}/>);
                component.find('input').get(0).value = 'Test';
                component.find('.add').simulate('click');
                expect(funcs.onAdd).toHaveBeenCalledWith('Test');
            });

            it('clears input field', () => {
                const component = mount(<AddTodo onAdd={() => ({})}/>);
                component.find('input').get(0).value = 'Test';
                component.find('.add').simulate('click');
                expect(component.find('input').get(0).value).toBe('');
            });
        });
    });
});