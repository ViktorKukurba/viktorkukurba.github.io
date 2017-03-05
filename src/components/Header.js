import React, {Component} from 'react'
import {Link} from 'react-scroll'
import HeaderStore from '../stores/HeaderStore'
import HeaderActions from '../actions/HeaderActions'


/**
 * Site header component.
 * @extends Component
 * @class
 */
class Header extends Component {
  /** Creates header. */
  constructor() {
    super();
    this.state = {
      shapes: HeaderStore.getShapes(),
      /** @type {Array<string>} */
      links: HeaderStore.getLinks(),
      activeShape: HeaderStore.getActiveShape()
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
    HeaderStore.addChangeListener(this.onShapeChange);
  }

  componentWillUnMount() {
    HeaderStore.removeChangeListener(this.onShapeChange);
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
                  onClick={HeaderActions.changeShape.bind(null, shape)}
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