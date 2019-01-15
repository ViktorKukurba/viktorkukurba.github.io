import React, { Component } from 'react'

import Shapes from './Shapes'
import Header from './Header'
import Router, {links} from './Router'

import '../styles/App.sass'

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
          <div className="row position-fixed w-100 m-0 h-100 p-0">
            <div className="container">
              <Shapes />
            </div>
          </div>
          <Header links={links} />
          <main className="row app-content">
            <Router/>
          </main>
          <footer className="shadowed">
              <p>All rights received. Viktor Kukurba. {(new Date).getFullYear()}.</p>
          </footer>
        </div>);
  }
}

export default App;
