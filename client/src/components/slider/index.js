import React, { Component } from 'react';

import SliderImg from '../../assets/chronicink-slider2.jpg';

class Slider extends Component {
  render() {
    return (
      <div className="sliderWrap">
        <img src={SliderImg} />
      </div>
    );
  }
}

export default Slider;
