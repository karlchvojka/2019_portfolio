import React, { Component } from 'react';
import MainNavbar from './components/navbar/navbar.js'
import Slider from './components/slider/';
import About from './components/about/';
import Skills from './components/skills';
import Projects from './components/Projects';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            isLoaded: false,
        }
    };
    componentDidMount = () => {
        fetch(`http://localhost:3000/api/v1/articles.json`)
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
              isLoaded: true,
              articles: resp
            })
            console.log(this.state.articles)
        })
    };

    render() {
    var { articles } = this.state;
    return (
    <main>
      <MainNavbar noGutter="true"/>
      <Slider />
      <About />
      <Skills />
      <Projects />
        {articles.map(item => item.title ) }
    </main>
    );
  }
}

export default App;
