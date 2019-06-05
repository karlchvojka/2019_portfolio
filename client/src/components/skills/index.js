import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="skillsWrap">
        <div className="titleWrap">
          <h2>Skills</h2>
        </div>
        <div className="skillWrapInner">
          <div>
            <h3>Languages</h3>
            <ul>
              <li><p>HTML5</p></li>
              <li><p>CSS3</p></li>
              <li><p>JavaScript</p></li>
              <li><p>ES6</p></li>
              <li><p>PHP</p></li>
            </ul>
          </div>
          <div>
            <h3>Libraries & Frameworks</h3>
            <ul>
              <li><p>jQuery</p></li>
              <li><p>Bootstrap 4</p></li>
              <li><p>Ajax</p></li>
              <li><p>Express.js</p></li>
              <li><p>React</p></li>
              <li><p>Ruby on Rails</p></li>
              <li><p>Knex</p></li>
              <li><p>Wordpress</p></li>
            </ul>
          </div>
          <div>
            <h3>Database Systems</h3>
            <ul>
              <li><p>MySQL</p></li>
              <li><p>PostgreSQL</p></li>
              <li><p>MongoDB</p></li>
              <li><p>Restful API's</p></li>
            </ul>
          </div>
          <div>
            <h3>Software & Design</h3>
            <ul>
              <li><p>Git/Github</p></li>
              <li><p>Adobe Software Collection</p></li>
              <li><p>Responsive Design</p></li>
              <li><p>Web Design</p></li>
              <li><p></p></li>
              <li><p></p></li>
              <li><p></p></li>
              <li><p></p></li>
              <li><p></p></li>
              <li><p></p></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
