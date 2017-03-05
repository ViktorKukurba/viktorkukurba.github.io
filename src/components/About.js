import React from 'react';
import SectionComponent from './SectionComponent'

/**
 * About section.
 * @extends SectionComponent
 * @class
 */
class About extends SectionComponent {
  /** Creates about section. */
  constructor() {
    super();
    /** @type {Array<string>} */
    this.aboutStatements = ['I am web developer with Master degree in ' +
    'Social Informatics in National University Lviv Polytechnic ' +
    'and 6 years of Web development.',
      'I have experience in both UI and server side development. ' +
      'Worked with Microsoft technologies ASP.NET, ASP.NET MVC, ADO.NET, WebAPI using C#.' +
      ' In UI development used JQuery libraries, Angular, YUI, Phonegap/cordova,' +
      ' Grunt, Bower, Jasmine, CSS3, LESS, Bootstrap. ' +
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
  renderContent() {
    return (
        <div className="info content-box">
        {this.aboutStatements.map((statement, i) => {
              return (<p key={i}>{statement}</p>)
            })}
        </div>
    )
  }
}

export default About