import React from 'react';
import renderer from 'react-test-renderer';
import BoxCalendar from './BoxCalendar';

describe('BoxCalendar', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <BoxCalendar></BoxCalendar>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
