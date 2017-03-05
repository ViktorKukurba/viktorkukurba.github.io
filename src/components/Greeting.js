import React, { Component } from 'react';
import '../Greeting.css'

class Greeting extends Component {
  /** Creates Greeting component. */
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  /** Image load handler. */
  onLoad(event) {
    this.setState({
      loaded: true
    });
  }

  /**
   * Renders Greeting component.
   * @return {string} JSX string.
   */
  render() {
    return (
        <section id="greeting" className="app-content">
          <div className="text-content">
            <div className="title">
              <h1>hi, I’m
                <br/>
              Viktor
                <br/>
              Kukurba</h1>
              <h2>web developer</h2>
            </div>
          </div>
          <div className="image-content hidden-xs-down">
            <img alt="I" onLoad={this.onLoad.bind(this)} className={this.state.loaded ? 'loaded' : ''} src="images/opt-foto.jpg"/>
            <img alt="I" onLoad={this.onLoad.bind(this)} className={this.state.loaded ? 'loaded' : ''} src="images/my_photo.png"/>
          </div>
          <div className="clear-fix"></div>
        </section>
    )
  }
}

export default Greeting