import React, { Component } from 'react';
import Head1 from '../../assets/head1.png';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

class Projects extends Component {
  render() {
    return (
      <section id="projects" className="projectsWrap">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
            </Col>
          </Row>
          <Row>
            <Col className="cardWrap" xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="cardWrapInner">
                <div className="imgWrap">
                  <img src="https://github.com/karlchvojka/lhl-final-project/raw/master/docs/budget.png"/>
                </div>
                <h3>Squabble: Final</h3>
                <h4>Description</h4>
                <p>Squabble is a budget splitting app. It allows users to view, record, and evenly split budgets while tracking infrequent purchases.</p>
                <p><a href="https://github.com/karlchvojka/lhl-final-project"><FontAwesomeIcon icon={faGithub} /> View Project</a></p>
              </div>
            </Col>
            <Col className="cardWrap" xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="cardWrapInner">
                <div className="imgWrap">
                  <img src="https://github.com/basktballer/TheWallMidterm/raw/master/docs/desktop-home.png"/>
                </div>
                <h3>The Wall: Midterm</h3>
                <h4>Description</h4>
                <p>The Wall is a lot like Trello/Pinterest. It allows you to post and organize Resources, like links, todos, etc.</p>
                <p>This was a group project between three people.</p>
                <p><a href="https://github.com/basktballer/TheWallMidterm"><FontAwesomeIcon icon={faGithub} /> View Project</a></p>
              </div>
            </Col>
            <Col className="cardWrap" xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="cardWrapInner">
                <div className="imgWrap">
                  <img src="https://github.com/karlchvojka/lhl-tinyApp-project/raw/master/docs/tinyapp1.png"/>
                </div>
                <h3>Tiny App</h3>
                <h4>Description</h4>
                <p>Tiny App is a URL shortner. This project was completed while at Lighthouse Labs.</p>
                <p><a href="https://github.com/karlchvojka/lhl-tinyApp-project"><FontAwesomeIcon icon={faGithub} /> View Project</a></p>
              </div>
            </Col>
            <Col className="cardWrap" xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="cardWrapInner">
                <div className="imgWrap">
                  <img src="https://github.com/karlchvojka/tweeter/raw/master/docs/screenshot1.png"/>
                </div>
                <h3>Tweeter App</h3>
                <h4>Description</h4>
                <p>Tweeter is a Twitter clone.</p>
                <p><a href="https://github.com/karlchvojka/tweeter"><FontAwesomeIcon icon={faGithub} /> View Project</a></p>
              </div>
            </Col>
            <Col className="cardWrap" xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="cardWrapInner">
                <div className="imgWrap">
                  <img src="https://github.com/karlchvojka/chatty_app/raw/master/docs/home2.png"/>
                </div>
                <h3>Chatty App</h3>
                <h4>Description</h4>
                <p>Chatty App is a simple chatroom with websockets</p>
                <p><a href="https://github.com/karlchvojka/chatty_app"><FontAwesomeIcon icon={faGithub} /> View Project</a></p>
              </div>
            </Col>
            <Col className="cardWrap" xl={4} lg={4} md={6} sm={12} xs={12}>
              <div className="cardWrapInner">
                <div className="imgWrap">
                  <img src="https://github.com/karlchvojka/jungle-rails/raw/master/docs/jungle1.png"/>
                </div>
                <h3>Jungle App</h3>
                <h4>Description</h4>
                <p>A mini e-commerce application built with Rails 4.2 for purposes of teaching Rails by example.</p>
                <p><a href="https://github.com/karlchvojka/jungle-rails"><FontAwesomeIcon icon={faGithub} /> View Project</a></p>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
    );
  }
}

export default Projects;
