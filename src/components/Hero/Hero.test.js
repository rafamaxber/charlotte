import React from 'react';
import renderer from 'react-test-renderer';
import Hero from './Hero';

describe('Hero', () => {
  it('Should match with snapshot', () => {
    const component = renderer.create(
      <Hero></Hero>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
