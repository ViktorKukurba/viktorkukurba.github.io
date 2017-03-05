import React from 'react'
import 'whatwg-fetch'
import SectionComponent from './SectionComponent'
import ContactsStore from '../stores/ContactsStore'
import ContactsConstants from '../constants/ContactsConstants'
import ContactsActions from '../actions/ContactsActions'
import '../Contacts.css'

/**
 * Contacts section.
 * @extends SectionComponent
 * @class
 */
class Contacts extends SectionComponent {
  /** Creates Contacts section. */
  constructor() {
    super();
    this.state = {
      social: ContactsStore.getSocialNetworks(),
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

    this.submitErrorHandle = () => {
      this.setState({
        alert: {
          show: true,
          success: false,
          message: ContactsConstants.SUBMIT_ERROR
        }
      });
    };

    this.submitSuccessHandler = () => {
      this.contactForm.reset();
      setTimeout(() => {
        this.setState({
          alert: {
            show: false
          }
        });
      }, 3e3);
    };
  }

  /** Binds handlers on contacts store events. */
  componentWillMount() {
    ContactsStore.on(ContactsConstants.SAVED, this.submitSuccessHandler);
    ContactsStore.on(ContactsConstants.SAVE_ERROR, this.submitErrorHandle);
  }

  /** Unbinds handlers on contacts store events. */
  componentWillUnMount() {
    ContactsStore.removeListener(ContactsConstants.SAVED, this.submitSuccessHandler);
    ContactsStore.removeListener(ContactsConstants.SAVE_ERROR, this.submitErrorHandle);
  }

  /**
   * Renders social links block.
   * @return {string} JSX string.
   */
  renderSocial() {
    return (
        <div className="social-networks">
        {this.state.social.map((soc, i) => {
          return (<a target="_blank" key={i}
                  onClick={ContactsActions.socialClick.bind(null, soc)}
                  style={{backgroundImage: 'url(' + soc.icon + ')'}}
                  href={soc.link}></a>)
        })}
        </div>
    )
  }

  /**
   * Handles contact form submition.
   * @param {Event} event Form submit event
   */
  handleSubmit(event) {
    event.preventDefault();
    ContactsActions.sendMessage(this.state.sendData);
  }

  /**
   * Handles form input values change.
   * @param {Event} event Form element change event.
   */
  handleChange(event) {
    /** @type {Object} */ var data = this.state.sendData;
    data[event.target.name] = event.target.value;
    this.setState(data);
  }


  /**
   * Handles alert hide.
   * @param {Event} event Click event.
   */
  hideAlert(event) {
    event.preventDefault();
    this.setState({
      alert: {
        show: false
      }
    });
  }

  /**
   * @override
   * @inheritDoc
   */
  renderContent() {
    return (
          <div className="content row content-box">
            <div className="contact-box">
              <div className="info col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>{ContactsConstants.CONTACT_MESSAGE}</p>
                <a href={'mailto:' + ContactsConstants.CONTACT_EMAIL}>{ContactsConstants.CONTACT_EMAIL}</a>
              </div>
              <form onSubmit={this.handleSubmit.bind(this)} ref="contactForm"
                  className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="row form-group">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <input name="name" required value={this.state.sendData.name}
                        onChange={this.handleChange.bind(this)} className="form-control form-control-sm" placeholder="Name"/>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <input name="email" value={this.state.sendData.email}
                        onChange={this.handleChange.bind(this)} className="form-control form-control-sm" placeholder="Email"/>
                  </div>
                </div>
                <div className="form-group">
                  <input name="subject" value={this.state.sendData.subject}
                      onChange={this.handleChange.bind(this)}
                      className="form-control form-control-sm" placeholder="Subject" />
                </div>
                <div className="form-group">
                  <textarea name="message" required value={this.state.sendData.message}
                      onChange={this.handleChange.bind(this)} className="form-control form-control-sm" placeholder="Message"></textarea>
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
          </div>)
  }
}

export default Contacts