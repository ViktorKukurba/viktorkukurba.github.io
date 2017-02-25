import React, {Component} from 'react'
import SectionComponent from './SectionComponent'

class Portfolio extends SectionComponent {
  constructor() {
    super();
    this.state = {
      projects: [{
        name: 'vkukurba',
        info: "my personal webapplication",
        technologies: "HTML/CSS, SASS, React JS, jQuery JS, Bootstrap 4.",
        images: ['images/opt_my_web_app.png', 'images/opt_my_web_app_2.png',
          'images/opt_my_web_app_3.png'],
        link: "/"
      }, {
        name: 'lidikart',
        info: "gallery site for artist studio LidikART",
        technologies: "Angular JS (1.x), jQuery JS, Bootstrap 3, LESS, PHP.",
        images: ['images/opt_lidik_art_app.png', 'images/opt_lidik_art_app_2.png',
          'images/opt_lidik_art_app_3.png'],
        link: "http://lidikart.com.ua/en"
      }, {
        name: 'fredra',
        info: "info site for social organization fredra.61",
        technologies: "Angular JS (1.x), jQuery JS, Bootstrap 3, LESS, PHP.",
        images: ['images/opt_fredra_61_app.png', 'images/opt_fredra_61_app_2.png',
          'images/opt_fredra_61_app_3.png'],
        link: "http://fredra.org/en"
      }]
    };
  }

  renderProjects() {
    return (
      this.state.projects.map((project,i) => {
        return (<PortfolioProject key={i} index={i} project={project}/>)
      }));
  }

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

class PortfolioProject extends Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 0
    }
  }
  componentDidMount() {
    let max = this.props.project.images.length - 1;
    let self = this;
    let activeIndex = 0;
    setTimeout(function() {
      setInterval(() => {
        activeIndex = activeIndex === max ? 0 : (activeIndex + 1);
        self.setState({activeIndex: activeIndex});
      }, 6e3);
    }, this.props.index * 2e3);
  }

  getImages() {
    return this.props.project.images.map((value, i) => {
      return (
          <img key={i} data-index={this.state.activeIndex} alt="project screen"
              className={this.getImageClass(i)} src={value}/>
      );
    });
  }

  getImageClass(imgIndex) {
    let activeIndex = this.state.activeIndex;
    let nextDiff = [1, 1 - this.props.project.images.length];
    return (imgIndex === activeIndex ? 'active' :
        nextDiff.indexOf(imgIndex - activeIndex) > -1 ? 'next' : '');
  }

  projectClickHandler() {
    window['ga']('send', {
      hitType: 'event',
      eventCategory: 'Portfolio',
      eventAction: 'click',
      eventLabel: this.props.name
    });
  }

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