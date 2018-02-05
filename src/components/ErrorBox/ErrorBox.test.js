import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBox from './ErrorBox';

describe('ErrorBox', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <ErrorBox></ErrorBox>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
