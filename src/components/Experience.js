import React from 'react'
import { connect } from 'react-redux'
import SectionComponent from './SectionComponent'
import Technology from './Technology'
import ExperienceActions from '../actions/ExperienceActions'

import store from '../reducers/index'

class Experience extends SectionComponent {
  /** Creates experience section. */
  constructor() {
    super();
    // this.state = {
    //   /** @type {Array<Object>} */
    //   technologies: store.getState().experience.technologies
    // };

    this.TEXT = {
      HEADER: {
        MAIN: 'My knowledge level in software development',
        SUB: 'based on web technologies AJAX, REST, SOAP, JSON'
      },
      FOOTER: 'Also have expireance with Python, Java, Wordpress, PHP, ' +
      'MatLab, LaTex'
    };
  }

  componentWillMount() {
    store.dispatch(ExperienceActions.fetchTechnologies())
  }

  /**
   * Renders technologies.
   * @return {string} JSX string.
   */
  renderTechnologies() {
    return this.props.technologies.map((info, i) => {
      return <Technology ref={'tech-' + i} key={i} info={info}/>;
    });
  }

  /**
   * @overrides
   * @inheritDoc
   */
  renderContent() {
    return (
        <div className="experience component">
          <header>
            <h4>{this.TEXT.HEADER.MAIN}</h4>
            <h5>{this.TEXT.HEADER.SUB}</h5>
          </header>

          <div className="technologies dimmed">
          {this.renderTechnologies()}
          </div>
          <footer>
            <h5>{this.TEXT.FOOTER}</h5>
          </footer>
          <div className="clear-fix"></div>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    technologies: state.experience.technologies
  }
}

export default connect(
    mapStateToProps
)(Experience)