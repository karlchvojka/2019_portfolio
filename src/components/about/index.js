import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Head1 from '../../assets/head1.png';

class About extends Component {
  render() {
    return (
      <section id="about" className="aboutWrap">
        <Container>
          <Row>
            <Col className="aboutInner" xl={12} lg={12} md={12} sm={12} xs={12}>
              <img className="aboutImg" alt="Karl Chvojka Headshot" src={Head1} />
              <h2>About</h2>
              <p className="firstP">I am a Full-stack developer with 10 years of industry experience building websites, advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines.</p>
              <p> I have an unending curiosity for new ideas and processes that helps expand my work. the advancement of Technology Continues to bewilder and inspires me.</p>
            </Col>
          </Row>
        </Container>

      </section>
    );
  }
}

export default About;
