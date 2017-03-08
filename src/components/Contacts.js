import React from 'react'
import 'whatwg-fetch'
import SectionComponent from './SectionComponent'
import ContactsConstants from '../constants/ContactsConstants'
import ContactsActions from '../actions/ContactsActions'
import store from '../reducers/index'

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
    var state = store.getState().contacts;
    this.state = {
      social: state.social,
      alert: state.form.alert,
      sending: state.form.sending,
      sendData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  }

  /** Binds handlers on contacts store events. */
  componentWillMount() {
    this.unsubscribeStore = store.subscribe(() => {
      this.setState(store.getState().contacts.form);
    });
  }

  /** Unbinds handlers on contacts store events. */
  componentWillUnMount() {
    this.unsubscribeStore();
  }

  /**
   * Handles click on social link.
   * @param {Object} social Describes social platform.
   * @static
   */
  static handleSocialClick(social) {
    window['ga']('send', {
      hitType: 'event',
      eventCategory: 'Social',
      eventAction: 'click',
      eventLabel: social.name
    });
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
                  onClick={() => Contacts.handleSocialClick(soc)}
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
    store.dispatch((dispatch) => {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      store.dispatch(ContactsActions.sendMessage());
      fetch('/send-email.php', {
        method: 'POST',
        body: JSON.stringify(this.state.sendData),
        headers: headers
      }).then((response) => {
        if (response.ok) {
          dispatch(ContactsActions.sendSuccess());
          setTimeout(() => {
            dispatch({
              type: ContactsConstants.CLOSE_MESSAGE
            });
          }, 3e3);
          window['ga']('send', {
            hitType: 'event',
            eventCategory: 'Contacts',
            eventAction: 'send',
            eventLabel: 'email'
          });
        } else {
          dispatch(ContactsActions.sendError());
        }
      });
    });
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
                  <button className="form-control form-control-sm" type="submit">{this.state.sending ? 'Sending' : 'Send'}</button>
                </div>
                <div className="clear-fix"></div>
                  <div className={(this.state.alert.show ? "" : " hidden ") + "alert-wrapper"}>
                    <div className={"alert alert-dismissible" +
                    (this.state.alert.success ? " alert-success" : " alert-danger")} role="alert">
                      <button type="button" className="close" onClick={()=>{store.dispatch({
                        type: ContactsConstants.CLOSE_MESSAGE
                      })}} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <strong>{this.state.alert.success ? "Success" : "Error"}!</strong> {this.state.alert.message}
                    </div>
                  </div>
              </form>
            </div>
            <div className="clear-fix"></div>
          {this.renderSocial()}
          </div>)
  }
}

export default Contacts