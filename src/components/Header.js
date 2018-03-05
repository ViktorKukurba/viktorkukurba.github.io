import React, {Component} from 'react'
import {Link} from 'react-scroll'
import ShapesActions from '../actions/ShapesActions'
import {
    Collapse,
    Navbar,
    Button,
    Nav,
    NavItem } from 'reactstrap';

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
    this.toggle = this.toggle.bind(this);
    this.state = {
      shapes: storeData.shapes.types,
      /** @type {Array<string>} */
      links: storeData.header,
      activeShape: storeData.shapes.active,
      isOpen: false
    };

    function _onShapeChange(shape) {
      this.setState({activeShape: shape});
    }

    this.onShapeChange = _onShapeChange.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  /**
   * Gets site navigation JSX string.
   * @return {string} JSX string
   */
  getNavItems() {
    return this.state.links.map(function(item, i) {
      return (
          <NavItem className="nav-item" key={i}>
            <Link className="nav-link" to={item} spy={true} smooth={true} offset={-50} duration={500}>
            {item}
            </Link>
          </NavItem>
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
    return ( <div className="label-block navbar-brand">
      {this.state.shapes.map((shape, i) => {
        return (
            <span key={i}
                  onClick={() => store.dispatch(ShapesActions.changeShape(shape))}
                  className={"label-element" + (this.state.activeShape === shape ? ' active' : '') + ' ' + shape}></span>)
      })}
    </div>);
  }

  /**
   * Renders component.
   * @return {string} JSX string.
   */
  render() {
    return (<header>
          <Navbar expand="md" className="nav navbar-light">
            {this.getShapes()}
            <Button onClick={this.toggle} className={"navbar-toggler hidden-md-up float-xs-right" +  (this.state.isOpen ? "" : " collapsed")}
                    id="nav-icon3" type="button" data-toggle="collapse"
                    data-target="#navbarResponsive" aria-controls="navbarResponsive"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </Button>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto float-right" navbar>
                {this.getNavItems()}
              </Nav>
            </Collapse>
          </Navbar>
        </header>)
  }
}

export default Header