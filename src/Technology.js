import React, {Component} from 'react'
import isElementOnView from './Utils'

class Technology extends Component {
  constructor() {
    super();
    this.state = {
      shown: false,
      width: 0
    }
  }

  show() {
    if (!this.state.shown && isElementOnView(this.refs.container)) {
      this.setState({
        shown: true,
        width: this.props.info.val + '%'
      });
    }
  }

  render() {
    let info = this.props.info;
    return (
        <div className={info.shortName + " item"} ref="container">
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

Technology.propTypes = {
  info: React.PropTypes.object.isRequired
};

export default Technology