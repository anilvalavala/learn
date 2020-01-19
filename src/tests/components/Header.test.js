import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Test if Header component is rendered correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})