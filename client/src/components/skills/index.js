import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Skills extends Component {
  render() {
    return (
      <section className="skillsWrap">
        <Container>
        <Row className="titleWrap">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <h2>Skills</h2>
          </Col>
        </Row>
        <Row className="skillWrapInner">
          <Col xl={3} lg={3} md={6} sm={12} xs={12}>
            <h3>Languages</h3>
            <ul>
              <li><p>HTML5</p></li>
              <li><p>CSS3</p></li>
              <li><p>JavaScript</p></li>
              <li><p>ES6</p></li>
              <li><p>PHP</p></li>
            </ul>
          </Col>
          <Col xl={3} lg={3} md={6} sm={12} xs={12}>
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
          </Col>
          <Col xl={3} lg={3} md={6} sm={12} xs={12}>
            <h3>Database Systems</h3>
            <ul>
              <li><p>MySQL</p></li>
              <li><p>PostgreSQL</p></li>
              <li><p>MongoDB</p></li>
              <li><p>Restful API's</p></li>
            </ul>
          </Col>
          <Col xl={3} lg={3} md={6} sm={12} xs={12}>
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
          </Col>
        </Row>
        </Container>
      </section>
    );
  }
}

export default Skills;
