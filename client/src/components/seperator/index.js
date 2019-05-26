import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class Seperator extends Component {
  render() {
    return (
      <Row className="seperator">
        <Col>
          <h3>{this.props.name}</h3>
        </Col>
      </Row>
    );
  }
}

export default Seperator;
