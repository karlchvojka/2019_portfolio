import React, { Component } from 'react';
import Head1 from '../../assets/head1.png';

class About extends Component {
  render() {
    return (
      <div id="about" className="aboutWrap">
        <div>
        <img className="aboutImg" alt="Karl Chvojka Headshot" src={Head1} />
        <h2>About</h2>
          <p className="firstP">I am a Full-stack developer with 10 years of industry experience building websites, advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines.</p>
          <p> I have an unending curiosity for new ideas and processes that helps expand my work. the advancement of Technology Continues to bewilder and inspires me.</p>
        </div>

      </div>
    );
  }
}

export default About;
