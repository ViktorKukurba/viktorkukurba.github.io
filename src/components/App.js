import React, { Component } from 'react';
import '../App.css';
import '../Header.sass';
import Greeting from './Greeting'
import About from './About'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contacts from './Contacts'
import Shapes from './Shapes'
import Header from './Header'

/**
 * Application class.
 * @extends Component
 * @class
 */
class App extends Component {

  /** Renders App. */
  render() {
    return (
        <div className="container">
          <div className="row">
            <Shapes />
            <Header />
            <hr/>
          </div>
          <div className="row">
              <Greeting/>
            <hr/>
              <About/>
            <hr/>
              <Experience/>
            <hr/>
              <Portfolio/>
            <hr/>
              <Contacts/>
            <footer>
              <p>All rights received. Viktor Kukurba. 2016.</p>
            </footer>
          </div>
        </div>
    );
  }
}

export default App;
