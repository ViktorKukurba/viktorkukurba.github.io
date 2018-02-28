import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import PortfolioActions from '../actions/PortfolioActions'
import SectionComponent from './SectionComponent'
import store from '../reducers/index'
import '../Portfolio.css'


/**
 * Portfolio section component.
 * @extends {SectionComponent}
 * @class
 */
class Portfolio extends SectionComponent {
  componentWillMount() {
    store.dispatch(PortfolioActions.fetchProjects())
  }

  /**
   * Renders projects.
   * @return {Array} JSX string.
   */
  renderProjects() {
    return (this.props.projects.map((project,i) => {
        return (<PortfolioProject key={i} index={i} project={project}/>)
      }));
  }

  /**
   * Renders portfolio projects content.
   * @return {string} JSX string.
   */
  renderContent() {
    return (<div className="portfolio component">
          <header>
            <h4>PORTFOLIO. MY LATEST WORK</h4>
          </header>
          <div className="projects dimmed">
          {this.renderProjects()}
          </div>
          <div className="clear-fix"></div>
        </div>
    )
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
              className={this.getImageClass(i)} src={value}/>
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
    return (imgIndex === activeIndex ? 'active' :
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
        <div className="project col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
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

const mapStateToProps = state => {
  return {
    projects: state.portfolio.projects
  }
}

export default connect(mapStateToProps)(Portfolio)