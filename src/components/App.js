import React, { Component } from 'react';
import Greeting from './Greeting'
import About from './About'
import Experience from './Experience'
import Portfolio from './Portfolio'
import Contacts from './Contacts'
import Shapes from './Shapes'
import Header from './Header'
import KnowledgeSharing from './KnowledgeSharing'

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
          </div>
          <div className="row app-content">
              <Greeting/>
            <hr/>
              <About/>
            <hr/>
              <Experience/>
            <hr/>
              <Portfolio/>
            <hr/>
              <KnowledgeSharing/>
            <hr/>
              <Contacts/>
            <footer>
              <p>All rights received. Viktor Kukurba. 2016.</p>
            </footer>
          </div>
        </div>);
  }
}

export default App;
