import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Resume extends Component {
  render() {
    return (
      <main className="resumeWrap">
        <Container fluid="true">
          <Row className="headerWrap">
            <Col xl={1} lg={1} md={1} sm={1} xs={1}>
            </Col>
            <Col xl={11} lg={11} md={11} sm={11} xs={11}>
              <h1>Karl Chvojka</h1>
              <h2>Front End Web Developer</h2>
              <p>Portfolio: <a href="http://karlchvojka.com">karlchvojka.com</a></p>
              <p>Github: <a href="https://github.com/karlchvojka">https://github.com/karlchvojka</a></p>
              <p>Email: <a href="mailto:karl.chvojka@gmail.com">karl.chvojka@gmail.com</a></p>
            </Col>
          </Row>
          <Row>
            <Col xl={1} lg={1} md={1} sm={1} xs={1}>
            </Col>
            <Col xl={11} lg={11} md={11} sm={11} xs={11}>
              <h2>Profile</h2>
              <p>I am a Fullstack Web Developer with 10 Years of industry experience building websites, being part of advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines. I specialize in Frontend Technologies (JavaScript, Responsive design libraries, React, HTML5, CSS3) with knowledge and understanding of backend Technologies (Node.js,  Ruby on Rails, Relational and Document databases like PostgreSQL, MongoDB, mySQL, etc). </p>
              <p>I also have experience in Project Management, project budgeting, SEO techniques, Online and Traditional advertising, web, graphic, and traditional media design, and how all the parts can work together in an advertising campaign.</p>
            </Col>
          </Row>
          <Row>
            <Col xl={1} lg={1} md={1} sm={1} xs={1}>
            </Col>
            <Col xl={11} lg={11} md={11} sm={11} xs={11}>
            <h2>Work Experience</h2>
            </Col>
          </Row>
          <Row>
            <Col xl={1} lg={1} md={1} sm={1} xs={1}>
            </Col>
            <Col xl={11} lg={11} md={11} sm={11} xs={11}>
              <Container fluid="true">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>Digital Shift Marketing</h3>
                    <h4>Full Stack Developer, Management</h4>
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>Feb 2016 - Oct 2016</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p><span>Noteable Keywords:</span> Development Team Management Training, Process writing, Client Research, Client relations, Customer service
Project Management, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO
Implementation.</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Building Responsive Worpdress Themes with Bootstrap. Tasks included building full websites to building landing pages
for SEO A/B Testing. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing. Management
duties included heading projects, as well as writing processes and procedures to be used by the development department
and managing the IT needs of the company.</p>
                  </Col>
                </Row>
                </Container>
              </Col>
            </Row>
        </Container>
      </main>
    );
  }
}

export default Resume;
