import React, {Component} from 'react'
import PropTypes from 'prop-types';

import isElementOnView from '../Utils'
import ExperienceConstants from '../constants/ExperienceConstants'
import store from '../reducers/index'

import '../styles/Technology.sass'

/**
 * Technology component.
 * @extends Component
 * @class
 */
class Technology extends Component {
  /** Creates technology component. */
  constructor() {
    super();
    this.state = {
      shown: false,
      width: 0
    };

    this.scrollHandler_ = this.show.bind(this);
  }

  static propTypes = {
    info: PropTypes.object.isRequired
  };

  /** Binds scroll event listener. */
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler_);
    this.unsubscribeStore = store.subscribe(() => {
      let name = this.props.info.name;
      let tech = store.getState().experience.technologies.find((item) => {
        return item.name === name;
      });
      if (tech) {
        this.setState({
          shown: tech.shown,
          width: tech.shown ? (tech.val + '%') : 0
        });
        tech.shown && this.unsubscribeStore();
      }
    });
  }

  /** Uninds scroll event listener. */
  componentWillUnmount() {
    this.unsubscribeStore();
    window.removeEventListener('scroll', this.scrollHandler_);
  }

  /** Shows technology if visible. */
  show() {
    if (!this.state.shown && isElementOnView(this.refs.container)) {
      store.dispatch({
        type: ExperienceConstants.TECH_VISIBLE,
        name: this.props.info.name
      });
      window.removeEventListener('scroll', this.scrollHandler_);
    }
  }

  /**
   * Renders component.
   * @return {string} JSX string.
   */
  render() {
    let info = this.props.info;
    return (
        <div className={info.name + " item technology"} ref="container">
          <div className="title">
            <label>{info.fullName}</label>
          </div>
          <div className="bar-wrapper">
            <div className="bar col-xs-12">
              <div className="bar-value" style={{width: this.state.width}}></div>
            </div>
            <span className="title bar-label" style={{left: this.state.width}}>{info.val}%</span>
            <div className="details">{info.details}</div>
          </div>
        </div>
    )
  }
}

export default Technology