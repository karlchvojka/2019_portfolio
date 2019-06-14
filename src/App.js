import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';
import Home from './components/Home/';
import Resume from './components/Resume/';
import About from './components/about/';


import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'

class App extends Component {
  constructor() {
    super();
    this.state = {
      someData: null
    };
    ReactGA.initialize('UA-18900659-1');
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <HttpsRedirect>
      <Router>
        <Route path="/" exact component={ Home } />
        <Route path="/about" exact component={ About } />
        <Route path="/resume" exact component={ Resume } />
      </Router>
      </HttpsRedirect>
    );
  }
}

export default App;
