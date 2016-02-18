import React from 'react';
import TodoApp from '../../src/redux/TodoApp';
import { mount } from 'enzyme';

describe('TodoApp', () => {

    describe('input', () => {
        it('is rendered', () => {
            const component = renderTodo();
            expect(component.find('input').length).toBe(1);
        });
    });

    describe('button', () => {
        it('is rendered with add label', () => {
            const component = renderTodo();
            expect(component.find('.add').text()).toBe('Add todo');
        });

        describe('when clicked', () => {
            it('calls prop onAdd', () => {
                const funcs = {
                    onAdd: () => ({})
                };
                spyOn(funcs, 'onAdd');
                const component = renderTodo([], funcs);
                component.find('input').get(0).value = 'Test';
                component.find('.add').simulate('click');
                expect(funcs.onAdd).toHaveBeenCalledWith('Test');
            });

            it('clears input field', () => {
                const component = renderTodo();
                component.find('input').get(0).value = 'Test';
                component.find('.add').simulate('click');
                expect(component.find('input').get(0).value).toBe('');
            });
        });
    });

    describe('todos', () => {
        it('is rendered', () => {
            const todos = [
                {
                    id: 1,
                    text: 'todo 1'
                },
                {
                    id: 2,
                    text: 'todo 2'
                }
            ];
            const component = renderTodo(todos);
            expect(component.find('li').length).toBe(2);
            expect(component.find('li').at(0).text()).toBe(todos[0].text);
        });
    });
});

function renderTodo(todos = [], funcs = {onAdd: () => ({})}) {
    return mount(<TodoApp todos={todos} onAdd={funcs.onAdd}/>);
}