import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';

describe('Layout', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <Layout></Layout>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
