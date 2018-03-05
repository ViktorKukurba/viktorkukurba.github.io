import EventEmitter from 'events'
import ContactsConstants from '../constants/ContactsConstants'
import ContactsDispatcher from '../dispatcher/ContactsDispatcher'


class ContactsStore extends EventEmitter {
  /** Creates contacts store. */
  constructor() {
    super();
    this.state = {
      social: [{
        'name': 'upwork',
        'link': 'https://www.upwork.com/o/profiles/users/_~01ffdcc3a73ddc8d3c/'
      }, {
        'name': 'linkedin',
        'link': 'https://www.linkedin.com/in/viktor-kukurba-32496549'
      }, {
        'name': 'facebook',
        'link': 'https://www.facebook.com/viktor.kukurba'
      }, {
        'name': 'github',
        'link': 'https://github.com/ViktorKukurba'
      }, {
        'name': 'stackoverflow',
        'link': 'http://stackoverflow.com/users/1940821/viktor-kukurba'
      }]
    }
  }

  /**
   * Get social items.
   * @return {Array<Object>}
   */
  getSocialNetworks() {
    return this.state.social;
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
   * Handles contact form submit.
   * @param {Object} data Submit data.
   */
  handleFormSubmit(data) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    fetch('/send-email.php', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: headers
    }).then((response) => {
      if (response.ok) {
        this.emit(ContactsConstants.SAVED);
        window['ga']('send', {
          hitType: 'event',
          eventCategory: 'Contacts',
          eventAction: 'send',
          eventLabel: 'email'
        });
      } else {
        this.emit(ContactsConstants.SAVE_ERROR);
      }
    });
  }

  /**
   * Handles contacts store actions.
   * @param {Object} payload
   */
  handleActions(payload) {
    switch(payload.actionType) {
      case ContactsConstants.SOCIAL_CLICK: {
        ContactsStore.handleSocialClick(payload.social);
        return true;
      }

      case ContactsConstants.SEND_MESSAGE: {
        this.handleFormSubmit(payload.data);
        return true;
      }

      default: return true;
    }
  }
}

var contactsStore = new ContactsStore();

ContactsDispatcher.register(contactsStore.handleActions.bind(contactsStore));

export default contactsStore;
