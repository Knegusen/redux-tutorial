import React from 'react';
import TodoList from '../../src/redux/TodoList';
import Todo from '../../src/redux/Todo';
import { shallow } from 'enzyme';

describe('TodoList', () => {
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

    let props;

    beforeEach(() => {
        props = {
            todos,
            filter: 'SHOW_ALL',
            onTodoClick: (id) => id
        };
    });

    describe('when filter is show_all', () => {
        it('renders all todos', () => {

            props.filter = 'SHOW_ALL';

            const component = shallow(<TodoList {...props}/>);
            expect(component.find(Todo).length).toBe(3);
            expectPropsForTodo(component, todos[0].id, todos[0].completed);
            expectPropsForTodo(component, todos[1].id, todos[1].completed);
            expectPropsForTodo(component, todos[2].id, todos[2].completed);
        });
    });

    describe('when filter is show_completed', () => {
        it('renders 1 todos', () => {

            props.filter = 'SHOW_COMPLETED';

            const component = shallow(<TodoList {...props}/>);
            expect(component.find(Todo).length).toBe(1);
        });
    });
    describe('when filter is show_active', () => {
        it('renders 2 todos', () => {

            props.filter = 'SHOW_ACTIVE';

            const component = shallow(<TodoList {...props}/>);
            expect(component.find(Todo).length).toBe(2);
        });
    });

    function expectPropsForTodo(component, index, completed) {
        const props = component.find(Todo).at(parseInt(index)).props();
        expect(props.id).toBe(index);
        expect(props.completed).toBe(completed);
        expect(props.onClick()).toBe(index);
    }
});