import React from 'react';
import Sw from '../registerServiceWorker';

describe('registerServiceWorker', () => {
  it('renders correctly', () => {
    expect(Sw).toMatchSnapshot();
  });
});
