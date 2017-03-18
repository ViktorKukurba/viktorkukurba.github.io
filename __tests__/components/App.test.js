import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/components/App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Sections count', () => {
  const wrapper = mount(
      <App />
  );

  const sections = wrapper.find('.app-section');
  expect(sections.length).toBe(4);
});
