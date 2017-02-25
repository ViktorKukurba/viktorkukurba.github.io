import React, { Component } from 'react';
import './App.css';
import './Header.css';
import './main.css';
import Greeting from './Greeting'
import About from './About'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contacts from './Contacts'
import Figures from './Figures'
import Header from './Header'

class App extends Component {
  constructor() {
    super();
    this.state = {
      shape:'triangle'
    }
  }

  handleShapeChange(shape) {
    this.setState({shape});
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <Figures shape={this.state.shape}/>
            <Header changeShape={this.handleShapeChange.bind(this)} shape={this.state.shape}/>
            <hr/>
          </div>
          <div className="row">
              <Greeting/>
            <hr/>
              <About id="about"/>
            <hr/>
              <Experience id="experience" />
            <hr/>
              <Portfolio id="portfolio"/>
            <hr/>
              <Contacts id="contacts"/>
            <footer>
              <p>All rights received. Viktor Kukurba. 2016.</p>
            </footer>
          </div>
        </div>
    );
  }
}

export default App;
