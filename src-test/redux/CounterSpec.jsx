import Counter from '../../src/redux/Counter';
import React from 'react';
import { shallow } from 'enzyme';

describe('Counter', () => {
    it('renders value', () => {
        const value = 2;
        const component = shallow(<Counter value={value}/>);
        expect(component.contains(value)).toBe(true);
    });

    describe('button add', () => {

        it('is rendered with a +', () => {
            const component = shallow(<Counter />);
            expect(component.find('.add').text()).toBe('+');
        });

        describe('on click', () => {
            it('calls prop onIncrement', () => {
                const funcs = {callback: () => ({})};
                spyOn(funcs, 'callback');
                const component = shallow(<Counter onIncrement={funcs.callback}/>);
                component.find('.add').simulate('click');
                expect(funcs.callback).toHaveBeenCalled();
            });
        });
    });

    describe('button remove', () => {

        it('is rendered with a -', () => {
            const component = shallow(<Counter />);
            expect(component.find('.remove').text()).toBe('-');
        });

        describe('on click', () => {
            it('calls prop onIncrement', () => {
                const funcs = {callback: () => ({})};
                spyOn(funcs, 'callback');
                const component = shallow(<Counter onDecrement={funcs.callback}/>);
                component.find('.remove').simulate('click');
                expect(funcs.callback).toHaveBeenCalled();
            });
        });
    });
});