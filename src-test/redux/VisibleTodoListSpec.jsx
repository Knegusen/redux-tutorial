import React from 'react';
import VisibleTodoList from '../../src/redux/VisibleTodoList';
import TodoList from '../../src/redux/TodoList';
import { shallow } from 'enzyme';

describe('VisibleTodoList', () => {

    describe('TodoList props', () => {

        let action;
        let visibilityFiler;

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

        const context = {
            store: {
                getState: () => ({
                    visibilityFilter: visibilityFiler,
                    todos
                }),
                subscribe: () => () => ({}),
                dispatch: (a) => {
                    action = a;
                }
            }
        };

        describe('componentDidMount', () => {
            it('subscribes to store', () => {
                //TODO: implement
            });
        });

        describe('componentWillUnmount', () => {
            it('unsubscribes to store', () => {
                //TODO: implement
            });
        });

        describe('onTodoClick', () => {
            it('is set', () => {
                const id = 1;
                const component = shallow(<VisibleTodoList />, {context});
                component.find(TodoList).props().onTodoClick(id);
                expect(action).toEqual({
                    type: 'TOGGLE_TODO',
                    id
                });
            });
        });

        describe('todos', () => {

            describe('when filter is show_all', () => {
                it('renders all todos', () => {

                    visibilityFiler = 'SHOW_ALL';
                    const component = shallow(<VisibleTodoList />, {context});
                    expect(component.find(TodoList).props().todos).toEqual(todos);

                });
            });

            describe('when filter is show_completed', () => {
                it('renders 1 todos', () => {

                    visibilityFiler = 'SHOW_COMPLETED';
                    const component = shallow(<VisibleTodoList />, {context});
                    expect(component.find(TodoList).props().todos).toEqual(todos.filter((todo => todo.completed)));
                });
            });
            describe('when filter is show_active', () => {
                it('renders 2 todos', () => {

                    visibilityFiler = 'SHOW_ACTIVE';
                    const component = shallow(<VisibleTodoList />, {context});
                    expect(component.find(TodoList).props().todos).toEqual(todos.filter((todo => !todo.completed)));
                });
            });
        });
    });
});