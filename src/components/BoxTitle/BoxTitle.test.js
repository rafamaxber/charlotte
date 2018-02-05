import React from 'react';
import renderer from 'react-test-renderer';
import BoxTitle from './BoxTitle';

describe('BoxTitle', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <BoxTitle></BoxTitle>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
