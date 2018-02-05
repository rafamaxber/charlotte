import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <Footer></Footer>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
