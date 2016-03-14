import React from 'react';
import TodoApp from '../src/TodoApp';
import FilterLinks from '../src/FilterLinks';
import VisibleTodoList from '../src/VisibleTodoList';
import AddTodo from '../src/AddTodo';
import { shallow } from 'enzyme';

describe('TodoApp', () => {

    describe('AddTodo', () => {
        it('is rendered with correct props', () => {
            const component = shallow(<TodoApp />);
            expect(component.find(AddTodo).length).toBe(1);
        });
    });

    describe('filter links', () => {
        it('is rendered', () => {
            const component = shallow(<TodoApp />);
            expect(component.find(FilterLinks).length).toBe(1);
        });
    });

    describe('todo list', () => {
        it('is rendered with correct props', () => {
            const component = shallow(<TodoApp />);
            expect(component.find(VisibleTodoList).length).toEqual(1);
        });
    });
});