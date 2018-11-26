import React, { Component } from 'react';
import SectionComponent from './SectionComponent'
import PropTypes from 'prop-types'

/**
 * About section.
 * @extends Component
 * @class
 */
class About extends Component {
  /** Creates about section. */
  constructor() {
    super();
    /** @type {Array<string>} */
    this.aboutStatements = [`I've been working as frontend developer for more than 6 years of comercial development.
      I have experience with modern UI frameworks Vue, Angular, React, and still I'm interested in improving my skills in it.
      I've started programming with server side development using Microsoft technologies ASP.NET, ASP.NET MVC, ADO.NET, WebAPI using C#. 
      Also have faced server side on Python Django, Node, PHP, WordPress. 
      That gives me knowladge and understanding how server side should be developed and how it works, 
      but still my strong side is Frontend.
      In UI development I've also used JQuery libraries, Angular 1.x, KnockoutJS, YUI, Phonegap/cordova, 
      Grunt, Bower, Webpack, Jasmine, CSS3, LESS, Bootstrap.
      I graduated Master degree in Social Informatics at National University Lviv Polytechnic.
      I like to meet new people and take part in new project with interesting challenges or help with extending or fixing existing.`
    ]
  }
  /**
   * Renders component
   * @inheritDoc
   */
  render() {
    return (<SectionComponent id="about">
      <div className="info content-box text-justify">
        {this.aboutStatements.map((statement, i) => {
          return (<p key={i}>{statement}</p>)
        })}
      </div>
    </SectionComponent>)
  }
}

About.contextTypes = {
  store: PropTypes.object
};

export default About