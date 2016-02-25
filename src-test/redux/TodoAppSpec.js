import React from 'react';
import TodoApp from '../../src/redux/TodoApp';
import FilterLinks from '../../src/redux/FilterLinks';
import TodoList from '../../src/redux/TodoList';
import AddTodo from '../../src/redux/AddTodo';
import { shallow } from 'enzyme';

describe('TodoApp', () => {

    describe('AddTodo', () => {
        it('is rendered with correct props', () => {
            const funcs = {
                onFilterClick: (filter) => filter,
                onAdd: () => ({})
            };
            const component = renderTodo(shallow, [], undefined, funcs);
            const addTodoProps = component.find(AddTodo).props();
            expect(addTodoProps.onAdd).toBe(funcs.onAdd);
        });
    });

    describe('filter links', () => {
        it('is rendered with correct props', () => {
            const filter = 'FILTER';
            const store = {a: 'b'};
            const component = renderTodo(shallow, [], store, undefined, filter);
            expect(component.find(FilterLinks).props().store).toBe(store);
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

            const component = renderTodo(shallow, todos, undefined, funcs);
            const props = component.find(TodoList).props();
            expect(props.todos).toEqual(todos);
            expect(props.filter).toEqual('SHOW_ALL');
            expect(props.onTodoClick).toBe(funcs.onTodoClick);
        });
    });
});

function renderTodo(renderFunc, todos = [], store = {}, funcs = {
    onAdd: () => ({}),
    onTodoClick: () => ({})
}, filter = 'SHOW_ALL') {
    return renderFunc(<TodoApp todos={todos} visibilityFilter={filter} store={store} onAdd={funcs.onAdd}
                               onTodoClick={funcs.onTodoClick}/>);
}