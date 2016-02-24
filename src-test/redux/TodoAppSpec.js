import React from 'react';
import TodoApp from '../../src/redux/TodoApp';
import FilterLinks from '../../src/redux/FilterLinks';
import TodoList from '../../src/redux/TodoList';
import { mount, shallow } from 'enzyme';

describe('TodoApp', () => {

    describe('input', () => {
        it('is rendered', () => {
            const component = renderTodo(shallow);
            expect(component.find('input').length).toBe(1);
        });
    });

    describe('button', () => {
        it('is rendered with add label', () => {
            const component = renderTodo(shallow);
            expect(component.find('.add').text()).toBe('Add todo');
        });

        describe('when clicked', () => {
            it('calls prop onAdd', () => {
                const funcs = {
                    onAdd: () => ({}),
                    onFilterClick: () => ({})
                };
                spyOn(funcs, 'onAdd');
                const component = renderTodo(mount, [], funcs);
                component.find('input').get(0).value = 'Test';
                component.find('.add').simulate('click');
                expect(funcs.onAdd).toHaveBeenCalledWith('Test');
            });

            it('clears input field', () => {
                const component = renderTodo(mount);
                component.find('input').get(0).value = 'Test';
                component.find('.add').simulate('click');
                expect(component.find('input').get(0).value).toBe('');
            });
        });
    });

    describe('filter links', () => {
        it('is rendered with correct props', () => {
            const funcs = {
                onFilterClick: (filter) => filter
            };
            const filter = 'FILTER';
            const component = renderTodo(shallow, [], funcs, filter);
            const filterLinksProps = component.find(FilterLinks).props();
            expect(filterLinksProps.currentFilter).toBe(filter);
            expect(filterLinksProps.onFilterClick).toBe(funcs.onFilterClick);
        });
    });

    describe('todo list', () => {
        it('is rendered with correct props', () => {
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
            const funcs = {
                onTodoClick: (todo) => todo
            };

            const component = renderTodo(shallow, todos, funcs);
            const props = component.find(TodoList).props();
            expect(props.todos).toEqual(todos);
            expect(props.filter).toEqual('SHOW_ALL');
            expect(props.onTodoClick).toBe(funcs.onTodoClick);
        });
    });
});

function renderTodo(renderFunc, todos = [], funcs = {
    onAdd: () => ({}),
    onTodoClick: () => ({}),
    onFilterClick: () => ({})
}, filter = 'SHOW_ALL') {
    return renderFunc(<TodoApp todos={todos} visibilityFilter={filter} onAdd={funcs.onAdd}
                               onTodoClick={funcs.onTodoClick} onFilterClick={funcs.onFilterClick}/>);
}