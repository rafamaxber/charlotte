import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('Should match with snapshot', () => {
    const component = shallow(
      <App></App>
    );
    expect(component).toMatchSnapshot();
  });
});
