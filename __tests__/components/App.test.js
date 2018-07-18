import React from 'react';
import App from '../../src/components/App';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import store from '../../src/reducers/index';

describe('App component', () => {
  var wrapper;

  beforeAll(() => {
    wrapper = mount(<Provider store={store}>
      <App />
    </Provider>)
  })

  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Sections count', () => {
    const sections = wrapper.find('.app-section');
    expect(sections.length).toBe(4);
  });
})
