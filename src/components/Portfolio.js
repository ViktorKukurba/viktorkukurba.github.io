import React, {Component} from 'react'
import SectionComponent from './SectionComponent'
import PortfolioStore from '../stores/PortfolioStore'
import '../Portfolio.css'


/**
 * Portfolio section component.
 * @extends {SectionComponent}
 * @class
 */
class Portfolio extends SectionComponent {
  /** Creates portfolio section. */
  constructor() {
    super();
    this.state = {
      projects: PortfolioStore.getPortfolioProjects()
    };
  }

  /**
   * Renders projects.
   * @return {Array} JSX string.
   */
  renderProjects() {
    return (this.state.projects.map((project,i) => {
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
    project: React.PropTypes.shape({
      images: React.PropTypes.array
    }),
    name: React.PropTypes.string,
    index: React.PropTypes.number
  };

  static TEST = {
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
      }, PortfolioProject.TEST.SLIDE_TIME);
    }, this.props.index * PortfolioProject.TEST.WAIT_TIME);
  }

  /**
   * Gets images.
   * @return {string} JSX string.
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

export default Portfolio