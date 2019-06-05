import React, { Component } from 'react';
import MainNavbar from '../navbar/navbar.js'
import Slider from '../slider/';
import About from '../about/';
import Skills from '../skills';
import Projects from '../Projects';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.scss'

class Home extends Component {
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
    )
  }
}

export default Home;
