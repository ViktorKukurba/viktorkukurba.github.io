import React, {Component} from 'react'
import {Link} from 'react-scroll'
import ShapesActions from '../actions/ShapesActions'

import store from '../reducers/index'


/**
 * Site header component.
 * @extends Component
 * @class
 */
class Header extends Component {
  /** Creates header. */
  constructor() {
    super();
    var storeData = store.getState();
    this.state = {
      shapes: storeData.shapes.types,
      /** @type {Array<string>} */
      links: storeData.header,
      activeShape: storeData.shapes.active
    };

    function _onShapeChange(shape) {
      this.setState({activeShape: shape});
    }

    this.onShapeChange = _onShapeChange.bind(this);
  }

  /**
   * Gets site navigation JSX string.
   * @return {string} JSX string
   */
  getNavItems() {
    return this.state.links.map(function(item, i) {
      return (
          <li className="nav-item" key={i}>
            <Link className="nav-link" to={item} spy={true} smooth={true} offset={-50} duration={500}>
            {item}
            </Link>
          </li>
      )
    });
  }

  /**
   * Component on mount handler.
   */
  componentWillMount() {
    this.unsubscribeStore = store.subscribe(()=> {
      let state = store.getState();
      this.setState({activeShape: state.shapes.active});
    });
  }

  /**
   * Component on unmount handler.
   */
  componentWillUnMount() {
    this.unsubscribeStore();
  }

  /**
   * Gets shapes JSX string.
   * @return {string} JSX string.
   */
  getShapes() {
    return ( <div className="label-block">
    {this.state.shapes.map((shape, i) => {
          return (
              <span key={i}
                  onClick={() => store.dispatch(ShapesActions.changeShape(shape))}
                  className={"label-element" + (this.state.activeShape === shape ? ' active' : '') + ' ' + shape}
                  src={"/images/icons/" + shape + ".png"}></span>
          )
        })}
    </div>
    );
  }

  /**
   * Renders component.
   * @return {string} JSX string.
   */
  render() {
    return (
        <header>
          <nav className="nav navbar-right">
            <button className="navbar-toggler hidden-md-up float-xs-right collapsed"
                id="nav-icon3" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive"
                aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="clear-fix"></div>
            <div className="collapse navbar-toggleable-sm" id="navbarResponsive">
                {this.getShapes()}
              <ul className="nav navbar-nav float-xs-right">
                    {this.getNavItems()}
              </ul>
            </div>
          </nav>
        </header>
    )
  }
}

export default Header