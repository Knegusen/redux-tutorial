import React from 'react';
import TodoApp from '../../src/redux/TodoApp';
import FilterLinks from '../../src/redux/FilterLinks';
import VisibleTodoList from '../../src/redux/VisibleTodoList';
import AddTodo from '../../src/redux/AddTodo';
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