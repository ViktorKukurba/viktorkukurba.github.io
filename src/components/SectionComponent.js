import React, {Component} from 'react'
import isElementOnView from '../Utils'
import store from '../reducers/index'
import SectionActions from '../actions/SectionActions'
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
    /** @type {number} */ var previousPageYOffset = window.pageYOffset;
    /** @type {number} */var timeout;

    store.subscribe(() => {
      this.setState({
        'visible': store.getState().sections.active.indexOf(this.props.id) !== -1
      });
    });

    window.addEventListener('scroll', () => {
      clearTimeout(timeout);
      previousPageYOffset = window.pageYOffset;
      timeout = setTimeout(() => {
        if (window.pageYOffset === previousPageYOffset) {
          if (isElementOnView(this.container)) {
            store.dispatch(SectionActions.visibleSection(this.props.id));
          } else {
            store.dispatch(SectionActions.hiddenSection(this.props.id));
          }
        } else {
          previousPageYOffset = window.pageYOffset;
        }
      }, 1e2);
    });
  }

  /** Handles components properties and state update. */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.visible !== this.state.visible && this.state.visible) {
      clearTimeout(this.timeoutVisible);
      this.timeoutVisible = setTimeout(() => {
        window['ga']('send', 'pageview', this.props.id);
      },3e3);
    } else {
      clearTimeout(this.timeoutVisible);
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