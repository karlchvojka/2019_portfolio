import React, { Component } from 'react';
import ReactGA from 'react-ga';
import createHistory from 'history/createBrowserHistory'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home/';
import Resume from './components/Resume/';
import About from './components/about/';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'

const history = createHistory()
ReactGA.initialize('UA-18900659-1');
history.listen((location, action) => {
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
});


class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ About } />
        <Route path="/resume" exact component={ Resume } />
      </Router>
    );
  }
}

export default App;
