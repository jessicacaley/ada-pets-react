import React from 'react';
import App from './App';
import { mount, shallow } from 'enzyme';

describe('App', () => {
  test('that it renders App with shallow rendering', () => {
    const wrapper = shallow ( <App />);

    expect(wrapper).toMatchSnapshot();
  });

  test('that it matches an existing snapshot', () => {
    const wrapper = mount ( <App />);

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });
});