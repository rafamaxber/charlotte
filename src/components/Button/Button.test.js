import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <Button></Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
