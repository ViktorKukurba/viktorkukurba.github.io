import React, {Component} from 'react'
import 'whatwg-fetch'

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      social: [{
        'icon': 'images/icons/upwork.jpeg',
        'link': 'https://www.upwork.com/o/profiles/users/_~01ffdcc3a73ddc8d3c/'
      }, {
        'icon': 'images/icons/linkedin.png',
        'link': 'https://www.linkedin.com/in/viktor-kukurba-32496549'
      }, {
        'icon': 'images/icons/facebook.png',
        'link': 'https://www.facebook.com/viktor.kukurba'
      }, {
        'icon': 'images/icons/git_hub.png',
        'link': 'https://github.com/ViktorKukurba'
      }, {
        'icon': 'images/icons/stackoverflow.png',
        'link': 'http://stackoverflow.com/users/1940821/viktor-kukurba'
      }],
      sendData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      alert: {
        show: false,
        success: true
      }
    };
  }

  renderSocial() {
    return (
        <div className="social-networks">
        {this.state.social.map((soc, i) => {
          return (
              <a target="_blank" key={i}
                  style={{backgroundImage: 'url(' + soc.icon + ')'}}
                  href={soc.link}></a>
          )
        })}
        </div>
    )
  }

  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var data = this.state.sendData;
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    fetch('/send-email.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: headers
    }).then((response) => {
      if (response.ok) {
        this.setState({
          sendData: {
            name: '',
            email: '',
            subject: '',
            message: ''
          },
          alert: {
            show: true,
            success: true,
            message: 'Message successfully sent.'
          }
        });
        setTimeout(() => {
          this.setState({
            alert: {
              show: false
            }
          });
        }, 3e3);
      } else {
        this.setState({
          alert: {
            show: true,
            success: false,
            message: 'Message was not sent. Please use other option to contact.'
          }
        });
      }
    });
  }

  handleChange(event) {
    var data = this.state.sendData;
    data[event.target.name] = event.target.value;
    this.setState(data);
  }

  hideAlert(event) {
    event.preventDefault();
    this.setState({
      alert: {
        show: false
      }
    });
  }

  render() {
    return (
        <section id="contacts">
          <div className="content row">
            <div className="contact-box">
              <div className="info col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>I’m open for new
                collaboration.
                Comunicate me
                on contact form, mail
                or using socialnetwork</p>
                <a href="mailto:viktor.kukurba@gmail.com">viktor.kukurba@gmail.com</a>
              </div>
              <form onSubmit={this.handleSubmit.bind(this)} className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <input name="name" required value={this.state.sendData.name} onChange={this.handleChange.bind(this)} className="form-control form-control-sm" placeholder="Name"/>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <input name="email" value={this.state.sendData.email} onChange={this.handleChange.bind(this)} className="form-control form-control-sm" placeholder="Email"/>
                  </div>
                </div>
                <div className="form-group">
                  <input name="subject" value={this.state.sendData.subject} onChange={this.handleChange.bind(this)} className="form-control form-control-sm" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea name="message" required value={this.state.sendData.message} onChange={this.handleChange.bind(this)} className="form-control form-control-sm" placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                  <button className="form-control form-control-sm" type="submit">Send</button>
                </div>
                <div className="clear-fix"></div>

                <div className={"alert alert-dismissible" + (this.state.alert.show ? "" : " hidden-xs-up") +
                (this.state.alert.success ? " alert-success" : " alert-danger")} role="alert">
                  <button type="button" className="close" onClick={this.hideAlert.bind(this)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <strong>{this.state.alert.success ? "Success" : "Error"}!</strong> {this.state.alert.message}
                </div>
              </form>
            </div>
            <div className="clear-fix"></div>
          {this.renderSocial()}
          </div>
        </section>
    )
  }
}

export default Contacts