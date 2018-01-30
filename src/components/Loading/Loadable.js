import Loadable from 'react-loadable';
import LoadingPage from './Loading';

const LoadableWrapper = options => 
  Loadable({
    loading: LoadingPage,
    delay: 300,
    ...options
  });

export default LoadableWrapper;