import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "This is a class based Component";
  render() {
    return (
      <div>{this.c} which uses "this." method</div>
    )
  }
}

