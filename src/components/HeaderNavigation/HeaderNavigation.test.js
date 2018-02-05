import React from 'react';
import renderer from 'react-test-renderer';
import HeaderNavigation from './HeaderNavigation';

describe('HeaderNavigation', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <HeaderNavigation></HeaderNavigation>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
