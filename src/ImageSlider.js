import React, { Component } from "react";
import ReactDOM from "react-dom";
import { spawn } from "child_process";

class ImageSlider extends Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    };
  }
  render() {
    return <span>I am on slide {this.state.currentSlideIndex}</span>;
  }
}

export default ImageSlider;
