import React, {Component} from 'react'
import isElementOnView from './Utils'
import SectionComponent from './SectionComponent'

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
  }

  componentDidMount() {
    super.componentDidMount.apply(this, arguments);
    window.addEventListener('scroll', function() {
      var bars = document.querySelectorAll('#experience .item:not(.shown)');

      Array.prototype.forEach.call(bars, function(bar) {
        let visible = isElementOnView(bar);
        if (visible) {
          bar.classList.add('shown');
          let barValue = bar.querySelector('.bar-value');
          let barLabel = bar.querySelector('.bar-label');
          barValue.style.width = barValue.getAttribute('data-val') + '%';
          barLabel.style.left = barLabel.getAttribute('data-val') + '%';
        }
      });
    });
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  renderTechnologies() {
    return this.state.technologies.map((info, i) => {
      return <Technology key={i} info={info}/>
    });
  }

  renderContent() {
    return (
        <div className="experience component">
          <header>
            <h4>MY KNOWLEDGE LEVEL IN SOFTWARE DEVELOPMENT</h4>
            <h5>based on web technologies AJAX, REST, SOAP, JSON</h5>
          </header>

          <div className="technologies dimmed">
          {this.renderTechnologies()}
          </div>
          <footer>
            <h5>Also have expireance with Python, Java, Wordpress, PHP, MatLab, LaTex</h5>
          </footer>
          <div className="clear-fix"></div>
        </div>
    )
  }
}

class Technology extends Component {
  render() {
    let info = this.props.info;
    return (
        <div className={info.shortName + " item"}>
          <div className="title">
            <label>{info.fullName}</label>
          </div>
          <div className="bar-wrapper">
            <div className="bar col-xs-12">
              <div className="bar-value" data-val={info.val}></div>
            </div>
            <span className="title bar-label" data-val={info.val}>{info.val}%</span>
            <div className="details">{info.details}</div>
          </div>
        </div>
    )
  }
}

export default Experience