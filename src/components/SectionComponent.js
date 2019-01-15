import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import isElementOnView from '../Utils'
import store from '../reducers/index'
import SectionActions from '../actions/SectionActions'
import '../styles/Section.sass'

/**
 * Class representing page section component.
 * @extends Component
 * @class
 */
class SectionComponent extends Component {
  /** Creates SectionComponent */
  constructor() {
    super();
    this.timeoutVisible = 0;
  }

  /**
   * Adds event handlers after component creation.
   * @this {SectionComponent}
   */
  componentDidMount() {
    /** @type {number} */ var previousPageYOffset = window.pageYOffset;
    /** @type {number} */var timeout;

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
  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.visible()) {
      clearTimeout(this.timeoutVisible);
      this.timeoutVisible = setTimeout(() => {
        window['ga']('send', 'pageview', this.props.id);
      },3e3);
    } else {
      clearTimeout(this.timeoutVisible);
    }
  };

  /**
   * Renders Section component.
   * @return {string} JSX string.
   */
  render() {
    return (<section className="app-section w-100 h-100" ref={(section) => { this.container = section; }} id={this.props.id}>
      {this.props.children}
    </section>)
  }

  visible() {
    return this.props.activeSections.includes(this.props.id) ? 'visible' : ''
  }
}

SectionComponent.contextTypes = {
  store: PropTypes.object,
  id: PropTypes.string,
  activeSections: PropTypes.array
};

export default connect(state => ({
  activeSections: state.sections.active
}))(SectionComponent)
