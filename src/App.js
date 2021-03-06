import React, { Component } from 'react'
import LoadableWrapper from './components/Loading/Loadable';
import { 
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';
import 'minireset.css';

const Home = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "Home"*/'./containers/Home/Home.js'),
});

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    );
  }
}

export default App;
