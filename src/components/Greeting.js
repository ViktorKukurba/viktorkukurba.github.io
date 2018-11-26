import React, { Component } from 'react';
import '../styles/Greeting.sass'
import myPhoto from '../assets/images/my_photo.png';

class Greeting extends Component {
  /** Creates Greeting component. */
  constructor() {
    super();
    this.state = {
      loaded: false,
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
        <section id="greeting" className="app-content row">
          <div className="text-content py-4 col-12 col-md-6">
            <div className={"title animate-text " + (this.state.loaded ? 'show' : '')}>
              <h1 className="py-2">{this.spanifyText('hi, I’m')}
                <br/>
                {this.spanifyText('Viktor')}
                <br/>
                {this.spanifyText('Kukurba')}</h1>
              <h2>{this.spanifyText('web developer')}</h2>
            </div>
          </div>
          <div className="image-content d-none d-sm-block col-md-6">
            {/* <img alt="I" onLoad={this.onLoad.bind(this)} className={this.state.loaded ? 'loaded' : ''} src={optFoto}/> */}
            <img alt="I" onLoad={this.onLoad.bind(this)} className={this.state.loaded ? 'loaded' : ''} src={myPhoto}/>
            <div className="img-shadow"></div>
          </div>
          <div className="clear-fix"></div>
        </section>
    )
  }

  spanifyText(text) {
    return Array.from(text).map((l, i) => {
      return <span key={i}>{l}</span>
    })
  }
}

export default Greeting