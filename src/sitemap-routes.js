import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home/';
import Resume from './components/Resume/';
import About from './components/about/';


export default (
    <Route>
      <Route path="/" exact component={ Home } />
      <Route path="/about" exact component={ About } />
      <Route path="/resume" exact component={ Resume } />
    </Route>
);
