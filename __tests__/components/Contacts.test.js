import React from 'react';
import { Provider } from 'react-redux';
import { mount, render, shallow } from 'enzyme';
import Contacts from '../../src/components/Contacts';
import store from '../../src/reducers/index';


describe('Contacts section test', () => {
  var wrapper;
  var contacts;
  var SOCIAL_ICONS_COUNT = 5;
  beforeEach(() => {
    Contacts.prototype.componentWillMount = jest.fn();
    wrapper = mount(<Provider store={store}><Contacts ref={(ref) => contacts = ref} /></Provider>);
  });

  it('render test', () => {
    console.log('wrapper', contacts)
    // console.log('wrapper', wrapper.ref('con'))
    expect(contacts.state.alert).toBeDefined()
    expect(Contacts.prototype.componentWillMount.mock.calls.length).toBe(1);
    expect(wrapper.find('form')).toBeTruthy();
    expect(wrapper.find('form input').length).toBe(3);
    expect(wrapper.state()).toBeTruthy();
  });

  xit('test send contacts form', () => {
    Contacts.prototype.handleSubmit = jest.fn();

    var testFormData = {
      name: 'Viktor',
      email: 'viktor@mail.com',
      subject: 'Title',
      message: 'Hi! Would you like to work for million pounds a year?'
    };

    for(let prop of Object.keys(testFormData)) {
      var input = wrapper.find(`[name="${prop}"]`);
      input.getElement().value = testFormData[prop];
      input.simulate('change', input);
      expect(wrapper.state().sendData[prop]).toEqual(testFormData[prop]);
    }
    var submitHandlerCalls = Contacts.prototype.handleSubmit.mock.calls;
    expect(wrapper.state().sendData).toEqual(testFormData);
    expect(submitHandlerCalls.length).toBe(0);

    var form = wrapper.find('form');
    form.simulate('submit', form);

    expect(submitHandlerCalls.length).toBe(1);
    expect(submitHandlerCalls[0][0]).toBeInstanceOf(Object);
    expect(submitHandlerCalls[0][0].target).toBeDefined();
  });

  xit('test social click handler', () => {
    Contacts.handleSocialClick = jest.fn();
    var socialClickCalls = Contacts.handleSocialClick.mock.calls;
    var socials = wrapper.find('.social-networks a');

    socials.forEach((item, index) => {
      item.simulate('click', item);
      expect(socialClickCalls.length).toBe(index + 1);
    });

    expect(socialClickCalls.length).toBe(SOCIAL_ICONS_COUNT);

  });
});