import React, { Component } from 'react';
import SectionComponent from './SectionComponent';
import PropTypes from 'prop-types';

import pdf from '../assets/cv_viktor_kukurba.pdf';

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
    this.aboutStatements = [`I've been working as a frontend developer for more than 6 years of comercial development.
      During this time had an experience with modern UI frameworks Vue, Angular, React, and still I'm interested in improving my skills in it.`,
      `In UI development I've also used JQuery libraries, Angular 1.x, KnockoutJS, YUI, Phonegap/cordova, 
      Grunt, Bower, Webpack, Jasmine, CSS3, LESS, Bootstrap.`,
      `I've started programming with server side development using Microsoft technologies ASP.NET, ASP.NET MVC, ADO.NET, WebAPI using C#. 
      Also have faced with server side developed with Python Django, Node, PHP, WordPress.`,
      `I graduated Master degree in Social Informatics at National University Lviv Polytechnic.`,
      `I like to meet new people and take part in new project with interesting challenges or help with extending or fixing existing.`
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
        Check details in my <a style={{color: 'white'}} target="blank" href={pdf}>CV</a>
      </div>
    </SectionComponent>)
  }
}

About.contextTypes = {
  store: PropTypes.object
};

export default About