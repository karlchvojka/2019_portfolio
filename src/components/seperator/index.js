import React, { Component } from 'react';

class Seperator extends Component {
  render() {
    return (
      <div className="seperator shadow">
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default Seperator;
