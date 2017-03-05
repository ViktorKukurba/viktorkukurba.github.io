import React, {Component} from 'react'
import isElementOnView from '../Utils'
import '../Technology.css'

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
    info: React.PropTypes.object.isRequired
  };

  /** Binds scroll event listener. */
  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler_);
  }

  /** Uninds scroll event listener. */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler_);
  }

  /** Shows technology if visible. */
  show() {
    if (!this.state.shown && isElementOnView(this.refs.container)) {
      this.setState({
        shown: true,
        width: this.props.info.val + '%'
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
        <div className={info.shortName + " item technology"} ref="container">
          <div className="title">
            <label>{info.fullName}</label>
          </div>
          <div className="bar-wrapper">
            <div className="bar col-xs-12">
              <div className="bar-value" style={{width: this.state.width}}
                  data-val={info.val}></div>
            </div>
            <span className="title bar-label" style={{left: this.state.width}}
                data-val={info.val}>{info.val}%</span>
            <div className="details">{info.details}</div>
          </div>
        </div>
    )
  }
}

export default Technology