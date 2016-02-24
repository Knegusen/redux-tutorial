import React from 'react';
import FilterLinks from '../../src/redux/FilterLinks';
import FilterLink from '../../src/redux/FilterLink';
import { shallow } from 'enzyme';

describe('FilterLinks', () => {

    describe('filter links', () => {

        it('is rendered with keys', () => {
            const props = {
                onFilterClick: () => ({})
            };
            const component = shallow(<FilterLinks {...props}/>);
            expect(component.find('span').get(0).key).toBe('0');
            expect(component.find('span').get(1).key).toBe('1');
            expect(component.find('span').get(2).key).toBe('2');
        });

        it('has length 3', () => {
            const props = {
                onFilterClick: () => ({})
            };
            const component = shallow(<FilterLinks {...props}/>);
            expect(component.find(FilterLink).length).toBe(3);
        });

        it('is populated correct', () => {
            const props = {
                onFilterClick: (filter) => filter
                ,
                currentFilter: 'SHOW_ALL'
            };
            const component = shallow(<FilterLinks {...props}/>);
            const filterLinks = component.find(FilterLink);
            expectPropsForLinks(filterLinks, 0, 'All', 'SHOW_ALL');
            expectPropsForLinks(filterLinks, 1, 'Active', 'SHOW_ACTIVE');
            expectPropsForLinks(filterLinks, 2, 'Completed', 'SHOW_COMPLETED');
        });
    });
});

function expectPropsForLinks(filterLinks, index, name, filter) {
    expect(filterLinks.at(index).props().children).toBe(name);
    expect(filterLinks.at(index).props().filter).toBe(filter);
    expect(filterLinks.at(index).props().onLinkClick()).toEqual(filter);
    expect(filterLinks.at(index).props().currentFilter).toEqual('SHOW_ALL');
}