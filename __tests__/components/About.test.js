import About from '../../src/components/About';
import React from 'react';
import { shallow } from 'enzyme';
import store from '../../src/reducers/index';

describe('About component renders information', () => {
  it('test component state', () => {
    const wrapper = shallow(<About store={store}/>);
    const p = wrapper.find('.info.content-box p');
    expect(p.length).toBe(3);
  })
});