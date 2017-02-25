import React, {Component} from 'react'
import {Link} from 'react-scroll'


class Header extends Component {
  constructor() {
    super();
    this.state = {
      shapes: ['sphere', 'hexagon', 'triangle']
    };
  }
  navLinks_ = ['about', 'experience', 'portfolio', 'contacts'];

  getNavItems() {
    return this.navLinks_.map(function(item, i) {
      return (
          <li className="nav-item" key={i}>
            <Link className="nav-link" to={item} spy={true} smooth={true} offset={-50} duration={500}>
            {item}
            </Link>
          </li>
      )
    });
  }

  selectShape(shape) {
    this.props.changeShape(shape);
    window['ga']('send', {
      hitType: 'event',
      eventCategory: 'ShapeSelect',
      eventAction: 'click',
      eventLabel: shape
    });
  }

  componentWillMount() {
    this.props.changeShape(this.state.shapes[Math.floor(Math.random() * this.state.shapes.length)]);
  }

  getShapes() {
    return ( <div className="label-block">
    {this.state.shapes.map((shape, i) => {
          return (
              <span key={i} onClick={this.selectShape.bind(this, shape)}
                  className={"label-element" + (this.props.shape === shape ? ' active' : '') + ' ' + shape}
                  src={"/images/icons/" + shape + ".png"}></span>
          )
        })}
    </div>
    );
  }

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