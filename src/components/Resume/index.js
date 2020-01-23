import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';


class Resume extends Component {
  render() {
    return (
      <main className="resumeWrap">
        <Helmet>
          <title>Karl Chvojka's Portfolio - Resume</title>
          <meta name="description" content="Karl Chvojka's Resume." />
          <meta name="keywords" content="Karl Chvojka, Web Development, React, Ruby on Rails, Resume" />
        </Helmet>
        <Container fluid="true">
          <Row className="headerWrap">
          <Col className="controlWrap" xl={12} lg={12} md={12} sm={12} xs={12}>
          <div>
          <p>To save as pdf:&nbsp;&nbsp; 1. Right click, click 'Print'&nbsp;&nbsp; 2. Change Destination to 'Save as PDF'&nbsp;&nbsp; 3. Press Save</p>
          </div>
          <ul className="ml-auto">
            <li><a className="btn btn-primary" href="/" target= "_blank">Go Back</a></li>
          </ul>

          </Col>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <h1>Karl Chvojka</h1>
              <h2>Front End Web Developer</h2>
              <p>Portfolio: <a href="http://karlchvojka.com">karlchvojka.com</a></p>
              <p>Github: <a href="https://github.com/karlchvojka">https://github.com/karlchvojka</a></p>
              <p>Linkedin: <a href="https://www.linkedin.com/in/karlchvojka/">https://www.linkedin.com/in/karlchvojka/</a></p>
              <p>Email: <a href="mailto:karl.chvojka@gmail.com">karl.chvojka@gmail.com</a></p>
            </Col>
          </Row>
          <Row className="profileWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <h2>Profile</h2>
              <p>I am a Fullstack Web Developer with 10 Years of industry experience building websites, being part of advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines. I specialize in Frontend Technologies (JavaScript, Responsive design libraries, React, HTML5, CSS3) with knowledge and understanding of backend Technologies (Node.js,  Ruby on Rails, Relational and Document databases like PostgreSQL, MongoDB, mySQL, etc). </p>
              <p>I also have experience in Project Management, project budgeting, SEO techniques, Online and Traditional advertising, web, graphic, and traditional media design, and how all the parts can work together in an advertising campaign.</p>
            </Col>
          </Row>
          <Row className="workExperienceHeader">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <h2>Work Experience</h2>
            </Col>
          </Row>
          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>Lighthouse Labs</h3>
                    <h4>Front-End Developer</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>Aug 2019 - Present</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="keywords"><span>Noteable Keywords:</span> Customer serivce, Student Mentorship, Project Management, Marketing, Front End Development (HTML5, CSS3, CSS Grid, Flexbox), JavaScript, jQuery, Bootstrap, React, Ruby on Rails, JSX, Active Record </p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Working with the Marketing team to plan and execute the building of Static ReactJs sites for marketing and promotional purposes. Working with the internal staff to maintain and upgrade internal systems in React, Ruby on Rails, etc.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>Freelance Work</h3>
                    <h4>Full Stack Developer</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>Aug 2010 - Present</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="keywords"><span>Noteable Keywords:</span> Business Management, Client Interaction, Client relations, Customer serivce, Project Management, Self Employment, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, JavaScript, jQuery, Bootstrap, Photography, User Guide Creation.</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Managing and completing websites for a variety of clients. Projects are handled from initial contact with the client to the final launch including Concepts, Wireframing, Design, Development, Migration, Content Management, Testing, and Launching. Supplying clients with Hosting and Host maintenance, including Server updates, and Hosting provider interaction when needed.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>FreeCodeCamp</h3>
                    <h4>Global Community Manager</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>Aug 2017 - Present</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="keywords"><span>Noteable Keywords:</span> Social Media Management, Facebook Group moderation, Community Organizing, Public speaking</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>FreeCodeCamp is an online learning resource for Fullstack Development learning. FreeCodeCamp has broken learning Web Development into digestible chunks to allow people to learn how to code in their spare time.</p>

                  <p>I am a Global Community Manager and my biggest input into the FCC ecosystem is managing the moderators for the Facebook Groups and other social media.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>MediaFace, Toronto</h3>
                    <h4>Fullstack Web Developer</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>June 2017 - Oct 2017</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="keywords"><span>Noteable Keywords:</span> Client Research, Client relations, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO Implementation.</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Building Responsive Worpdress Themes with Bootstrap. Tasks included building full websites, and Wordpress Plugins. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing. </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>Digital Shift Marketing, Toronto</h3>
                    <h4>Front End Developer</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>Feb 2016 - Oct 2016</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="keywords"><span>Noteable Keywords:</span> Development Team Management Training, Process writing, Client Research, Client relations, Customer service Project Management, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO Implementation.</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Building Responsive Worpdress Themes with Bootstrap. Tasks included building full websites to building landing pages for SEO A/B Testing. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing. Management duties included heading projects, as well as writing processes and procedures to be used by the development department and managing the IT needs of the company.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>VentureWeb, Toronto</h3>
                    <h4>Web Consultant, Front End Developer</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>Sept 2013  –  Dec 2014</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="keywords"><span>Noteable Keywords:</span> Development Team Management Training, Process writing, Client Research, Client relations, Customer service Project Management, Front End Development (HTML5, CSS3), Wordpress, PHP, MySQL, Javascript, jQuery, Bootstrap, Technical SEO Implementation.</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Working as a web consultant through VentureWeb for Accenture, as a site manager for Accenture's Careers Websites.</p>
                  <p>Tasks included building full websites to building landing pages for SEO A/B Testing. As well as setting up SEO Tracking codes for Google Analytics, Facebook, and Bing.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>Northlands, Edmonton</h3>
                    <h4>Sr. Front End Developer</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>Sept 2012  –  Apr 2013</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="keywords"><span>Noteable Keywords:</span> Front End Development (HTML5, CSS3), JavaScript, jQuery, PHP, Wordpress, Drupal, Joomla!, User guide creation, Content Management, Web Platform Maintenance, Server Maintenance, Enterprise Level Company</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <p>Primary responsibility for position was the updating and maintenance of the 13 web properties for Northlands. Acted as the primary contact for the hosting companies, and IT service providers that Northlands works with. This included managing, updating and maintaining the web servers, as well as working with the hosting companies to coordinate hardware maintenance and downtime. Additionally, responsible for internal system creation for managing new content to be added to the web properties.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>

          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>Edmonton Arts College, Edmonton</h3>
                    <h4>Teacher/Instructor - Digital Media Production Program</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>July 2012  –  Sept 2012</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Taught basic HTML, CSS, CSS3, JavaScript, Github and etc in the Digital Media Production Program.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="skillsWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <Row className="titleWrap">
              <Col className="noGutters" xl={12} lg={12} md={12} sm={12} xs={12}>
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
                </ul>
              </Col>
            </Row>
            </Col>
          </Row>
          <Row className="workExperienceHeader">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <h2>Education</h2>
            </Col>
          </Row>
          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>Lighthouse Labs, Toronto</h3>
                    <h4>Web Development Bootcamp</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>Apr 2019  –  June 2019</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>The Web Development Bootcamp is a 12 week, 40+ hours/week bootcamp. It covers the most popular and marketable languages and frameworks used in Web Development today.</p>

                    <p>The topics covered are: JavaScript, Node.js, Express, PostgreSQL, MongoDB, React, Ruby on Rails, Automated Testing, and Computer Science Fundamentals.</p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="workplaceWrap">
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <Container fluid="true" className="noGutters">
                <Row>
                  <Col xl={8} lg={8} md={8} sm={8} xs={8}>
                    <h3>Edmonton Arts College</h3>
                    <h4>Digital Media Production Program</h4>
                  </Col>
                  <Col className="dateWrap" xl={4} lg={4} md={4} sm={4} xs={4}>
                    <p>June 2010</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="keywords"><span>Noteable Keywords:</span> Education, Student Instruction, Front End Development (HTML5, CSS3), JavaScript, jQuery, Wordpress, Drupal, Joomla!, Design Interpretation, Career Guidence</p>
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
