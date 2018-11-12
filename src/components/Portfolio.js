import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import OwlCarousel from 'react-owl-carousel';

import PortfolioActions from '../actions/PortfolioActions'
import SectionComponent from './SectionComponent'
import store from '../reducers/index'
import '../Portfolio.sass'
import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

const CAROUSEL_OPTIONS = {
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  },
  navText: ['<i class="left"/>', '<i class="right"/>'],
  margin: 9,
  nav: true,
  loop: true,
  autoplay: true
}

/**
 * Portfolio section component.
 * @extends {SectionComponent}
 * @class
 */
class Portfolio extends Component {
  componentWillMount() {
    store.dispatch(PortfolioActions.fetchProjects())
  }

  /**
   * Renders projects.
   * @return {Array} JSX string.
   */
  renderProjects() {
    return this.props.projects.length && (this.props.projects.map((project,i) => {
        // return <div className="item" key={i}><h4>3</h4></div>
        return (<PortfolioProject key={i} index={i} project={project}/>)
      }));
  }

  /**
   * Renders portfolio projects content.
   * @return {string} JSX string.
   */
  render() {
    // console.log('ttt', projects);
    return this.props.projects.length && (<SectionComponent id="portfolio">
      <div className="portfolio component">
        <header><h4>PORTFOLIO. MY LATEST WORKS</h4></header>
        <div className="projects dimmed">
          <OwlCarousel {...CAROUSEL_OPTIONS} className="owl-theme">
            {this.renderProjects()}
            {/* {<PortfolioProject project={this.props.projects[0]}/>} */}
            {/* {(this.props.projects.map((project,i) => {
        return <PortfolioProject key={i} index={i} project={project}/>
      }))} */}
          </OwlCarousel>
        </div>
        <div className="clear-fix"></div>
      </div>
    </SectionComponent>)
  }
}

/**
 * Portfolio project component.
 * @extends {Component}
 * @class
 */
class PortfolioProject extends Component {
  /** Creates portfolio project. */
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
  }

  static propTypes = {
    project: PropTypes.shape({
      images: PropTypes.array
    }),
    name: PropTypes.string,
    index: PropTypes.number
  };

  static WAIT_CONSTANTS = {
    WAIT_TIME: 2e3,
    SLIDE_TIME: 6e3
  };

  /** Handles portfolio project on mount. */
  componentDidMount() {
    let max = this.props.project.images.length - 1;
    let self = this;
    let activeIndex = 0;
    setTimeout(function() {
      setInterval(() => {
        activeIndex = activeIndex === max ? 0 : (activeIndex + 1);
        self.setState({activeIndex: activeIndex});
      }, PortfolioProject.WAIT_CONSTANTS.SLIDE_TIME);
    }, this.props.index * PortfolioProject.WAIT_CONSTANTS.WAIT_TIME);
  }

  /**
   * Gets images.
   * @return {Array} JSX array.
   */
  getImages() {
    return this.props.project.images.map((value, i) => {
      return (
          <img key={i} data-index={this.state.activeIndex} alt="project screen"
              className={this.getImageClass(i)}/>
      );
    });
  }


  /**
   * Gets image cssclass by index
   * @param {number} imgIndex
   * @return {string} Css class.
   */
  getImageClass(imgIndex) {
    let activeIndex = this.state.activeIndex;
    let nextDiff = [1, 1 - this.props.project.images.length];
    var project = `proj-${this.props.project.name}-${imgIndex} `
    return project + (imgIndex === activeIndex ? 'active' :
        nextDiff.indexOf(imgIndex - activeIndex) > -1 ? 'next' : '');
  }

  /** Project click handler. */
  projectClickHandler() {
    window['ga']('send', {
      hitType: 'event',
      eventCategory: 'Portfolio',
      eventAction: 'click',
      eventLabel: this.props.name
    });
  }

  /**
   * Renders portfolio project.
   * @return {string} JSX string.
   */
  render() {
    let project = this.props.project;
    return (
        <div className="project item">
          <a href={project.link} target="_blank"
              onClick={this.projectClickHandler.bind(this)} className="content">
            <div className="images-container">
            {this.getImages()}
            </div>
            <div className="info">
              <span>{project.info}</span>
              <br/>
              <label>Technologies used:</label>
              <span>{project.technologies}</span>
            </div>
          </a>
        </div>
    )
  }
}

export default connect(state => ({
  projects: state.portfolio.projects
}))(Portfolio)