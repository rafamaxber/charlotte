import React from 'react';
import renderer from 'react-test-renderer';
import FilterRate from './FilterRate';

describe('FilterRate', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <FilterRate></FilterRate>
    );
    expect(component).toMatchSnapshot();
  });
});
