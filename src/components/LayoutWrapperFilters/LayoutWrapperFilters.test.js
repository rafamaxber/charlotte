import React from 'react';
import renderer from 'react-test-renderer';
import LayoutWrapperFilters from './LayoutWrapperFilters';

describe('LayoutWrapperFilters', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <LayoutWrapperFilters></LayoutWrapperFilters>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
