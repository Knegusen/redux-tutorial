import React from 'react';
import TodoList from '../src/TodoList';
import Todo from '../src/Todo';
import { shallow } from 'enzyme';

describe('TodoList', () => {

    it('renders all todos', () => {

        const todos = [
            {
                id: '0',
                completed: true
            },
            {
                id: '1',
                completed: false
            },
            {
                id: '2',
                completed: false
            }
        ];

        const props = {
            todos,
            onTodoClick: (id) => id
        };

        const component = shallow(<TodoList {...props}/>);
        expect(component.find(Todo).length).toBe(3);
        expectPropsForTodo(component, todos[0].id, todos[0].completed);
        expectPropsForTodo(component, todos[1].id, todos[1].completed);
        expectPropsForTodo(component, todos[2].id, todos[2].completed);
    });

    function expectPropsForTodo(component, index, completed) {
        const props = component.find(Todo).at(parseInt(index)).props();
        expect(props.id).toBe(index);
        expect(props.completed).toBe(completed);
        expect(props.onClick()).toBe(index);
    }
});