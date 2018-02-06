import React from 'react';
import renderer from 'react-test-renderer';
import Loadable from './Loadable';
import Loading from './Loading';

describe('Loading components', () => {
  describe('Loadable', () => {
    it('Should match with snapshot', () => {
      expect(Loadable()).toMatchSnapshot();
    });
  });
  describe('Loadable', () => {
    it('Should match with snapshot', () => {
      const component = renderer.create(
        <Loading></Loading>
      );
      expect(component).toMatchSnapshot();
    });
  });
});
