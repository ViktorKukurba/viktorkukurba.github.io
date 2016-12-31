import React, { Component } from 'react';

class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  onLoad(event) {
    this.setState({
      loaded: true
    });
  }

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