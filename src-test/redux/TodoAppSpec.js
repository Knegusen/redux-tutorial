import React from 'react';
import TodoApp from '../../src/redux/TodoApp';
import FilterLinks from '../../src/redux/FilterLinks';
import VisibleTodoList from '../../src/redux/VisibleTodoList';
import AddTodo from '../../src/redux/AddTodo';
import { shallow } from 'enzyme';

describe('TodoApp', () => {

    describe('AddTodo', () => {
        it('is rendered with correct props', () => {
            const store = {a: 'b'};
            const component = shallow(<TodoApp store={store}/>);
            const addTodoProps = component.find(AddTodo).props();
            expect(addTodoProps.store).toBe(store);
        });
    });

    describe('filter links', () => {
        it('is rendered with correct props', () => {
            const store = {a: 'b'};
            const component = shallow(<TodoApp store={store}/>);
            expect(component.find(FilterLinks).props().store).toBe(store);
        });
    });

    describe('todo list', () => {
        it('is rendered with correct props', () => {
            const store = {a: 'b'};
            const component = shallow(<TodoApp store={store}/>);
            const props = component.find(VisibleTodoList).props();
            expect(props.store).toEqual(store);
        });
    });
});