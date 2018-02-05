import React from 'react';
import renderer from 'react-test-renderer';
import FilterRange from './FilterRange';

describe('FilterRange', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <FilterRange></FilterRange>
    );
    expect(component).toMatchSnapshot();
  });
});
