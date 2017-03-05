import React, {Component} from 'react'
import isElementOnView from '../Utils'
import '../Section.css'

/**
 * Class representing page section component.
 * @extends Component
 * @class
 */
class SectionComponent extends Component {
  /** Creates SectionComponent */
  constructor() {
    super();
    this.state = { };
    this.timeoutVisible = 0;
  }

  /**
   * Adds event handlers after component creation.
   * @this {SectionComponent}
   */
  componentDidMount() {
    /** @type {SectionComponent} */ var self = this;
    /** @type {number} */ var previousPageYOffset = window.pageYOffset;
    /** @type {number} */var timeout;
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

  /** Handles components properties and state update. */
  componentDidUpdate(prevProps, prevState) {
    /** @type {SectionComponent} */ var self = this;
    if (prevState.visible !== this.state.visible && this.state.visible) {
      clearTimeout(self.timeoutVisible);
      self.timeoutVisible = setTimeout(function() {
        window['ga']('send', 'pageview', self.props.id);
      },3e3);
    } else {
      clearTimeout(self.timeoutVisible);
    }
  };

  /**
   * Renders section component content.
   * @return {string} JSX string.
   */
  renderContent() {
    return (<div>Section content</div>);
  };

  /**
   * Renders Section component.
   * @return {string} JSX string.
   */
  render() {
    return (<section ref={(section) => { this.container = section; }}
        className={(this.state.visible ? 'visible ' : '') + 'app-section'} id={this.props.id}>
    {this.renderContent()}
    </section>)
  }
}

export default SectionComponent