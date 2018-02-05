import React from 'react';
import renderer from 'react-test-renderer';
import Calendar from './Calendar';

describe('Calendar', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <Calendar></Calendar>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
