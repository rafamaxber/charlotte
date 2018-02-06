import store from './store';

describe('App', () => {
  it('Should match with snapshot', () => {
    
    expect(store).toMatchSnapshot();
  });
});
