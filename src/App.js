import React, { Component } from 'react'
import LoadableWrapper from './components/Loading/Loadable';
import { 
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';

const Home = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "Home"*/'./containers/Home/Home.js'),
});

const About = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "About"*/'./containers/About/About.js'),
});

const Blog = LoadableWrapper({
  loader: () => import(/*webpackChunkName: "Blog"*/'./containers/Blog/Blog.js'),
});

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <hr />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
        </div>
      </Router>
    );
  }
}

export default App;
