import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <section id="about">
          <div className="info">
            <p>
            I am web developer with Master degree in Social Informatics in National University Lviv Polytechnic and
            5 years of Web development.</p>
            <p>
            I have experience in both UI and server side development. Worked with Microsoft technologies ASP.NET, ASP.NET MVC, ADO.NET, WebAPI using C#. In UI development used JQuery libraries, Angular, YUI, Phonegap/cordova, Grunt, Bower, Jasmine, CSS3, LESS, Bootstrap. Also have some expirience with Wordpress, desktop apps based on WinForms and WPF, MatLab, LaTex, C++, Java, Python.
            </p>
            <p>
            I like to meet new people and take part in new project with interesting challenges or help with extending or fixing existing.
            </p>
          </div>
          <div className="clear-fix"></div>
        </section>
    )
  }
}

export default About