import About from '../../src/components/About';
import React from 'react';
import { mount } from 'enzyme';

test('About component renders information', () => {
  const wrapper = mount(
      <About />
  );

  const p = wrapper.find('.info.content-box p');
  expect(p.length).toBe(3);
});