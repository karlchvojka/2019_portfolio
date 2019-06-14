import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import MainNavbar from '../navbar/navbar.js';
import Slider from '../slider/';
import About from '../about/';
import Skills from '../skills';
import Projects from '../Projects';
import Footer from '../Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import '../../App.scss'

class Home extends Component {
  constructor(props){
      super(props);
      this.state = {
          isLoaded: false,
      }
  };
  render() {
    return (

      <main>
        <Helmet>
          <title>Karl Chvojka's Portfolio</title>
          <meta name="description" content="The Web Development Portfolio for Karl Chvojka." />
          <meta name="keywords" content="Karl Chvojka, Web Development, React, Ruby on Rails" />
        </Helmet>
        <MainNavbar noGutter="true"/>
        <Slider />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    )
  }
}

export default Home;
