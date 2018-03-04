import React, { Component } from 'react';
import SectionComponent from './SectionComponent'
import PropTypes from 'prop-types'

/**
 * About section.
 * @extends SectionComponent
 * @class
 */
class About extends Component {
  /** Creates about section. */
  constructor() {
    super();
    /** @type {Array<string>} */
    this.aboutStatements = ['I am web developer with Master degree in ' +
    'Social Informatics in National University Lviv Polytechnic ' +
    'and 6 years of Web development.',
      'I have experience in both UI and server side development. ' +
      'Worked with Microsoft technologies ASP.NET, ASP.NET MVC, ADO.NET, WebAPI using C#.' +
      ' In UI development used JQuery libraries, Angular 1.x & 2+, VueJS, ReactJS, KnockoutJS, YUI, Phonegap/cordova,' +
      ' Grunt, Bower, Webpack, Jasmine, CSS3, LESS, Bootstrap. ' +
      'Also have some expirience with Wordpress, desktop apps based on WinForms ' +
      'and WPF, MatLab, LaTex, C++, Java, Python.',
      'I like to meet new people and take part in new project with interesting challenges' +
      ' or help with extending or fixing existing.'
    ]
  }
  /**
   * @override
   * @inheritDoc
   */
  render() {
    return (<SectionComponent id="about">
      <div className="info content-box">
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