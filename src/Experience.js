import React from 'react'
import SectionComponent from './SectionComponent'
import Technology from './Technology'

class Experience extends SectionComponent {
  constructor() {
    super();
    this.state = {
      technologies:[{
          fullName: "Javascript",
          shortName: "js",
          val:"88",
          details: "Jquery,YUI, Angular JS, D3, Knockout JS"
      }, {
          fullName: "HTML/CSS",
          shortName: "html",
          val: "85",
          details: "Bootstrap, less, SASS, HTML5, CSS3"
      }, {
          fullName: "ASP.NET/C#",
          shortName:"asp",
          val: "70",
          details: "ASP.NET MVC, LINQ, SQL"
      }]
    };
    this.TEXT = {
      HEADER: {
        MAIN: 'My knowledge level in software development',
        SUB: 'based on web technologies AJAX, REST, SOAP, JSON'
      },
      FOOTER: 'Also have expireance with Python, Java, Wordpress, PHP, ' +
      'MatLab, LaTex'
    };

    this.scrollHandler_ = this.showTechnologies.bind(this);
  }

  componentDidMount() {
    super.componentDidMount.apply(this, arguments);
    window.addEventListener('scroll', this.scrollHandler_);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler_);
  }

  renderTechnologies() {
    return this.state.technologies.map((info, i) => {
      return <Technology ref={'tech-' + i} key={i} info={info}/>;
    });
  }

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

  showTechnologies() {
    var refs = this.refs;
    for (var ref in refs) {
      if (refs.hasOwnProperty(ref) && refs[ref] instanceof Technology) {
        refs[ref].show();
      }
    }
  }
}

export default Experience
