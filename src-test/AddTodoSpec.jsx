import React from 'react';
import AddTodo from '../src/AddTodo';
import { mount } from 'enzyme';

describe('AddTodo', () => {
    describe('button', () => {

        let action;

        const context = {
            store: {
                getState: () => ({}),
                subscribe: () => () => ({}),
                dispatch: (a) => {
                    action = a;
                }
            }
        };

        it('is rendered with add label', () => {
            const component = mount(<AddTodo />, {context});
            expect(component.find('.add').text()).toBe('Add todo');
        });

        it('is rendered with input', () => {
            const component = mount(<AddTodo />, {context});
            expect(component.find('input').length).toBe(1);
        });

        describe('onClick', () => {
            it('dispatches action addTodo with increased id', () => {
                const component = mount(<AddTodo />, {context});
                const text = 'value';
                component.find('input').get(0).value = text;
                component.find('button').simulate('click');
                expect(action).toEqual({
                    type: 'ADD_TODO',
                    text,
                    id: 0
                });

                const text2 = 'value 2';
                component.find('input').get(0).value = text2;
                component.find('button').simulate('click');
                expect(action).toEqual({
                    type: 'ADD_TODO',
                    text: text2,
                    id: 1
                });
            });

            it('clears input field', () => {
                const component = mount(<AddTodo />, {context});
                component.find('input').get(0).value = 'Test';
                component.find('.add').simulate('click');
                expect(component.find('input').get(0).value).toBe('');
            });
        });
    });
});