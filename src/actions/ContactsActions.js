import ContactsDispatcher from '../dispatcher/ContactsDispatcher'
import ContactsConstants from '../constants/ContactsConstants'

var ContactsActions = {
  /**
   * Fires social icon click event.
   * @param {Object} social
   */
  socialClick(social) {
    ContactsDispatcher.dispatch({
      actionType: ContactsConstants.SOCIAL_CLICK,
      social
    });
  },

  /**
   * Fires send message event.
   * @param {Object} data
   */
  sendMessage(data) {
    ContactsDispatcher.dispatch({
      actionType: ContactsConstants.SEND_MESSAGE,
      data
    });
  }
};

export default ContactsActions;