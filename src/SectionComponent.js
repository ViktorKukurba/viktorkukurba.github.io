import React, {Component} from 'react'
import isElementOnView from './Utils'

class SectionComponent extends Component {
  constructor() {
    super();
    this.state = { };
    this.timeoutVisible = 0;
  }
  componentDidMount() {
    var self = this;
    var previousPageYOffset = window.pageYOffset;
    var timeout;
    window.addEventListener('scroll', function(evt) {
      clearTimeout(timeout);
      previousPageYOffset = window.pageYOffset;
      timeout = setTimeout(function() {
        if (window.pageYOffset === previousPageYOffset) {
          if (isElementOnView(self.container)) {
            self.setState({'visible': true});
          } else {
            self.setState({'visible': false});
          }
        } else {
          previousPageYOffset = window.pageYOffset;
        }
      }, 1e2);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    var self = this;
    if (prevState.visible !== this.state.visible && this.state.visible) {
      clearTimeout(self.timeoutVisible);
      self.timeoutVisible = setTimeout(function() {
        window['ga']('send', 'pageview', self.props.id);
      },3e3);
    } else {
      clearTimeout(self.timeoutVisible);
    }
  };

  renderContent() {
    return (<div>Section content</div>);
  };

  render() {
    return (<section ref={(section) => { this.container = section; }}
        className={this.state.visible ? 'visible' : ''} id={this.props.id}>
    {this.renderContent()}
    </section>)
  }
}

export default SectionComponent