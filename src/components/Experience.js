import React, { Component } from 'react'
import { connect } from 'react-redux'
import SectionComponent from './SectionComponent'
import Technology from './Technology'
import ExperienceActions from '../actions/ExperienceActions'

import store from '../reducers/index'

class Experience extends Component {
  /** Creates experience section. */
  constructor() {
    super();

    this.TEXT = {
      HEADER: {
        MAIN: 'My knowledge level in software development',
        SUB: 'based on web technologies AJAX, REST, SOAP, JSON'
      }
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
  render() {
    return (
        <SectionComponent id="experience">
          <div className="experience component">
            <header>
              <h4>{this.TEXT.HEADER.MAIN}</h4>
              <h5>{this.TEXT.HEADER.SUB}</h5>
            </header>

            <div className="technologies dimmed">
            {this.renderTechnologies()}
            </div>
            <div className="clear-fix"></div>
          </div>
        </SectionComponent>
    )
  }
}

export default connect(state => ({
  technologies: state.experience.technologies
}))(Experience)
