import React, { Component } from 'react';
import '../Greeting.css'
import optFoto from '../assets/images/opt-foto.jpg'
import myPhoto from '../assets/images/my_photo.png'

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
          <div className="image-content d-none d-sm-block">
            <img alt="I" onLoad={this.onLoad.bind(this)} className={this.state.loaded ? 'loaded' : ''} src={optFoto}/>
            <img alt="I" onLoad={this.onLoad.bind(this)} className={this.state.loaded ? 'loaded' : ''} src={myPhoto}/>
          </div>
          <div className="clear-fix"></div>
        </section>
    )
  }
}

export default Greeting