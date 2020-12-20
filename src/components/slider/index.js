import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Slider() {
  render() {
    return (
      <section className="sliderWrap">
        <Container fluid='true'>
          <Row>
            <Col className="sliderInner" xl={12} lg={12} md={12} sm={12} xs={12}>
              <h1>Heya! I'm Karl Chvojka</h1>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Slider;
