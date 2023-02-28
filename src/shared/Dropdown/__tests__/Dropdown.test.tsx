import React from "react"
import { Dropdown } from "../Dropdown"
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

describe('Dropdown', () => {
    test('should render', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
        expect(wrapper).toBeDefined();        
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    })

    test('shot render (snaphot)', () => {
        const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
        expect(wrapper).toMatchSnapshot()
    })
})