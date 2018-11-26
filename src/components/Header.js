import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-scroll'
import { debounce } from "debounce";
import { Collapse, Navbar, Button, Nav, NavItem } from 'reactstrap'

import ShapesActions from '../actions/ShapesActions'
import store from '../reducers/index'
import '../styles/Header.sass';

const themes = ['blue', 'elegant', 'corporate']; // 'gray', 'violet', 'purple'

/**
 * Site header component.
 * @extends Component
 * @class
 */
class Header extends Component {
  /** Creates header. */
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      top: true,
      theme: 'blue'
    };
  }

  componentWillMount() {
    this.selectTheme(this.state.theme)
  }

  componentDidMount() {
    this.scrollHandler = debounce(() => {
      const top = document.documentElement.scrollTop <= 10;
      if (top !== this.state.top) {
        this.setState({top})
      }
    }, 100).bind(this);
    window.addEventListener('scroll', this.scrollHandler);
    this.setState({top: document.documentElement.scrollTop <= 10})
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  get themeTitle() {
    return `App theme: ${this.state.theme}`;
  }

  /**
   * Gets site navigation JSX string.
   * @return {string} JSX string
   */
  getNavItems() {
    return this.props.links.map(function(item, i) {
      return (
          <NavItem className="nav-item" key={i}>
            <Link className="nav-link" to={item} spy={true} smooth={true} offset={-100} duration={500}>
              {item.replace('-', ' ')}
            </Link>
          </NavItem>
      )
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
      {this.props.shapes.map((shape, i) => {
        return (
            <span key={i}
                  onClick={() => store.dispatch(ShapesActions.changeShape(shape))}
                  className={"label-element" + (this.props.activeShape === shape ? ' active' : '') + ' ' + shape}></span>)
      })}
    </div>);
  }

  /**
   * Renders component.
   * @return {string} JSX string.
   */
  render() {
    return (<header className={this.state.top ? 'top' : ''}>
      <div className="container pt-2">
        <div className="row justify-content-between">
          {this.getShapes()}
          <Navbar expand="md" className="nav navbar-light justify-content-end">
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
                <NavItem>
                  <div className="dropdown h-100">
                    <button className="btn btn-secondary dropdown-toggle h-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      {this.themeTitle}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {themes.map(color => {
                        return <a className={'dropdown-item cursor-pointer' + (color === this.state.theme ? ' active' : '')} key={color} onClick={() => this.selectTheme(color)}>{color}</a>
                      })}
                    </div>
                  </div>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <hr/>
          </div>
          </div>
        </header>)
  }

  selectTheme(color) {
    this.setState({theme: color});
    document.body.className = `theme-${color}`;
  }
}

export default connect(state => ({
  shapes: state.shapes.types,
  links: state.header,
  activeShape: state.shapes.active,
}))(Header)
