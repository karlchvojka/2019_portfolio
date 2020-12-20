import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
              <p>Copyright &copy;2020 Karl Chvojka</p>
            </Col>
          </Row>
        </Container>

      </footer>
    );
  }
}

export default Footer;
